/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_FOODS } from '../data';
import { GalleryFoodItem } from '../types';
import { Info, Check, ArrowRight, Flame, Snowflake, ShieldCheck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function FoodGallery() {
  const { isZh } = useLanguage();
  const t = TRANSLATIONS[isZh ? 'zh' : 'en'].gallery;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedFood, setSelectedFood] = useState<GalleryFoodItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // The card that opened the dialog, so closing it (Escape, backdrop click,
  // either close button) can hand keyboard focus back to where it came from
  // instead of dropping it to <body>.
  const triggerRef = useRef<HTMLElement | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse drag-to-scroll support — the carousel is native `overflow-x-auto`,
  // which only responds to touch swipes and trackpad/shift+wheel gestures.
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const openFood = (item: GalleryFoodItem, e: React.MouseEvent | React.KeyboardEvent) => {
    triggerRef.current = e.currentTarget as HTMLElement;
    setSelectedFood(item);
  };

  const closeFood = () => {
    setSelectedFood(null);
    triggerRef.current?.focus();
  };

  // Dialog behavior a modal is expected to have: Escape closes it, and focus
  // moves onto it on open so a screen reader announces the dialog instead of
  // leaving focus sitting on a card that just disappeared behind the overlay.
  useEffect(() => {
    if (!selectedFood) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFood();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFood]);

  // Filter categories — labels come from translations, but the filter itself
  // always matches against the canonical (Chinese) `category` field on the
  // data so switching languages doesn't change which items appear.
  const categories = t.categories;

  const getFilteredItems = () => {
    if (activeCategory === 'all') return GALLERY_FOODS;
    if (activeCategory === 'lunch') return GALLERY_FOODS.filter((item) => item.category.includes('午餐') || item.category.includes('简餐'));
    if (activeCategory === 'staple') return GALLERY_FOODS.filter((item) => item.category.includes('主食'));
    if (activeCategory === 'bowl') return GALLERY_FOODS.filter((item) => item.category.includes('碗') || item.category.includes('沙拉'));
    if (activeCategory === 'side') return GALLERY_FOODS.filter((item) => item.category.includes('汤') || item.category.includes('甜点'));
    return GALLERY_FOODS;
  };

  const filteredItems = getFilteredItems();

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? Math.min(1, Math.max(0, scrollLeft / maxScroll)) : 0);
  };

  useEffect(() => {
    checkScrollability();
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);
    return () => {
      el.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItems.length]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.max(340, el.clientWidth * 0.75);
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    dragDistanceRef.current = Math.abs(x - startXRef.current);
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const getEnergyBadge = (type: 'neutral' | 'yin' | 'yang', overrideLabel?: string) => {
    const badge = (() => {
      switch (type) {
        case 'yin':
          return { label: t.yinBadge, color: 'bg-indigo-50 border-indigo-200 text-indigo-700 font-noto-sans-sc', icon: <Snowflake className="w-3.5 h-3.5 inline mr-1 text-indigo-500" /> };
        case 'yang':
          return { label: t.yangBadge, color: 'bg-red-50 border-red-200 text-red-700 font-noto-sans-sc', icon: <Flame className="w-3.5 h-3.5 inline mr-1 text-red-500" /> };
        default:
          return { label: t.neutralBadge, color: 'bg-emerald-50 border-emerald-200 text-emerald-800 font-noto-sans-sc', icon: <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-emerald-600" /> };
      }
    })();
    // Per-item label override keeps the energyType's color + icon, swaps only the text.
    return overrideLabel ? { ...badge, label: overrideLabel } : badge;
  };

  return (
    <section className="relative w-full bg-[#FFFAE8] overflow-hidden" id="gallery-section">
      {/* ABOVE band — header banner with the green illustration, sized to the
          image's own aspect ratio rather than fixed padding so the artwork
          never stretches or crops oddly across breakpoints. */}
      <div className="relative z-10 flex items-center justify-center px-6 py-20 sm:py-0 sm:aspect-[1222/460] overflow-hidden" id="gallery-above-section">
        <img
          src={`${import.meta.env.BASE_URL}LP DesktopVer-26.webp`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
          id="gallery-above-bg-image"
        />
        {/* Legibility scrim so the light copy reads on the bright illustration */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" aria-hidden="true"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto" id="gallery-header">
          <span className="text-white/90 text-xs uppercase tracking-widest font-noto-sans-sc font-black drop-shadow-sm" id="gallery-label">
            {t.label}
          </span>
          <p className="text-sm md:text-base font-noto-sans-sc font-semibold text-white tracking-[0.3em] mt-3 mb-3 drop-shadow-sm" id="gallery-tagline">
            {t.tagline}
          </p>
          <h1 className="text-3xl md:text-5xl font-noto-sans-sc font-bold text-white tracking-tight mb-6 drop-shadow-sm" id="gallery-title">
            {t.title}
          </h1>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-6" id="gallery-divider"></div>
        </div>
      </div>

      {/* BELOW content — filters + carousel over the section's own cream background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-12 md:pb-24 bg-[#FFFAE8] sm:bg-transparent" id="gallery-below-content">

        {/* Filter Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto max-w-full scrollbar-hide py-1 mb-8" id="gallery-category-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2.5 rounded-full text-xs font-noto-sans-sc font-medium transition-all duration-300 pointer-events-auto cursor-pointer shrink-0 ${activeCategory === cat.id
                ? 'bg-[#A4B799] text-white shadow-md shadow-amber-900/10'
                : 'bg-white text-gray-600 border border-transparent hover:border-gray-200 hover:bg-[#FFFAE8]'
                }`}
              id={`cat-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Scrollable Carousel Row */}
        <div className="relative group/carousel px-1" id="gallery-carousel-wrapper">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label={t.scrollLeftAria}
            className={`hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur shadow-md border border-[#ECE7DE] items-center justify-center text-[#2F2F2F] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B799] focus-visible:ring-offset-2 ${canScrollLeft
              ? 'opacity-90 hover:opacity-100 hover:scale-105 hover:bg-[#A4B799] hover:text-white hover:border-[#A4B799] cursor-pointer'
              : 'opacity-0 pointer-events-none'
              }`}
            id="gallery-scroll-left-btn"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-6 overflow-x-auto pt-3 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth select-none cursor-grab active:cursor-grabbing px-1"
            id="gallery-scroll-container"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const bgBadge = getEnergyBadge(item.energyType, isZh ? item.energyLabel : item.energyLabelEn);
                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -8 }}
                    onClick={(e) => {
                      if (dragDistanceRef.current > 8) return;
                      openFood(item, e);
                    }}
                    // This card is the only way to open the detail dialog, so it
                    // needs to work as a button, not just a click target: a real
                    // <button> can't easily host this much nested layout without
                    // extra resets, so it takes the standard custom-button ARIA
                    // pattern instead — role, tabIndex, and an Enter/Space
                    // handler, since a plain onClick on a <div> is invisible to
                    // keyboard users entirely.
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    aria-label={t.ariaViewDetail(isZh ? item.chineseTitle : item.title)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openFood(item, e);
                      }
                    }}
                    className="shrink-0 w-[84vw] sm:w-[340px] md:w-[360px] lg:w-[370px] snap-start bg-white rounded-3xl overflow-hidden border border-[#ECE7DE] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B799] focus-visible:ring-offset-2"
                    id={`gallery-item-${item.id}`}
                  >
                    {/* Image wrapper */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 pointer-events-none" id={`gallery-img-container-${item.id}`}>
                      <img
                        src={item.imageUrl}
                        alt={isZh ? item.chineseTitle : item.title}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                        referrerPolicy="no-referrer"
                        id={`gallery-img-${item.id}`}
                      />

                      {/* Energy tag overlay */}
                      <div className="absolute top-4 left-4" id={`energy-tag-div-${item.id}`}>
                        <span className={`inline-flex items-center text-[10px] uppercase tracking-wide font-semibold px-3 py-1 rounded-full border shadow-sm ${bgBadge.color}`}>
                          {bgBadge.icon}
                          {bgBadge.label}
                        </span>
                      </div>

                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id={`gallery-overlay-${item.id}`}></div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow font-noto-sans-sc select-none" id={`gallery-body-${item.id}`}>
                      <div>
                        <span className="text-[10px] uppercase font-noto-sans-sc font-bold text-[#D89A63]" id={`gallery-cat-${item.id}`}>
                          {isZh ? item.category : item.categoryEn}
                        </span>
                        <h3 className="text-xl font-noto-sans-sc font-bold text-gray-800 mt-1 mb-2 group-hover:text-[#A4B799] transition-colors" id={`gallery-name-${item.id}`}>
                          {isZh ? item.chineseTitle : item.title}
                        </h3>
                        <p className="text-xs uppercase font-noto-sans-sc tracking-wider text-gray-400 mb-4" id={`gallery-eng-${item.id}`}>
                          {isZh ? item.category : item.categoryEn}
                        </p>

                        <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-3 mb-6" id={`gallery-desc-${item.id}`}>
                          {isZh ? item.description : item.descriptionEn}
                        </p>
                      </div>

                      {/* Secondary button trigger */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto" id={`gallery-footer-${item.id}`}>
                        <span className="text-[11px] font-noto-sans-sc font-medium text-[#A4B799] flex items-center gap-1">
                          <Info className="w-3.5 h-3.5 text-[#D89A63]" />
                          {t.viewDetail}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-[#FAF8F4] flex items-center justify-center text-gray-400 group-hover:bg-[#A4B799] group-hover:text-white transition-all duration-300" id={`arrow-trigger-${item.id}`}>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label={t.scrollRightAria}
            className={`hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur shadow-md border border-[#ECE7DE] items-center justify-center text-[#2F2F2F] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B799] focus-visible:ring-offset-2 ${canScrollRight
              ? 'opacity-90 hover:opacity-100 hover:scale-105 hover:bg-[#A4B799] hover:text-white hover:border-[#A4B799] cursor-pointer'
              : 'opacity-0 pointer-events-none'
              }`}
            id="gallery-scroll-right-btn"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Carousel Footer: progress track and mobile controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 px-2" id="gallery-footer-controls">
          <div className="flex items-center gap-3">
            <div className="w-32 sm:w-44 h-1.5 bg-[#ECE7DE] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#A4B799] rounded-full transition-all duration-150"
                style={{
                  width: `${Math.max(25, (1 / (filteredItems.length || 1)) * 100)}%`,
                  transform: `translateX(${scrollProgress * ((100 / Math.max(25, (1 / (filteredItems.length || 1)) * 100)) - 1) * 100}%)`
                }}
              />
            </div>
            <span className="text-xs font-noto-sans-sc text-gray-400 font-medium">
              {t.itemCount(filteredItems.length)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-noto-sans-sc hidden sm:inline">
              {t.scrollHint}
            </span>
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label={t.prevAria}
                className={`w-9 h-9 rounded-full border border-[#ECE7DE] bg-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B799] focus-visible:ring-offset-2 ${canScrollLeft ? 'text-gray-700 shadow-sm' : 'text-gray-300 opacity-40'
                  }`}
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label={t.nextAria}
                className={`w-9 h-9 rounded-full border border-[#ECE7DE] bg-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B799] focus-visible:ring-offset-2 ${canScrollRight ? 'text-gray-700 shadow-sm' : 'text-gray-300 opacity-40'
                  }`}
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Detail Modal — portaled to <body> so its z-index isn't
            capped by this section's "relative z-10" content-wrapper stacking
            context (which would otherwise trap it below the sticky header). */}
        {createPortal(
          <AnimatePresence>
          {selectedFood && (
            // Clicking the backdrop closes the dialog, same as Escape — a
            // standard modal affordance. The content box below stops the
            // click from reaching here so clicking inside the card doesn't
            // also close it.
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              id="gallery-lightbox-modal"
              onClick={closeFood}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                id="lightbox-content-box"
                role="dialog"
                aria-modal="true"
                aria-labelledby="lightbox-chinese-title"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button styling */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeFood}
                  aria-label={t.closeAria}
                  className="absolute top-4 right-4 z-55 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#2F2F2F] shadow-sm select-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B799] focus-visible:ring-offset-2 font-bold text-lg"
                  id="close-lightbox-btn"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 p-0" id="lightbox-layout">
                  {/* Left Side: Mock Image Banner */}
                  <div className="md:col-span-5 relative h-64 md:h-auto min-h-[250px]" id="lightbox-image-side">
                    <img
                      src={selectedFood.imageUrl}
                      alt={isZh ? selectedFood.chineseTitle : selectedFood.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                      referrerPolicy="no-referrer"
                      id="lightbox-visual"
                    />

                    {/* Shadowed visual layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" id="lightbox-shading"></div>
                  </div>

                  {/* Right Side: Content and Benefits list */}
                  <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between" id="lightbox-info-side">
                    <div>
                      <span className="text-xs uppercase bg-[#FAF8F4] text-[#D89A63] border border-gray-100 px-3 py-1 rounded-full font-noto-sans-sc font-bold tracking-wide" id="lightbox-cat-badge">
                        {isZh ? selectedFood.category : selectedFood.categoryEn}
                      </span>

                      <h3 className="text-2xl font-noto-sans-sc font-black text-gray-800 mt-4" id="lightbox-chinese-title">
                        {isZh ? selectedFood.chineseTitle : selectedFood.title}
                      </h3>
                      <p className="text-sm font-noto-sans-sc text-gray-400 tracking-wide mb-6 uppercase">
                        {isZh ? selectedFood.category : selectedFood.categoryEn}
                      </p>

                      {/* Energy rating panel */}
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-2xl bg-gray-50 border border-gray-100 mb-6" id="lightbox-rating-panel">
                        <span className="text-xs font-noto-sans-sc text-gray-600 font-medium">{t.energyPanelLabel}</span>
                        <span className={`inline-flex items-center text-xs py-1 px-3 rounded-full border ${getEnergyBadge(selectedFood.energyType, isZh ? selectedFood.energyLabel : selectedFood.energyLabelEn).color}`}>
                          {getEnergyBadge(selectedFood.energyType, isZh ? selectedFood.energyLabel : selectedFood.energyLabelEn).icon}
                          {getEnergyBadge(selectedFood.energyType, isZh ? selectedFood.energyLabel : selectedFood.energyLabelEn).label}
                        </span>
                      </div>

                      {/* Narrative */}
                      <p className="text-sm text-gray-600 leading-relaxed font-light mb-8" id="lightbox-description">
                        {isZh ? selectedFood.description : selectedFood.descriptionEn}
                      </p>

                      {/* Benefits listed */}
                      <div id="lightbox-benefits-zone">
                        <h4 className="text-xs uppercase tracking-widest font-bold text-[#A4B799] mb-4">
                          {t.benefitsTitle}
                        </h4>
                        <ul className="space-y-3" id="lightbox-benefits-list">
                          {(isZh ? selectedFood.benefits : selectedFood.benefitsEn).map((benefit, benefitIdx) => (
                            <li
                              key={benefitIdx}
                              className="text-xs md:text-sm text-gray-600 flex items-start gap-2.5"
                              id={`benefit-li-${benefitIdx}`}
                            >
                              <span className="w-5 h-5 rounded-full bg-[#9BA88B]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#9BA88B]" id={`benefit-check-${benefitIdx}`}>
                                <Check className="w-3.5 h-3.5" />
                              </span>
                              <span className="font-light">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between" id="lightbox-footer-action">
                      <span className="text-[11px] text-gray-400 font-noto-sans-sc">{t.catalogueTag}</span>
                      <button
                        type="button"
                        onClick={closeFood}
                        className="px-5 py-2 rounded-xl bg-[#A4B799] hover:bg-[#8E9F84] text-white text-xs font-semibold cursor-pointer select-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B799] focus-visible:ring-offset-2"
                        id="lightbox-close-confirm-btn"
                      >
                        {t.backBtn}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
}
