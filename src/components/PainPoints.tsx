/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PAIN_POINTS } from '../data';

export default function PainPoints() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto rounded-3xl bg-[#ECE7DE]/50 my-16 backdrop-blur-sm" id="pain-points-section">
      <div className="text-center max-w-3xl mx-auto mb-16" id="pain-points-header">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest font-noto-sans-sc font-semibold text-[#EB288B] mb-3"
          id="section-2-label"
        >
          COMMON CONCERNS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-noto-sans-sc text-[#2F2F2F] tracking-tight leading-tight mb-6"
          id="section-2-title"
        >
          为什么同样吃得健康，<br />
          却还是觉得不舒服？
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg font-noto-sans-sc text-[#555] font-light"
          id="section-2-intro"
        >
          你是否经常出现以下情况？
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="pain-point-grid">
        {PAIN_POINTS.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderColor: 'rgba(155, 168, 139, 0.4)' }}
            className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#9BA88B]/20 shadow-sm transition-all duration-300 flex flex-col justify-between"
            id={`pain-card-${point.id}`}
          >
            <div>
              <div className="rounded-2xl overflow-hidden mb-6 bg-[#F7F3EC] border border-[#9BA88B]/15" id={`pain-image-wrapper-${point.id}`}>
                <img
                  src={`/LandingPage Full Sec2 Box-${index + 1}v2.png`}
                  alt={`LandingPage Full Sec2 Box-${index + 1}v2.png`}
                  className="w-full aspect-[4/3] object-cover object-top"
                  id={`pain-image-${point.id}`}
                />
              </div>
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
          </motion.div>
        ))}
      </div>

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
          src="/LandingPage Full Sec3-BG.jpg"
          alt="LandingPage Full Sec3-BG.jpg"
          className="absolute inset-0 w-full h-full object-fill opacity-100 pointer-events-none select-none"
          id="section-3-bg-image"
        />
        <div className="relative z-10 inline-block px-4 py-1.5 rounded-full bg-[#9BA88B]/10 text-[#9BA88B] text-xs font-noto-sans-sc font-semibold tracking-wider mb-6" id="closing-accent">
          DIETARY INSPIRATION
        </div>
        <p className="relative z-10 text-[#2F2F2F] text-xl md:text-2xl font-noto-sans-sc leading-loose mb-6 tracking-wide" id="closing-text">
          很多时候，问题不只是吃什么。<br />
          而是你吃进去的食物，是否真正适合你的身体状态。
        </p>
        <div className="relative z-10 w-12 h-0.5 bg-[#D89A63]/50 mx-auto mb-6" id="closing-divider"></div>
        <h1 className="relative z-10 text-2xl md:text-4xl font-bold text-[#EB288B] tracking-wider font-noto-sans-sc" id="closing-headline">
          其实，好好吃饭就能解决。
        </h1>
      </motion.div>
    </section>
  );
}
