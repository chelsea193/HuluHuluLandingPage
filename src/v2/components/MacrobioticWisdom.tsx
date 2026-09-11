/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, Flame, Sparkles, Sprout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function MacrobioticWisdom() {
  const { isZh } = useLanguage();
  const t = TRANSLATIONS[isZh ? 'zh' : 'en'].macrobiotic;
  const features = t.features;

  return (
    <section className="py-24 bg-[#E3DAC9]/40 border-y border-[#DCD5C9]/60" id="macrobiotic-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12" id="macrobiotic-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="macrobiotic-layout">
          
          {/* Left Panel: Narrative, checklist, features */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="macrobiotic-narrative">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#A4B799] mb-2 flex items-center gap-1">
              <Sprout className="w-4 h-4 text-[#69725F]" /> {t.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-noto-sans-sc text-[#2F2F2F] font-bold tracking-tight mb-6" id="macrobiotic-title">
              {t.title}
            </h2>
            <div className="w-12 h-1 bg-[#9BA88B] mb-6" id="macro-divider"></div>
            <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed" id="macro-intro">
              {t.intro}
            </p>

            {/* Checklist */}
            <div className="space-y-6 mb-8" id="macro-features-list">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                  id={`macro-feature-item-${idx}`}
                >
                  <div className="w-6 h-6 rounded-full bg-[#9BA88B]/10 flex items-center justify-center shrink-0 mt-0.5" id={`check-icon-${idx}`}>
                    <CheckCircle2 className="w-4 h-4 text-[#69725F]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-noto-sans-sc font-semibold text-[#2F2F2F] mb-1" id={`macro-feature-title-${idx}`}>
                      {feature.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light" id={`macro-feature-desc-${idx}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote box */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-5 rounded-2xl bg-[#FFFAE8] border border-[#ECE7DE] max-w-xl"
              id="macro-statement-box"
            >
              <p className="text-sm text-[#A4B799] font-noto-sans-sc leading-loose font-medium flex items-center gap-2" id="macro-statement">
                <Flame className="w-4 h-4 text-[#8F6641]" />
                {t.statement}
              </p>
            </motion.div>
          </div>

          {/* Right Panel: Beautiful Unsplash mockup resembling raw food prep with wood, veggies, miso, and soup */}
          <div className="lg:col-span-5 relative" id="macrobiotic-mockup-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 aspect-[4/5] bg-[#ECE7DE]"
              id="macrobiotic-image-card"
            >
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800"
                alt={isZh ? '木质餐桌上摆放的天然大地餐饮食材' : 'Natural macrobiotic food preparation on warm wooden table'}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
                id="macro-prep-image"
              />
              
              {/* Overlay graphic representation element values */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" id="img-shading-grad"></div>
              
              {/* Overlay Content tag */}
              <div className="absolute bottom-6 left-6 right-6 text-white" id="image-overlay-content">
                <span className="text-[10px] uppercase tracking-widest bg-[#9BA88B] text-white px-3 py-1 rounded-full font-noto-sans-sc font-bold mb-3 inline-block" id="overlay-tag">
                  {t.overlayTag}
                </span>
                <p className="text-base sm:text-lg font-noto-sans-sc tracking-wide leading-relaxed font-semibold italic" id="overlay-headline">
                  {t.overlayHeadline}
                </p>
                <p className="text-[10px] text-gray-300 font-noto-sans-sc mt-1.5" id="overlay-caption">
                  {t.overlayCaption}
                </p>
              </div>
            </motion.div>

            {/* Decorative organic bubble blobs in the background */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#9BA88B]/10 rounded-full blur-2xl -z-10" id="blob-1"></div>
            <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-[#D89A63]/10 rounded-full blur-3xl -z-10" id="blob-2"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
