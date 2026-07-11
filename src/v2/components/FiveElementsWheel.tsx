/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FIVE_ELEMENTS } from '../data';
import { ElementType, FiveElementData } from '../types';
import { Heart, ShieldCheck, Soup, Star } from 'lucide-react';

const ELEMENT_NODE_IMAGES: Record<ElementType, string> = {
  metal: '/LandingPage Desktop Part3 IC1-Mental.png',
  wood: '/LandingPage Desktop Part3 IC2-Wood.png',
  water: '/LandingPage Desktop Part3 IC3-water.png',
  fire: '/LandingPage Desktop Part3 IC4-fire.png',
  earth: '/LandingPage Desktop Part3 IC5-earth.png'
};

const ELEMENT_PANEL_IMAGES: Record<ElementType, string> = {
  metal: '/originals/LandingPage Desktop Part3 MSC1-Metal.png',
  wood: '/originals/LandingPage Desktop Part3 MSC2-WOOD.png',
  water: '/originals/LandingPage Desktop Part3 MSC3-Water.png',
  fire: '/originals/LandingPage Desktop Part3 MSC4-Fire.png',
  earth: '/originals/LandingPage Desktop Part3 MSC5-earth.png'
};

export default function FiveElementsWheel() {
  const [activeElement, setActiveElement] = useState<FiveElementData>(FIVE_ELEMENTS[2]); // Default to Earth (糙米)

  return (
    <section className="relative w-full bg-[#F7F3EC] overflow-hidden" id="section-5">
      {/* Section 5 full-page background image slot */}
      <img
        src={`${import.meta.env.BASE_URL}LandingPage Desktop Part3 BG.png`}
        alt="LandingPage Desktop Part3 BG.png"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        id="section-5-bg-image"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16" id="five-elements-header">
          <span className="text-xs uppercase tracking-widest font-noto-sans-sc font-bold text-[#9BA88B]" id="section-3-label">
            FOOD IS ENERGY & VITALITY
          </span>
          <h2 className="text-3xl md:text-5xl font-noto-sans-sc font-bold text-[#EB288B] tracking-tight leading-tight mt-3 mb-6" id="section-3-title">
            重新认识你每天吃的食物
          </h2>
          <p className="text-lg md:text-xl text-[#2F2F2F] font-noto-sans-sc tracking-wide italic leading-relaxed" id="section-3-intro">
            食物不只是卡路里，更有内在的能量。有些食物吃了让人精神满满，有些却让人昏昏欲睡——在东方饮食智慧里，每种食物都有自己的能量个性。
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="elements-grid">
          {/* Left Side: Interactive SVG Wheel */}
          <div className="flex flex-col items-center justify-center p-4 md:p-8" id="elements-visual-side">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center" id="wheel-container">
              {/* Pulsing Outer Aura with Active Color */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#DCD5C9] opacity-80"
                style={{
                  boxShadow: `0 0 30px 2px ${activeElement.bgLight}`
                }}
                id="outer-pulse-ring"
              />

              {/* Core Central Display */}
              <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white shadow-xl border border-[#ECE7DE] flex flex-col items-center justify-center text-center p-4 z-10 select-none" id="central-display">
                <span className="text-xs uppercase tracking-widest text-[#EB288B] font-noto-sans-sc mb-1">
                  ACTIVE ENERGY
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeElement.element}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                    id="active-central-text"
                  >
                    <span
                      className="text-4xl sm:text-5xl font-noto-sans-sc font-black"
                      style={{ color: activeElement.color }}
                    >
                      {activeElement.chineseName}
                    </span>
                    <span className="text-xs font-noto-sans-sc text-gray-500 mt-1 uppercase tracking-wider">
                      {activeElement.englishName}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Five Elements Node Positions */}
              {FIVE_ELEMENTS.map((item, index) => {
                // Place nodes in a perfect pentagonal circle
                const angle = (index * 2 * Math.PI) / 5 - Math.PI / 2;
                const radius = 130; // pixels from center
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const isActive = activeElement.element === item.element;

                return (
                  <div
                    key={item.element}
                    className="absolute"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      zIndex: 20
                    }}
                    id={`element-node-${item.element}`}
                  >
                    <motion.button
                      onClick={() => setActiveElement(item)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center cursor-pointer relative"
                      style={{ width: 70, height: 70 }}
                    >
                      <img
                        src={ELEMENT_NODE_IMAGES[item.element]}
                        alt={`${item.chineseName} ${item.englishName}`}
                        className="w-full h-full object-contain pointer-events-none select-none"
                      />

                      {/* Active Halo Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="active-ring"
                          className="absolute inset-[-6px] rounded-full border-2 border-dashed"
                          style={{ borderColor: item.color }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                      )}
                    </motion.button>
                  </div>
                );
              })}

              {/* Inner Star/Cycle Lines using SVG paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-current opacity-20" viewBox="0 0 400 400">
                <path
                  d="M 200 70 L 324 160 L 276 305 L 124 305 L 76 160 Z"
                  fill="none"
                  stroke="#EB288B"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  id="generation-cycle-path"
                />
                <path
                  d="M 200 70 L 276 305 L 76 160 L 324 160 L 124 305 Z"
                  fill="none"
                  stroke="#D89A63"
                  strokeWidth="1.5"
                  id="control-cycle-path"
                />
              </svg>
            </div>

            <p className="text-xs text-gray-500 font-noto-sans-sc mt-8 select-none" id="interactivity-hint">
              * 点击五行粒子（木、火、土、金、水）探索不同食物之能
            </p>
          </div>

          {/* Right Side: Interactive Content */}
          <div className="flex flex-col justify-center bg-white p-8 md:p-12 rounded-3xl border border-[#ECE7DE]" id="elements-content-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeElement.element}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                id={`panel-${activeElement.element}`}
              >
                <div className="flex items-center gap-4 mb-6" id="element-title-panel">
                  <span
                    className="rounded-full overflow-hidden flex items-center justify-center"
                    style={{ width: 82, height: 82 }}
                    id="panel-bubble"
                  >
                    <img
                      src={ELEMENT_PANEL_IMAGES[activeElement.element]}
                      alt={`${activeElement.chineseName} ${activeElement.englishName}`}
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </span>
                  <div>
                    <h3 className="text-2xl font-noto-sans-sc font-bold text-[#2F2F2F]" id="panel-title-text">
                      {activeElement.chineseName}形能量 · {activeElement.englishName} Energy
                    </h3>
                    <div className="text-sm font-noto-sans-sc tracking-wide text-gray-500 flex flex-col gap-0.5 mt-1" id="panel-subtitle">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> 对应腑脏：
                      </span>
                      <strong className="text-gray-700">{activeElement.bodyOrgan}</strong>
                    </div>
                  </div>
                </div>

                {/* Energy characteristics */}
                <div
                  className="py-2.5 px-4 rounded-xl text-sm font-noto-sans-sc font-medium mb-6 inline-flex items-center gap-2"
                  style={{ backgroundColor: activeElement.bgLight, color: activeElement.textColor }}
                  id="energy-type-bubble"
                >
                  <Star className="w-4 h-4 fill-current" />
                  能量本征：{activeElement.energyType}
                </div>

                {/* Description */}
                <p className="text-sm font-noto-sans-sc text-gray-600 leading-relaxed font-light mb-8" id="element-description">
                  {activeElement.description}
                </p>

                {/* Recommended foods list */}
                <div className="border-t border-gray-100 pt-6" id="foods-recommendation-zone">
                  <h4 className="text-xs uppercase tracking-widest font-noto-sans-sc font-semibold text-[#EB288B] mb-4 flex items-center gap-2">
                    <Soup className="w-4 h-4 text-[#D89A63]" />
                    代表性能量食物 (Representative Foods)
                  </h4>
                  <div className="flex flex-wrap gap-2.5" id="representative-foods-list">
                    {activeElement.foods.map((food, foodIdx) => (
                      <span
                        key={foodIdx}
                        className="text-xs font-noto-sans-sc px-3.5 py-1.5 rounded-full border bg-gray-50 border-gray-200 text-gray-700 font-medium tracking-wide hover:shadow-sm hover:border-gray-300 transition-all duration-200"
                        id={`rf-tag-${foodIdx}`}
                      >
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative z-10 mt-16 bg-[#EB288B] p-6 md:p-8 rounded-2xl border border-[#DCD5C9] max-w-4xl mx-auto" id="elements-closing-wisdom">
          <span className="text-sm font-noto-sans-sc text-white leading-relaxed font-light text-center flex justify-center" id="wisdom-text">
            在东方饮食智慧中，不同食物拥有不同的能量特性，并对应人体不同系统与功能。<br />
            当饮食失衡时，身体的能量状态也可能受到影响。<br />
            了解食物的能量特性，帮助我们做出更适合自己的饮食选择。
          </span>
        </div>
      </div>
    </section>
  );
}
