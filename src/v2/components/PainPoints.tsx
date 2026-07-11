/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PAIN_POINTS } from '../data';

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

export default function PainPoints() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeIndex = useCenteredCardIndex(carouselRef);

  return (
    <section className="relative w-full bg-[#ea298c] overflow-hidden" id="pain-points-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24">
        <div className="text-center max-w-3xl md:max-w-5xl mx-auto mb-16" id="pain-points-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest font-noto-sans-sc font-semibold text-white mb-3"
            id="section-2-label"
          >
            COMMON CONCERNS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-noto-sans-sc text-white font-bold leading-tight mb-6 md:whitespace-nowrap"
            id="section-2-title"
          >
            为什么同样吃得健康，却还是觉得不舒服？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg font-noto-sans-sc text-white font-light"
            id="section-2-intro"
          >
            你是否经常出现以下情况？
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll carousel — full width, breaks out of the max-w-7xl wrapper so the
          first/last cards can scroll all the way to center. The card nearest the container's
          center is enlarged and raised, following native scroll-snap position. */}
      <div
        ref={carouselRef}
        className="relative z-10 w-full flex gap-6 pt-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-[calc(50%-8rem)] sm:px-[calc(50%-10rem)]"
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
              className="snap-center shrink-0 w-64 sm:w-80 bg-white rounded-[2rem] border-4 border-[#ea298c] overflow-hidden shadow-lg flex flex-col"
              id={`pain-card-${point.id}`}
            >
              <img
                src={`/LandingPage Full Sec2 Box-${index + 1}v2.png`}
                alt={`LandingPage Full Sec2 Box-${index + 1}v2.png`}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover object-top"
                id={`pain-image-${point.id}`}
              />
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-noto-sans-sc font-semibold text-[#2F2F2F] mb-4" id={`pain-title-${point.id}`}>
                    {point.title}
                  </h3>
                  <p className="text-sm font-noto-sans-sc text-gray-600 leading-relaxed font-light" id={`pain-desc-${point.id}`}>
                    {point.description}
                  </p>
                </div>
                <span className="text-xs font-noto-sans-sc text-[#D89A63] mt-6 select-none font-bold tracking-wider" id={`pain-num-${point.id}`}>
                  0{index + 1} // ENERGY BLOCK
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden mt-16 bg-[#F7F3EC] p-8 md:p-12 rounded-3xl border-2 border-dashed border-[#9BA88B]/40 max-w-4xl mx-auto text-center"
          id="section-3"
        >
          {/* Section 3 full-width background image slot */}
          <img
            src="/LandingPage Desktop Part2 Column.png"
            alt="LandingPage Desktop Part2 Column.png"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-fill opacity-100 pointer-events-none select-none"
            id="section-3-bg-image"
          />
          <div className="relative z-10 inline-block text-[#9BA88B] text-xs font-noto-sans-sc tracking-wider mb-6" id="closing-accent">
            DIETARY INSPIRATION
          </div>
          <p className="relative z-10 text-[#2F2F2F] text-xl md:text-2xl font-noto-sans-sc leading-loose mb-6 tracking-wide" id="closing-text">
            很多时候，问题不只是吃什么。<br />
            而是你吃进去的食物，是否真正适合你的身体状态。
          </p>
          <div className="relative z-10 w-12 h-0.5 bg-[#EB288B]/50 mx-auto mb-6" id="closing-divider"></div>
          <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-[#EB288B] tracking-wider font-noto-sans-sc" id="closing-headline">
            其实，好好吃饭就能解决。
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
