/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Pill, Leaf, ShieldAlert, Heart, ClipboardCheck, Apple, Wheat } from 'lucide-react';

export default function CompareSection() {
  return (
    <section className="relative w-full bg-[#F7F3EC] overflow-hidden" id="compare-section">
      {/* Section 6 full-page background image slot */}
      <img
        src="/LandingPage Desktop Part6 BG.png"
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
          <h2 className="text-3xl md:text-5xl font-noto-sans-sc font-black text-[#EB288B] tracking-tight leading-tight mb-6" id="compare-title">
            保健品，能取代天然食物吗？
          </h2>
          <div className="w-16 h-0.5 bg-[#EB288B]/30 mx-auto mb-6" id="compare-divider"></div>
          <p className="text-sm md:text-base font-noto-sans-sc text-[#2F2F2F] font-light" id="compare-intro">
            同样是补充营养，人工萃取与天然食物，身体给出的答案不一样。
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
              src="/LandingPage Desktop Part6 Box1 PIC.png"
              alt="LandingPage Desktop Part6 Box1 PIC.png"
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
                  <h3 className="text-2xl font-noto-sans-sc font-black text-gray-700">保健品</h3>
                </div>
                <span className="text-xs uppercase text-gray-400 font-noto-sans-sc tracking-widest bg-gray-100 px-3 py-1 rounded-full">
                  WHOLE FOOD MATRIX
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
              RECOMMENDED BASIS
            </div>

            <div className="bg-gradient-to-br from-[#FAF8F4] via-white to-[#FAF8F4] rounded-3xl border-2 border-[#9BA88B]/60 shadow-md overflow-hidden flex flex-col flex-1">
              <img
                src="/LandingPage Desktop Part6 Box2 PIC.png"
                alt="LandingPage Desktop Part6 Box2 PIC.png"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/2] object-cover"
                id="natural-food-image"
              />
              <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
              <div>
              <div className="flex flex-col items-start gap-2 min-[957px]:flex-row min-[957px]:items-center min-[957px]:justify-between mb-6" id="natural-title-box">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-[#9BA88B]/10 flex items-center justify-center text-[#9BA88B] gap-0.5" id="leaf-icon-wrapper">
                    {/* Icon: Whole Grain + Leaf */}
                    <Wheat className="w-5 h-5" />
                    {/* <Leaf className="w-5 h-5" /> */}
                  </span>
                  <h3 className="text-2xl font-noto-sans-sc font-black text-[#2F2F2F]">天然食物</h3>
                </div>
                <span className="text-xs uppercase text-[#9BA88B] font-noto-sans-sc tracking-widest bg-[#9BA88B]/10 px-3 py-1 rounded-full">
                  EXTRACTED pill
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
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
