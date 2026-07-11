/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Pill, Leaf, ShieldAlert, Heart, ClipboardCheck, Apple, Wheat } from 'lucide-react';

export default function CompareSection() {
  return (
    <section className="max-w-7xl mx-auto rounded-[40px] bg-[#fcf7f1] border border-[#9BA88B]/15 relative overflow-hidden my-16 shadow-sm" id="compare-section">
      {/* Single combined background: pink illustration on top, fading into cream.
          Anchored to the top at natural aspect; the section's cream bg color continues it below. */}
      {/* Desktop: single combined background — pink illustration strip fading into cream. */}
      <img
        src={`${import.meta.env.BASE_URL}LandingPage Full Sec6-BG.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-auto pointer-events-none select-none z-0 hidden sm:block"
        id="section-6-compare-bg-image"
      />
      {/* Mobile: cream watercolor base fills the whole section (paired with the pink band below). */}
      <img
        src={`${import.meta.env.BASE_URL}LandingPage Full Sec6-BG below section.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 sm:hidden"
        id="section-6-compare-bg-below-mobile"
      />

      {/* ABOVE band — header over the pink portion. aspect-[1222/460] matches the pink
          band of the image, so the header always aligns with it at any width. */}
      <div className="relative z-10 flex items-center justify-center px-6 py-20 sm:py-0 sm:aspect-[1222/460]" id="compare-above-section">
        {/* Mobile: the combined image's pink strip is too short to hold the header on narrow
            screens (text overflowed onto the cream cards). Under sm we use the dedicated pink
            illustration, object-cover so it fills the band at whatever height the text needs. */}
        <img
          src={`${import.meta.env.BASE_URL}LandingPage Full Sec6-BG above section.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 sm:hidden"
          id="section-6-compare-bg-above-mobile"
        />
        {/* Legibility scrim so the light copy reads on the bright illustration */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" aria-hidden="true"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto" id="compare-header">
          <span className="text-xs uppercase tracking-widest font-noto-sans-sc font-extrabold text-white/90 mb-2 block drop-shadow-sm" id="section-6-label">
            WHOLE FOOD VS SUPPLEMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-noto-sans-sc text-white tracking-tight leading-tight mt-3 mb-4 drop-shadow-sm" id="section-6-title">
            为什么只靠保健品并不足够？
          </h2>
          <p className="text-lg md:text-xl font-noto-sans-sc font-semibold text-white mb-6 drop-shadow-sm" id="compare-subtitle">
            保健品是补充，食物才是基础
          </p>
          <div className="w-12 h-0.5 bg-white/50 mx-auto mb-6" id="compare-divider"></div>
          {/* <p className="text-white/90 font-light leading-relaxed text-sm md:text-base drop-shadow-sm" id="compare-intro">
            许多人习惯于依赖高浓度的营养补充品（保健品）来改善亚健康状态。<br />
            但事实上，失去完整的食物载体，提纯营养就像是抽离了文章关键字的碎片。
            真正健全的营养与完整生命力，仍然深藏于天然、完整的原型食物中。
          </p> */}
        </div>
      </div>

      {/* BELOW content — comparison cards over the cream portion of the image / section bg */}
      <div className="relative z-10 px-6 md:px-12 pt-12 pb-24" id="compare-below-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto" id="compare-cards-layout">

          {/* Supplements side: Greyish cooling tone */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200/80 shadow-sm relative flex flex-col justify-between"
            id="supplements-card"
          >
            <div>
              <div className="flex items-center justify-between mb-6" id="suppliers-title-box">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-700" id="pill-icon-wrapper">
                    <Pill className="w-6 h-6" />
                  </span>
                  <h3 className="text-2xl font-noto-sans-sc font-black text-gray-700">保健品</h3>
                </div>
                <span className="text-xs uppercase text-gray-400 font-noto-sans-sc tracking-widest bg-gray-100 px-3 py-1 rounded-full">
                  EXTRACTED pill
                </span>
              </div>

              <p className="text-sm font-noto-sans-sc text-gray-500 font-light mb-8 italic" id="supplements-summary-desc">
                通常通过人工或工业手段，将特定的某种、几种维生素或矿物质从宿主中强行剥离、压制而成。
              </p>

              <ul className="space-y-4" id="supplements-item-list">
                <li className="flex items-start gap-3" id="supplements-item-1">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">单一营养提取 (Isolated Elements)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      缺乏天然食物中共生的协同活性因子（黄酮类、有机酶），吸收率容易大打折扣。
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3" id="supplements-item-2">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">快速高浓度补充 (Quick Flash Injection)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      给人体细胞施加突然的高负荷应激，容易导致肾脏在排泄提纯化合物时的额外负荷。
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3" id="supplements-item-3">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">无法完全取代饮食 (No Core Sustenance)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      不能提供粗纤维、胚芽精油等宏观维持肠道生态平衡与代谢所需的“大地基石”能量。
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3" id="supplements-item-4">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">长期过量可能产生依赖 (Dependency Risk)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      长期高浓度提取摄入，身体自我调节机能容易钝化、退化，转而依赖外源补充。
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100/40 mt-8 text-xs font-noto-sans-sc text-amber-800 font-light flex items-center gap-2" id="supps-disclaimer">
              <ClipboardCheck className="w-4 h-4 shrink-0 text-amber-600" />
              注：营养品可做应急治疗之用，但长期过量提取有可能诱发身体自我机能的退化与依赖。
            </div>
          </motion.div>

          {/* Natural food side: Golden warm green tone */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#FAF8F4] via-white to-[#FAF8F4] p-8 md:p-10 rounded-3xl border-2 border-[#9BA88B]/60 shadow-md relative flex flex-col justify-between"
            id="natural-food-card"
          >
            {/* Recommended highlight element bar */}
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#9BA88B] text-white text-[10px] tracking-widest uppercase font-noto-sans-sc font-bold px-4 py-1.5 rounded-full shadow-md" id="highlight-pill">
              RECOMMENDED BASIS
            </div>

            <div>
              <div className="flex items-center justify-between mb-6" id="natural-title-box">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-[#9BA88B]/10 flex items-center justify-center text-[#9BA88B] gap-0.5" id="leaf-icon-wrapper">
                    {/* Icon: Whole Grain + Leaf */}
                    <Wheat className="w-5 h-5" />
                    {/* <Leaf className="w-5 h-5" /> */}
                  </span>
                  <h3 className="text-2xl font-noto-sans-sc font-black text-[#2F2F2F]">天然食物</h3>
                </div>
                <span className="text-xs uppercase text-[#9BA88B] font-noto-sans-sc tracking-widest bg-[#9BA88B]/10 px-3 py-1 rounded-full">
                  WHOLE FOOD MATRIX
                </span>
              </div>

              <p className="text-sm font-noto-sans-sc text-gray-500 font-light mb-8 italic" id="natural-summary-desc">
                大自然在千百年阳光、雨露和土壤中雕刻出来的活体营养，具有高度精妙的生命能量结构。
              </p>

              <ul className="space-y-4" id="natural-item-list">
                <li className="flex items-start gap-3" id="natural-item-1">
                  <Apple className="w-5 h-5 text-[#9BA88B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">完整营养结构 (Holographic Matrix)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      蕴含数千种未知却相互依存的辅酶。纤维素、微量元素如交响乐般同调吸收。
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3" id="natural-item-2">
                  <Apple className="w-5 h-5 text-[#9BA88B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">自然能量来源 (Earthbound Lifeforce)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      光合作用积淀的生物光子能量，温和唤醒细胞自我恢复力，带来悠长纯净的物理朝气。
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3" id="natural-item-3">
                  <Apple className="w-5 h-5 text-[#9BA88B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">长期平衡身体状态 (Sustained Equilibrium)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      无毒素残留负担，调节酸碱状态、保护脆弱胃粘膜，使气血与脏腑维持长足稳定性。
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3" id="natural-item-4">
                  <Apple className="w-5 h-5 text-[#9BA88B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm font-noto-sans-sc block">更容易被身体接纳 (Bio-Compatible)</strong>
                    <span className="text-xs font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                      完整食物以身体熟悉的天然结构呈现，温和易吸收，不会给代谢系统带来额外应激负荷。
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#9BA88B]/10 p-4 rounded-2xl border border-[#9BA88B]/20 mt-8 text-xs font-noto-sans-sc text-[#576751] font-light flex items-center gap-2" id="wholefoods-proclaim">
              <Heart className="w-4 h-4 shrink-0 text-[#9BA88B]" />
              悟：一口蕴含胚芽、麦芽与麸皮的完整糙米，胜过十粒人工合成的高浓度胶囊。
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
