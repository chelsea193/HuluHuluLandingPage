/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Pill, Leaf, ShieldAlert, Heart, ClipboardCheck, Apple, Wheat } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function CompareSection() {
  const { isZh } = useLanguage();
  const t = TRANSLATIONS[isZh ? 'zh' : 'en'].compare;

  return (
    <section className="relative w-full bg-[#FFFAE8] overflow-hidden" id="compare-section">
      {/* Section 6 full-page background image slot */}
      <img
        src={`${import.meta.env.BASE_URL}LandingPage Desktop Part6 BG.webp`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        id="section-6-compare-bg-image"
      />

      {/* BELOW content — comparison cards over the section bg */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-24" id="compare-below-content">
        <div className="text-center max-w-3xl mx-auto mb-16" id="compare-header">
          <h2 className="text-3xl md:text-5xl font-noto-sans-sc font-black text-[#A4B799] tracking-tight leading-tight mb-6" id="compare-title">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#A4B799]/30 mx-auto mb-6" id="compare-divider"></div>
          <p className="text-sm md:text-base font-noto-sans-sc text-[#2F2F2F] font-light" id="compare-intro">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto" id="compare-cards-layout">

          {/* Supplements side: Greyish cooling tone */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-gray-200/80 shadow-sm relative overflow-hidden flex flex-col"
            id="supplements-card"
          >
            <img
              src={`${import.meta.env.BASE_URL}LandingPage Desktop Part6 Box1 PIC.webp`}
              alt={isZh ? '各式保健品胶囊与营养补充剂' : 'Assorted supplement capsules and pills'}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[3/2] object-cover"
              id="supplements-image"
            />
            <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
            <div>
              <div className="flex flex-col items-start gap-2 min-[957px]:flex-row min-[957px]:items-center min-[957px]:justify-between mb-6" id="suppliers-title-box">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-700" id="pill-icon-wrapper">
                    <Pill className="w-6 h-6" />
                  </span>
                  <h3 className="text-2xl font-noto-sans-sc font-black text-gray-700">{t.supplementsTitle}</h3>
                </div>
                <span className="text-xs uppercase text-gray-600 font-noto-sans-sc tracking-widest bg-gray-100 px-3 py-1 rounded-full">
                  {t.matrixTag}
                </span>
              </div>

              <p className="text-sm font-noto-sans-sc text-gray-500 font-light mb-8 italic" id="supplements-summary-desc">
                {t.supplementsSummary}
              </p>

              <ul className="space-y-4" id="supplements-item-list">
                {t.supplementsItems.map((item, idx) => (
                  <li className="flex items-start gap-3" id={`supplements-item-${idx + 1}`} key={item.title}>
                    <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-800 text-sm font-noto-sans-sc block">{item.title}</strong>
                      <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100/40 mt-8 text-xs font-noto-sans-sc text-amber-800 font-light flex items-center gap-2" id="supps-disclaimer">
              <ClipboardCheck className="w-4 h-4 shrink-0 text-amber-600" />
              {t.supplementsDisclaimer}
            </div>
            </div>
          </motion.div>

          {/* Natural food side: Golden warm green tone */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex flex-col"
            id="natural-food-card"
          >
            {/* Recommended highlight element bar */}
            <div className="absolute top-0 right-8 -translate-y-1/2 z-20 bg-[#9BA88B] text-white text-[10px] tracking-widest uppercase font-noto-sans-sc font-bold px-4 py-1.5 rounded-full shadow-md" id="highlight-pill">
              {t.recommendedPill}
            </div>

            <div className="bg-gradient-to-br from-[#FAF8F4] via-white to-[#FAF8F4] rounded-3xl border-2 border-[#9BA88B]/60 shadow-md overflow-hidden flex flex-col flex-1">
              <img
                src={`${import.meta.env.BASE_URL}LandingPage Desktop Part6 Box2 PIC.webp`}
                alt={isZh ? '天然原型食物：全谷物、豆类与新鲜蔬菜' : 'Whole natural foods: whole grains, legumes, and fresh vegetables'}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/2] object-cover"
                id="natural-food-image"
              />
              <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
              <div>
              <div className="flex flex-col items-start gap-2 min-[957px]:flex-row min-[957px]:items-center min-[957px]:justify-between mb-6" id="natural-title-box">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-[#9BA88B]/10 flex items-center justify-center text-[#69725F] gap-0.5" id="leaf-icon-wrapper">
                    {/* Icon: Whole Grain + Leaf */}
                    <Wheat className="w-5 h-5" />
                    {/* <Leaf className="w-5 h-5" /> */}
                  </span>
                  <h3 className="text-2xl font-noto-sans-sc font-black text-[#2F2F2F]">{t.naturalTitle}</h3>
                </div>
                <span className="text-xs uppercase text-[#69725F] font-noto-sans-sc tracking-widest bg-[#9BA88B]/10 px-3 py-1 rounded-full">
                  {t.extractedTag}
                </span>
              </div>

              <p className="text-sm font-noto-sans-sc text-gray-500 font-light mb-8 italic" id="natural-summary-desc">
                {t.naturalSummary}
              </p>

              <ul className="space-y-4" id="natural-item-list">
                {t.naturalItems.map((item, idx) => (
                  <li className="flex items-start gap-3" id={`natural-item-${idx + 1}`} key={item.title}>
                    <Apple className="w-5 h-5 text-[#69725F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-800 text-sm font-noto-sans-sc block">{item.title}</strong>
                      <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#9BA88B]/10 p-4 rounded-2xl border border-[#9BA88B]/20 mt-8 text-xs font-noto-sans-sc text-[#576751] font-light flex items-center gap-2" id="wholefoods-proclaim">
              <Heart className="w-4 h-4 shrink-0 text-[#69725F]" />
              {t.naturalProclaim}
            </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
