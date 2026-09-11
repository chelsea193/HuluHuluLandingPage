/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PAIN_POINTS } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

function useCenteredCardIndex(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame: number;
    const updateActiveCard = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const card = child as HTMLElement;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveCard);
    };

    updateActiveCard();
    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [containerRef]);

  return activeIndex;
}

/**
 * The carousel is native `overflow-x-auto`, which only responds to touch
 * swipes and trackpad/shift+wheel gestures. A plain desktop mouse has
 * neither, so without this it simply cannot be scrolled — this converts
 * ordinary vertical wheel input into horizontal scroll and adds click-and-
 * drag, the two ways a mouse-only visitor actually has to move it.
 */
function useDesktopDragAndWheelScroll(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only hijack the wheel when the gesture is more vertical than
      // horizontal (a plain mouse wheel) and there's still room to scroll —
      // otherwise trackpad users lose native horizontal scroll and page
      // scroll gets trapped once the carousel is exhausted.
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const atStart = scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = scrollLeft >= scrollWidth - clientWidth - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    let isDragging = false;
    let dragStartX = 0;
    let scrollStartLeft = 0;

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      isDragging = true;
      dragStartX = e.clientX;
      scrollStartLeft = container.scrollLeft;
      container.classList.add('cursor-grabbing');
      container.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      container.scrollLeft = scrollStartLeft - (e.clientX - dragStartX);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      container.classList.remove('cursor-grabbing');
      container.releasePointerCapture(e.pointerId);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [containerRef]);
}

export default function PainPoints() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeIndex = useCenteredCardIndex(carouselRef);
  useDesktopDragAndWheelScroll(carouselRef);
  const { isZh } = useLanguage();
  const t = TRANSLATIONS[isZh ? 'zh' : 'en'].painPoints;

  return (
    <section className="relative w-full bg-[#FFFAE8] overflow-hidden" id="pain-points-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24">
        <div className="text-center max-w-3xl md:max-w-5xl mx-auto mb-16" id="pain-points-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest font-noto-sans-sc font-semibold text-[#A4B799] mb-3"
            id="section-2-label"
          >
            {t.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-noto-sans-sc text-[#2F2F2F] font-bold leading-tight mb-6 md:whitespace-nowrap"
            id="section-2-title"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg font-noto-sans-sc text-gray-600 font-light"
            id="section-2-intro"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll carousel — full width, breaks out of the max-w-7xl wrapper so the
          first/last cards can scroll all the way to center. The card nearest the container's
          center is enlarged and raised, following native scroll-snap position. */}
      <div
        ref={carouselRef}
        className="relative z-10 w-full flex gap-6 pt-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-24 px-[calc(50%-8rem)] sm:px-[calc(50%-10rem)] cursor-grab select-none"
        id="pain-point-carousel"
      >
        {PAIN_POINTS.map((point, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              animate={{
                scale: isActive ? 1.08 : 0.92,
                y: isActive ? -12 : 0,
                opacity: isActive ? 1 : 0.75
              }}
              style={{ zIndex: isActive ? 10 : 1 }}
              className="snap-center shrink-0 w-64 sm:w-80 bg-white rounded-[2rem] border-4 border-[#A4B799] overflow-hidden shadow-lg flex flex-col"
              id={`pain-card-${point.id}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}LandingPage Full Sec2 Box-${index + 1}v2.webp`}
                alt={isZh ? point.title : point.titleEn}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover object-top"
                id={`pain-image-${point.id}`}
              />
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-noto-sans-sc font-semibold text-[#2F2F2F] mb-4" id={`pain-title-${point.id}`}>
                    {isZh ? point.title : point.titleEn}
                  </h3>
                  <p className="text-sm font-noto-sans-sc text-gray-600 leading-relaxed font-light" id={`pain-desc-${point.id}`}>
                    {isZh ? point.description : point.descriptionEn}
                  </p>
                </div>
                <span className="text-xs font-noto-sans-sc text-[#D89A63] mt-6 select-none font-bold tracking-wider" id={`pain-num-${point.id}`}>
                  0{index + 1} // {isZh ? '能量失衡信号' : 'ENERGY BLOCK'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
