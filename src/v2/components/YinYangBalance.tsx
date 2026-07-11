/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { YIN_YANG_FOODS } from '../data';
import { YinYangFood } from '../types';
import { ChevronRight, Sparkles, AlertTriangle, Scale } from 'lucide-react';

const FOOD_DETAIL_IMAGES: Partial<Record<string, string>> = {
  '椰子 (Coconut)': `${import.meta.env.BASE_URL}LandingPage Desktop Part4 FD1-coconut.png`,
  '红肉 (Red Meat)': `${import.meta.env.BASE_URL}LandingPage Desktop Part4 FD2-meal.png`,
  '牛奶 (Milk)': `${import.meta.env.BASE_URL}LandingPage Desktop Part4 FD3-milk.png`,
  '精制盐 (Refined Salt)': `${import.meta.env.BASE_URL}LandingPage Desktop Part4 FD4-salt.png`
};

export default function YinYangBalance() {
  const [activeFood, setActiveFood] = useState<YinYangFood>(YIN_YANG_FOODS[1]); // Default to Milk
  const [balanceValue, setBalanceValue] = useState<number>(0); // -100 (Extreme Yin) to +100 (Extreme Yang)

  const yinFoods = YIN_YANG_FOODS.filter((f) => f.energy === 'yin');
  const yangFoods = YIN_YANG_FOODS.filter((f) => f.energy === 'yang');

  // Dynamically determine balance label
  const getBalanceLabel = () => {
    if (balanceValue < -60) return { label: '极度偏阴 (Extreme Yin - Hyper-Expansion)', color: 'text-indigo-800 bg-indigo-100/60' };
    if (balanceValue < -15) return { label: '稍微偏阴 (Mild Yin - Cool & Calming)', color: 'text-[#9BA88B] bg-[#9BA88B]/10' };
    if (balanceValue > 60) return { label: '极度偏阳 (Extreme Yang - Over-contraction)', color: 'text-red-800 bg-red-100/60' };
    if (balanceValue > 15) return { label: '稍微偏阳 (Mild Yang - Active & Vital)', color: 'text-[#D89A63] bg-[#D89A63]/10' };
    return { label: '中庸平衡 (Perfect Golden Center)', color: 'text-[#EB288B] bg-[#F7F3EC]' };
  };

  const balanceLabel = getBalanceLabel();

  return (
    <>
    <section className="relative w-full bg-[#F7F3EC] overflow-hidden" id="yin-yang-section">
      {/* Section 6 full-page background image slot */}
      <img
        src={`${import.meta.env.BASE_URL}LandingPage Desktop Part4 BG.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        id="section-6-bg-image"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16" id="yin-yang-header">
          <h2 className="text-3xl md:text-5xl font-noto-sans-sc font-bold text-[#EB288B] tracking-tight leading-tight mb-6" id="section-4-title">
            食物能量学：阴与阳的平衡
          </h2>
          <div className="w-16 h-0.5 bg-[#EB288B]/30 mx-auto mb-6" id="gallery-divider"></div>
          <p className="text-sm md:text-base font-noto-sans-sc text-[#2F2F2F] font-light" id="section-4-intro">
            哪些食物最有助于提升能量水平？又有哪些应该尽量避免？
          </p>
        </div>

        {/* Split Screen Columns */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch" id="polarity-columns-grid">
          {/* Left Side: YIN (阴) - Blue Theme */}
          <div className="bg-gradient-to-br from-[#ECE7DE]/40 via-white to-indigo-50/20 rounded-3xl shadow-sm overflow-hidden flex flex-col" id="yin-column">
            <img
              src={`${import.meta.env.BASE_URL}LandingPage Full Sec6- Box1.png`}
              alt="LandingPage Full Sec6- Box1.png"
              className="w-full aspect-[3/2] object-cover object-top"
              id="yin-foods-image"
            />
            <div className="p-8 md:p-12 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-6" id="yin-heading-wrapper">
                <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-noto-sans-sc text-indigo-700 font-bold" id="yin-badge">
                  阴
                </span>
                <h3 className="text-2xl font-noto-sans-sc font-bold text-gray-800" id="yin-title">
                  阴性食物（Yin Expansion）
                </h3>
              </div>
              <p className="text-xs text-indigo-600 uppercase tracking-widest font-noto-sans-sc font-medium mb-6" id="yin-energy-attrs">
                特性：冷却 / 扩张 / 沉静 / 稀薄 / 离心
              </p>
              <div className="space-y-3" id="yin-food-buttons">
                {yinFoods.map((food) => {
                  const isActive = activeFood.name === food.name;
                  return (
                    <motion.button
                      key={food.name}
                      onClick={() => {
                        setActiveFood(food);
                        setBalanceValue(food.level * -25);
                      }}
                      whileHover={{ x: 6 }}
                      className={`w-full text-left p-4 rounded-xl border flex items-center transition-all duration-300 ${isActive
                        ? 'bg-indigo-50/80 border-indigo-300 shadow-sm'
                        : 'bg-white/80 border-gray-100 hover:border-indigo-200'
                        }`}
                      id={`yin-button-${food.name.replace(/\s+/g, '')}`}
                    >
                      <div className="flex-1 min-w-0 md:flex-[7]">
                        <span className="text-base font-noto-sans-sc font-semibold text-gray-800 block">
                          {food.name}
                        </span>
                        <span className="text-xs font-noto-sans-sc text-gray-500 font-light">
                          {food.description}
                        </span>
                      </div>
                      <div className="shrink-0 flex items-center justify-end gap-1.5 md:flex-[3]" id="yin-badge-sub">
                        <span className={`text-[10px] uppercase font-noto-sans-sc px-2 py-0.5 rounded-full ${food.level === 3 ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                          Level {food.level} Yin
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-indigo-100/50" id="yin-summary-note">
              <span className="text-[11px] font-noto-sans-sc text-indigo-700 block mb-1">
                💡 极阴现象：
              </span>
              <span className="text-[11px] font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                摄入过多酒精或多糖等极阴品，能量过度向上逸散，会导致体力消沉、四肢虚冷。
              </span>
            </div>
            </div>
          </div>

          {/* Right Side: YANG (阳) - Red Theme */}
          <div className="bg-gradient-to-br from-[#ECE7DE]/40 via-white to-red-50/20 rounded-3xl shadow-sm overflow-hidden flex flex-col" id="yang-column">
            <img
              src={`${import.meta.env.BASE_URL}LandingPage Full Sec6- Box2.png`}
              alt="LandingPage Full Sec6- Box2.png"
              className="w-full aspect-[3/2] object-cover object-top"
              id="yang-foods-image"
            />
            <div className="p-8 md:p-12 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-6" id="yang-heading-wrapper">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-noto-sans-sc text-red-700 font-bold" id="yang-badge">
                  阳
                </span>
                <h3 className="text-2xl font-noto-sans-sc font-bold text-gray-800" id="yang-title">
                  阳性食物（Yang Contraction）
                </h3>
              </div>
              <p className="text-xs text-red-600 uppercase tracking-widest font-noto-sans-sc font-medium mb-6" id="yang-energy-attrs">
                特性：温热 / 收敛 / 紧缩 / 浓缩 / 向心
              </p>
              <div className="space-y-3" id="yang-food-buttons">
                {yangFoods.map((food) => {
                  const isActive = activeFood.name === food.name;
                  return (
                    <motion.button
                      key={food.name}
                      onClick={() => {
                        setActiveFood(food);
                        setBalanceValue(food.level * 25);
                      }}
                      whileHover={{ x: -6 }}
                      className={`w-full text-left p-4 rounded-xl border flex items-center transition-all duration-300 ${isActive
                        ? 'bg-red-50/80 border-red-300 shadow-sm'
                        : 'bg-white/80 border-gray-100 hover:border-red-200'
                        }`}
                      id={`yang-button-${food.name.replace(/\s+/g, '')}`}
                    >
                      <div className="flex-1 min-w-0 md:flex-[7]">
                        <span className="text-base font-noto-sans-sc font-semibold text-gray-800 block">
                          {food.name}
                        </span>
                        <span className="text-xs font-noto-sans-sc text-gray-500 font-light">
                          {food.description}
                        </span>
                      </div>
                      <div className="shrink-0 flex items-center justify-end gap-1.5 md:flex-[3]" id="yang-badge-sub">
                        <span className={`text-[10px] uppercase font-noto-sans-sc px-2 py-0.5 rounded-full ${food.level === 3 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                          Level {food.level} Yang
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-red-100/50" id="yang-summary-note">
              <span className="text-[11px] font-noto-sans-sc text-red-700 block mb-1">
                💡 极阳现象：
              </span>
              <span className="text-[11px] font-noto-sans-sc text-gray-500 leading-relaxed font-light">
                过量高油盐重加工红肉，体内组织过度硬化抽缩，容易引起情绪急躁和三高压力。
              </span>
            </div>
            </div>
          </div>
        </div>

        {/* Dynamic Detail Card & Balance Centerpiece Slider */}
        <div className="relative z-10 mt-12 bg-white rounded-3xl border border-[#ECE7DE] p-5 sm:p-8 max-w-4xl mx-auto shadow-sm" id="energy-interactive-dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="dashboard-layout">
            {/* Detailed food card selection */}
            <div className="bg-[#FAF8F4] p-6 rounded-2xl border border-gray-100" id="detail-card-panel">
              <h4 className="text-xs uppercase tracking-widest font-noto-sans-sc font-bold text-[#EB288B] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D89A63]" /> EXPLORING POLARITY DETAILS
              </h4>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFood.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  id="active-polarity-food-info"
                >
                  {FOOD_DETAIL_IMAGES[activeFood.name] && (
                    <img
                      src={FOOD_DETAIL_IMAGES[activeFood.name]}
                      alt={activeFood.name}
                      className="w-full aspect-[3/2] object-cover rounded-2xl mb-4"
                      id="detail-food-image"
                    />
                  )}
                  <div className="flex flex-col items-start gap-1.5 mb-2" id="info-header">
                    <h3 className="text-lg sm:text-xl font-noto-sans-sc font-semibold text-gray-800">{activeFood.name}</h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-noto-sans-sc font-semibold uppercase whitespace-nowrap ${activeFood.energy === 'yin' ? 'bg-indigo-100 text-indigo-700' : 'bg-red-100 text-red-700'
                      }`}>
                      {activeFood.energy === 'yin' ? '阴性 (Cooling)' : '阳性 (Warming)'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-noto-sans-sc mb-4 leading-none uppercase tracking-wide">
                    Energy Rating: {activeFood.level} / 3 Polar Intensity
                  </p>
                  <p className="text-sm font-noto-sans-sc text-gray-600 leading-relaxed font-light mb-4" id="info-detail-description">
                    {activeFood.detail}
                  </p>
                  <div className="flex items-start gap-2 text-xs font-noto-sans-sc bg-amber-50/70 border border-amber-200/50 p-3 rounded-xl text-amber-900" id="info-warning-block">
                    <AlertTriangle className="w-4 h-4 text-[#D89A63] shrink-0 mt-0.5" />
                    <span>
                      <strong>微言：</strong>此类食材能量级属于<strong> Level {activeFood.level}</strong>，在日常饮食中应慎防过度累积。
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Balance Slide Ruler */}
            <div className="flex flex-col justify-center" id="interactive-scale-zone">
              <div className="flex flex-nowrap items-center justify-between gap-1.5 mb-4" id="scale-indicator-zone">
                <span className="shrink-0 text-[10px] sm:text-xs font-noto-sans-sc font-black text-indigo-700 whitespace-nowrap">阴 (YIN)</span>
                <span className="min-w-0 text-[10px] sm:text-xs font-noto-sans-sc font-semibold text-gray-700 flex items-center gap-1 whitespace-nowrap">
                  <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EB288B] shrink-0" />
                  <span className="hidden sm:inline">Balance Dashboard</span>
                  <span className="sm:hidden">Balance</span>
                </span>
                <span className="shrink-0 text-[10px] sm:text-xs font-noto-sans-sc font-black text-red-700 whitespace-nowrap">(YANG) 阳</span>
              </div>

              {/* Slider track UI */}
              <div className="relative py-4" id="slider-wrapper">
                <input
                  type="range"
                  min="-100"
                  max="100"
                  step="5"
                  value={balanceValue}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setBalanceValue(val);
                    // Find nearest food based on polarity and level
                    const energyType = val < 0 ? 'yin' : 'yang';
                    const absVal = Math.abs(val);
                    const lvl = absVal > 66 ? 3 : absVal > 33 ? 2 : 1;
                    const matched = YIN_YANG_FOODS.find((f) => f.energy === energyType && f.level === lvl);
                    if (matched) {
                      setActiveFood(matched);
                    }
                  }}
                  className="w-full h-2 bg-gradient-to-r from-indigo-300 via-[#E3DAC9] to-red-300 rounded-lg appearance-none cursor-pointer focus:outline-none accent-[#EB288B]"
                  id="yin-yang-range-slider"
                />
                {/* Zero Balance Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-4 bg-[#EB288B]/60 pointer-events-none rounded" id="zero-marker"></div>
              </div>

              {/* Slider analysis response */}
              <div className="text-center mt-6" id="analysis-box">
                <span className={`text-xs inline-block font-noto-sans-sc px-4 py-2 rounded-full font-bold transition-all duration-300 ${balanceLabel.color}`} id="balance-badge">
                  此能量偏移：{balanceLabel.label}
                </span>
                <p className="text-xs font-noto-sans-sc text-gray-400 mt-2.5 font-light leading-relaxed" id="dashboard-notice">
                  * 拖动上面的滑块模拟食物调和状态。食物能量学认为，完美的养生并不是回避一切阴性或阳性，而是在二者之间架起中正平和之桥。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Closing Quote — full-page section, no card/box treatment */}
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden"
      id="yin-yang-quote-block"
    >
      <img
        src={`${import.meta.env.BASE_URL}LandingPage Desktop Part5 Bg.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        id="yin-yang-quote-bg-image"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-24 text-center">
        <div className="inline-block text-white text-xs font-noto-sans-sc font-semibold tracking-wider mb-6" id="yin-yang-quote-accent">
          YIN & YANG BALANCE
        </div>
        <p className="text-3xl md:text-5xl font-noto-sans-sc font-bold text-white tracking-wider leading-relaxed mb-6" id="yin-yang-quote-text">
          偏阴不行，偏阳也不行，<br />
          选择阴阳平衡的才是刚刚好。
        </p>
        <span className="text-xs uppercase tracking-widest text-white font-noto-sans-sc" id="yin-yang-quote-attribution">
          —— Hulu Hulu 饮食
        </span>
      </div>
    </motion.section>
    </>
  );
}
