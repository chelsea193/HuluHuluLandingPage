/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_FOODS } from '../data';
import { GalleryFoodItem } from '../types';
import { Info, HelpCircle, Check, ArrowRight, Grid3X3, Flame, Snowflake, ShieldCheck } from 'lucide-react';

export default function FoodGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedFood, setSelectedFood] = useState<GalleryFoodItem | null>(null);

  // Filter categories
  const categories = [
    { id: 'all', label: '全部食物 (All)' },
    { id: 'lunch', label: '午餐/简餐 (Meals)' },
    { id: 'staple', label: '谷物主食 (Grains)' },
    { id: 'bowl', label: '能量膳食碗 (Bento)' },
    { id: 'side', label: '汤味与甜点 (Sides)' }
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') return GALLERY_FOODS;
    if (activeCategory === 'lunch') return GALLERY_FOODS.filter((item) => item.category.includes('午餐') || item.category.includes('简餐'));
    if (activeCategory === 'staple') return GALLERY_FOODS.filter((item) => item.category.includes('主食'));
    if (activeCategory === 'bowl') return GALLERY_FOODS.filter((item) => item.category.includes('碗') || item.category.includes('沙拉'));
    if (activeCategory === 'side') return GALLERY_FOODS.filter((item) => item.category.includes('汤') || item.category.includes('甜点'));
    return GALLERY_FOODS;
  };

  const filteredItems = getFilteredItems();

  const getEnergyBadge = (type: 'neutral' | 'yin' | 'yang', overrideLabel?: string) => {
    const badge = (() => {
      switch (type) {
        case 'yin':
          return { label: '稍微偏阴 (Cooling Yin)', color: 'bg-indigo-50 border-indigo-200 text-indigo-700 font-noto-sans-sc', icon: <Snowflake className="w-3.5 h-3.5 inline mr-1 text-indigo-500" /> };
        case 'yang':
          return { label: '温阳活力 (Warming & Energising)', color: 'bg-red-50 border-red-200 text-red-700 font-noto-sans-sc', icon: <Flame className="w-3.5 h-3.5 inline mr-1 text-red-500" /> };
        default:
          return { label: '中正平性 (Central Neutral)', color: 'bg-emerald-50 border-emerald-200 text-emerald-800 font-noto-sans-sc', icon: <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-emerald-600" /> };
      }
    })();
    // Per-item label override keeps the energyType's color + icon, swaps only the text.
    return overrideLabel ? { ...badge, label: overrideLabel } : badge;
  };

  return (
    <section className="relative w-full bg-[#FCF7F1] overflow-hidden" id="gallery-section">
      {/* Single combined background: pink illustration on top, fading into cream.
          Anchored to the top at natural aspect; the section's cream bg color continues it below. */}
      {/* Desktop: single combined background — pink illustration strip fading into cream. */}
      <img
        src="/LandingPage Full Sec6-BG.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute top-0 left-0 w-full h-auto pointer-events-none select-none z-0 hidden sm:block"
        id="section-6-gallery-bg-image"
      />
      {/* Mobile: cream watercolor base fills the whole section (paired with the pink band below). */}
      <img
        src="/LandingPage Full Sec6-BG below section.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 sm:hidden"
        id="section-6-gallery-bg-below-mobile"
      />

      {/* ABOVE band — header over the pink portion. aspect-[1222/460] matches the pink
          band of the image, so the header always aligns with it at any width. */}
      <div className="relative z-10 flex items-center justify-center px-6 py-20 sm:py-0 sm:aspect-[1222/460]" id="gallery-above-section">
        {/* Mobile: the combined image's pink strip is too short to hold the header on narrow
            screens (text overflowed onto the cream cards). Under sm we use the dedicated pink
            illustration, object-cover so it fills the band at whatever height the text needs. */}
        <img
          src="/LandingPage Full Sec6-BG above section.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 sm:hidden"
          id="section-6-gallery-bg-above-mobile"
        />
        {/* Legibility scrim so the light copy reads on the bright illustration */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" aria-hidden="true"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto" id="gallery-header">
          <span className="text-white/90 text-xs uppercase tracking-widest font-noto-sans-sc font-black drop-shadow-sm" id="gallery-label">
            HULU HULU WORLD
          </span>
          <p className="text-sm md:text-base font-noto-sans-sc font-semibold text-white tracking-[0.3em] mt-3 mb-3 drop-shadow-sm" id="gallery-tagline">
            健康 · 好吃 · 能量
          </p>
          <h2 className="text-3xl md:text-5xl font-noto-sans-sc font-bold text-white tracking-tight mb-6 drop-shadow-sm" id="gallery-title">
            让食物不仅好吃，还吃出身体的能量
          </h2>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-6" id="gallery-divider"></div>
          {/* <p className="text-white/90 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base drop-shadow-sm" id="gallery-subtitle">
            从认识每一粒糙米、每一朵香菇的振动频率开始，重新找回身体平衡与高品质生活。<br />
            以下为 Hulu Hulu 食物能量菜单示例（Menu showcase placeholder）。
          </p> */}
        </div>
      </div>

      {/* BELOW content — filters + gallery over the cream portion of the image / section bg */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-12 md:pb-24 bg-[#fcf7f1] sm:bg-transparent" id="gallery-below-content">

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-category-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-noto-sans-sc font-medium transition-all duration-300 pointer-events-auto cursor-pointer ${activeCategory === cat.id
                ? 'bg-[#EB288B] text-white shadow-md shadow-amber-900/10'
                : 'bg-white text-gray-600 border border-transparent hover:border-gray-200 hover:bg-[#FCF7F1]'
                }`}
              id={`cat-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Food Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const bgBadge = getEnergyBadge(item.energyType, item.energyLabel);
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedFood(item)}
                  className="bg-white rounded-3xl overflow-hidden border border-[#ECE7DE] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer group"
                  id={`gallery-item-${item.id}`}
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50" id={`gallery-img-container-${item.id}`}>
                    <img
                      src={item.imageUrl}
                      alt={item.chineseTitle}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
                  <div className="p-6 flex flex-col justify-between flex-grow font-noto-sans-sc" id={`gallery-body-${item.id}`}>
                    <div>
                      <span className="text-[10px] uppercase font-noto-sans-sc font-bold text-[#D89A63]" id={`gallery-cat-${item.id}`}>
                        {item.category}
                      </span>
                      <h3 className="text-xl font-noto-sans-sc font-bold text-gray-800 mt-1 mb-2 group-hover:text-[#EB288B] transition-colors" id={`gallery-name-${item.id}`}>
                        {item.chineseTitle}
                      </h3>
                      <p className="text-xs uppercase font-noto-sans-sc tracking-wider text-gray-400 mb-4" id={`gallery-eng-${item.id}`}>
                        {item.title}
                      </p>

                      <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-3 mb-6" id={`gallery-desc-${item.id}`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Secondary button trigger */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto" id={`gallery-footer-${item.id}`}>
                      <span className="text-[11px] font-noto-sans-sc font-medium text-[#EB288B] flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-[#D89A63]" />
                        点击了解能量特性
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#FAF8F4] flex items-center justify-center text-gray-400 group-hover:bg-[#EB288B] group-hover:text-white transition-all duration-300" id={`arrow-trigger-${item.id}`}>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic Detail Modal */}
        <AnimatePresence>
          {selectedFood && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" id="gallery-lightbox-modal">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                id="lightbox-content-box"
              >
                {/* Close Button styling */}
                <button
                  onClick={() => setSelectedFood(null)}
                  className="absolute top-4 right-4 z-55 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#2F2F2F] shadow-sm select-auto cursor-pointer focus:ring-0 font-bold text-lg"
                  id="close-lightbox-btn"
                >
                  ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 p-0" id="lightbox-layout">
                  {/* Left Side: Mock Image Banner */}
                  <div className="md:col-span-5 relative h-64 md:h-auto min-h-[250px]" id="lightbox-image-side">
                    <img
                      src={selectedFood.imageUrl}
                      alt={selectedFood.chineseTitle}
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
                        {selectedFood.category}
                      </span>

                      <h3 className="text-2xl font-noto-sans-sc font-black text-gray-800 mt-4" id="lightbox-chinese-title">
                        {selectedFood.chineseTitle}
                      </h3>
                      <p className="text-sm font-noto-sans-sc text-gray-400 tracking-wide mb-6 uppercase">
                        {selectedFood.title}
                      </p>

                      {/* Energy rating panel */}
                      <div className="flex flex-col items-start gap-1.5 p-3 rounded-2xl bg-gray-50 border border-gray-100 mb-6" id="lightbox-rating-panel">
                        <span className="text-xs font-noto-sans-sc text-gray-600 font-medium">食物能量特性：</span>
                        <span className={`inline-flex items-center text-xs py-1 px-3 rounded-full border ${getEnergyBadge(selectedFood.energyType, selectedFood.energyLabel).color}`}>
                          {getEnergyBadge(selectedFood.energyType, selectedFood.energyLabel).icon}
                          {getEnergyBadge(selectedFood.energyType, selectedFood.energyLabel).label}
                        </span>
                      </div>

                      {/* Narrative */}
                      <p className="text-sm text-gray-600 leading-relaxed font-light mb-8" id="lightbox-description">
                        {selectedFood.description}
                      </p>

                      {/* Benefits listed */}
                      <div id="lightbox-benefits-zone">
                        <h4 className="text-xs uppercase tracking-widest font-bold text-[#EB288B] mb-4">
                          ✓ 能量滋补效益 (Energy Benefits)
                        </h4>
                        <ul className="space-y-3" id="lightbox-benefits-list">
                          {selectedFood.benefits.map((benefit, benefitIdx) => (
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
                      <span className="text-[11px] text-gray-400 font-noto-sans-sc">HULU HULU WORLD CATALOGUE</span>
                      <button
                        onClick={() => setSelectedFood(null)}
                        className="px-5 py-2 rounded-xl bg-[#EB288B] hover:bg-[#D1167B] text-white text-xs font-semibold cursor-pointer select-auto"
                        id="lightbox-close-confirm-btn"
                      >
                        返回世界页 Back
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
