/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { YIN_YANG_FOODS } from '../data';
import { YinYangFood } from '../types';
import { ChevronRight, Sparkles, AlertTriangle, Scale } from 'lucide-react';

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
    <section className="max-w-7xl mx-auto rounded-[40px] bg-[#fcf7f1] border border-[#9BA88B]/15 relative overflow-hidden my-16 shadow-sm" id="yin-yang-section">
      {/* Single combined background: pink illustration on top, fading into cream.
          Anchored to the top at natural aspect; the section's cream bg color continues it below. */}
      {/* Desktop: single combined background — pink illustration strip fading into cream. */}
      <img
        src="/LandingPage Full Sec6-BG.jpg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-auto pointer-events-none select-none z-0 hidden sm:block"
        id="section-6-bg-image"
      />
      {/* Mobile: cream watercolor base fills the whole section (paired with the pink band below). */}
      <img
        src="/LandingPage Full Sec6-BG below section.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 sm:hidden"
        id="section-6-bg-below-mobile"
      />

      {/* ABOVE band — header over the pink portion. aspect-[1222/460] matches the pink
          band of the image, so the header always aligns with it at any width.
          (Tweak the 460 to move the pink/cream boundary the header sits in.) */}
      <div className="relative z-10 flex items-center justify-center px-6 py-20 sm:py-0 sm:aspect-[1222/460]" id="yin-yang-above-section">
        {/* Mobile: the combined image's pink strip is too short to hold the header on narrow
            screens (text overflowed onto the cream cards). Under sm we use the dedicated pink
            illustration, object-cover so it fills the band at whatever height the text needs. */}
        <img
          src="/LandingPage Full Sec6-BG above section.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 sm:hidden"
          id="section-6-bg-above-mobile"
        />
        {/* Legibility scrim so the light copy reads on the bright illustration */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" aria-hidden="true"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto" id="yin-yang-header">
          <span className="text-xs uppercase tracking-widest font-noto-sans-sc font-bold text-white/90" id="section-4-label">
            YIN & YANG POLARITY
          </span>
          <h2 className="text-3xl md:text-4xl font-noto-sans-sc text-white tracking-tight leading-tight mt-3 mb-6 drop-shadow-sm" id="section-4-title">
            食物能量学：阴与阳的平衡
          </h2>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-6" id="gallery-divider"></div>
          {/* <p className="text-sm md:text-base font-noto-sans-sc text-white/90 font-light drop-shadow-sm" id="section-4-intro">
            所有食物都具有不同程度的阴性与阳性能量。健康不是偏向某一端，而是找到适合自己的平衡。
          </p> */}
        </div>
      </div>

      {/* BELOW content — solid cream fill; the bg image doesn't reliably cover this whole
          area (patchy bleed on wide screens), so we mask it with a flat color instead. */}
      <div className="relative z-10 px-6 md:px-12 pt-12 pb-24 bg-[#fcf7f1]" id="yin-yang-below-content">

        {/* Split Screen Columns */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch" id="polarity-columns-grid">
          {/* Left Side: YIN (阴) - Blue Theme */}
          <div className="bg-gradient-to-br from-[#ECE7DE]/40 via-white to-indigo-50/20 p-8 md:p-12 rounded-3xl border border-indigo-100/40 shadow-sm flex flex-col justify-between" id="yin-column">
            <div>
              <img
                src="/LandingPage Full Sec6- Box1.png"
                alt="LandingPage Full Sec6- Box1.png"
                className="w-full h-[300px] object-cover object-top rounded-2xl mb-6 border border-indigo-100/40"
                id="yin-foods-image"
              />
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
                      className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${isActive
                        ? 'bg-indigo-50/80 border-indigo-300 shadow-sm'
                        : 'bg-white/80 border-gray-100 hover:border-indigo-200'
                        }`}
                      id={`yin-button-${food.name.replace(/\s+/g, '')}`}
                    >
                      <div>
                        <span className="text-base font-noto-sans-sc font-semibold text-gray-800 block">
                          {food.name}
                        </span>
                        <span className="text-xs font-noto-sans-sc text-gray-500 font-light">
                          {food.description}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5" id="yin-badge-sub">
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

          {/* Right Side: YANG (阳) - Red Theme */}
          <div className="bg-gradient-to-br from-[#ECE7DE]/40 via-white to-red-50/20 p-8 md:p-12 rounded-3xl border border-red-100/40 shadow-sm flex flex-col justify-between" id="yang-column">
            <div>
              <img
                src="/LandingPage Full Sec6- Box2.png"
                alt="LandingPage Full Sec6- Box2.png"
                className="w-full h-[330px] object-cover object-top rounded-2xl mb-6 border border-red-100/40"
                id="yang-foods-image"
              />
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
                      className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${isActive
                        ? 'bg-red-50/80 border-red-300 shadow-sm'
                        : 'bg-white/80 border-gray-100 hover:border-red-200'
                        }`}
                      id={`yang-button-${food.name.replace(/\s+/g, '')}`}
                    >
                      <div>
                        <span className="text-base font-noto-sans-sc font-semibold text-gray-800 block">
                          {food.name}
                        </span>
                        <span className="text-xs font-noto-sans-sc text-gray-500 font-light">
                          {food.description}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5" id="yang-badge-sub">
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

        {/* Dynamic Detail Card & Balance Centerpiece Slider */}
        <div className="relative z-10 mt-12 bg-white rounded-3xl border border-[#ECE7DE] p-8 max-w-4xl mx-auto shadow-sm" id="energy-interactive-dashboard">
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
                  <div className="flex items-center gap-2 mb-2" id="info-header">
                    <h3 className="text-xl font-noto-sans-sc font-semibold text-gray-800">{activeFood.name}</h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-noto-sans-sc font-semibold uppercase ${activeFood.energy === 'yin' ? 'bg-indigo-100 text-indigo-700' : 'bg-red-100 text-red-700'
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
              <div className="flex items-center justify-between mb-4" id="scale-indicator-zone">
                <span className="text-xs font-noto-sans-sc font-black text-indigo-700">阴 (YIN)</span>
                <span className="text-xs font-noto-sans-sc font-semibold text-gray-700 flex items-center gap-1">
                  <Scale className="w-4 h-4 text-[#EB288B]" /> Balance Dashboard
                </span>
                <span className="text-xs font-noto-sans-sc font-black text-red-700">(YANG) 阳</span>
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

        {/* Closing Quote — standard quotation box (see CLAUDE.md) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden mt-16 bg-[#F7F3EC] p-8 md:p-12 rounded-3xl border-2 border-dashed border-[#9BA88B]/40 max-w-4xl mx-auto text-center"
          id="yin-yang-quote-block"
        >
          {/* Full-width background image slot (standard quotation box) */}
          <img
            src="/LandingPage Full Sec3-BG.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-fill opacity-100 pointer-events-none select-none"
            id="yin-yang-quote-bg-image"
          />
          <div className="relative z-10 inline-block px-4 py-1.5 rounded-full bg-[#9BA88B]/10 text-[#9BA88B] text-xs font-noto-sans-sc font-semibold tracking-wider mb-6" id="yin-yang-quote-accent">
            YIN & YANG BALANCE
          </div>
          <p className="relative z-10 text-xl md:text-2xl font-noto-sans-sc text-[#2F2F2F] tracking-wider leading-relaxed mb-6" id="yin-yang-quote-text">
            偏阴不行，偏阳也不行，<br />
            选择阴阳平衡的才是刚刚好。
          </p>
          <div className="relative z-10 w-12 h-0.5 bg-[#D89A63]/50 mx-auto mb-6" id="yin-yang-quote-divider"></div>
          <span className="relative z-10 text-xs uppercase tracking-widest text-[#EB288B] font-noto-sans-sc font-semibold" id="yin-yang-quote-attribution">
            —— Hulu Hulu 饮食
          </span>
        </motion.div>
      </div>
    </section>
  );
}
