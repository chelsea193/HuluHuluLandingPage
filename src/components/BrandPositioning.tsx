/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

// Hand-sketched ginkgo leaf background element
function GinkgoLeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="ginkgo-sketch-svg"
    >
      <path
        d="M 60 115 Q 58 75 64 50"
        stroke="#9BA88B"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Ginkgo Fan Shape */}
      <path
        d="M 64 50 C 44 42 22 25 32 12 C 42 -1 66 4 72 20 C 75 4 98 -1 108 12 C 118 25 96 42 64 50 Z"
        stroke="#9BA88B"
        strokeWidth="1.2"
        fill="#9BA88B"
        fillOpacity="0.04"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Leaf ribs (veins) */}
      <path d="M 64 50 Q 52 35 42 20" stroke="#9BA88B" strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.3" />
      <path d="M 64 50 Q 60 30 54 15" stroke="#9BA88B" strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.3" />
      <path d="M 64 50 Q 68 28 67 12" stroke="#9BA88B" strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.3" />
      <path d="M 64 50 Q 76 30 81 15" stroke="#9BA88B" strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.3" />
      <path d="M 64 50 Q 84 35 94 20" stroke="#9BA88B" strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.3" />
    </svg>
  );
}

export default function BrandPositioning() {
  return (
    <section 
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto rounded-[40px] bg-white/40 backdrop-blur-md border border-[#9BA88B]/15 relative overflow-hidden my-16 shadow-sm"
      id="brand-positioning-section"
    >
      {/* Soft Watercolor Backdrop Blobs in the corner */}
      <div className="absolute top-[-50px] right-[-50px] w-80 h-80 rounded-full bg-[#9BA88B]/12 filter blur-3xl pointer-events-none" id="blob-decor-pink"></div>
      <div className="absolute bottom-[-50px] left-[-30px] w-96 h-96 rounded-full bg-[#EB288B]/8 filter blur-3xl pointer-events-none" id="blob-decor-sage"></div>

      {/* Elegant Ginkgo Leaf Sketches in Background Corners */}
      <GinkgoLeafDecoration className="absolute -top-6 -right-6 w-36 h-36 transform rotate-[-15deg] pointer-events-none" />
      <GinkgoLeafDecoration className="absolute bottom-8 left-[-10px] w-40 h-40 transform rotate-[45deg] pointer-events-none" />
      <GinkgoLeafDecoration className="absolute top-1/2 left-[45%] w-24 h-24 transform rotate-[110deg] opacity-20 pointer-events-none" />

      {/* Header Container exactly mimicking Hulu Hulu brand style guide */}
      <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 mb-20 relative z-10" id="positioning-header">
        <h2 className="text-3xl md:text-4xl font-noto-sans-sc font-black text-[#EB288B] tracking-tight shrink-0 whitespace-nowrap" id="brand-guide-title">
          HULU HULU 的品牌定位
        </h2>
        <div className="h-0.5 w-full bg-[#EB288B]/40" id="brand-guide-rule"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10" id="brand-positioning-grid">
        
        {/* Left column: 3 core value items with pink watercolor indicators */}
        <div className="lg:col-span-6 space-y-12" id="positioning-left-flow">
          
          {/* Card Item 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-6 items-start group"
            id="guide-item-core"
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 drop-shadow-[0_2px_8px_rgba(235,40,139,0.15)]"
              id="guide-icon-core"
            >
              <img
                src={`${import.meta.env.BASE_URL}LandingPage Full Sec4-IC1.png`}
                alt="LandingPage Full Sec4-IC1.png"
                className="w-full h-full object-cover scale-[1.35]"
              />
            </div>
            <div className="space-y-3" id="guide-desc-core">
              <h3 className="text-xl md:text-2xl font-noto-sans-sc font-black text-[#EB288B]" id="core-title">
                我们的核心
              </h3>
              <ul className="space-y-1.5 text-gray-700 font-noto-sans-sc text-[15px] sm:text-base leading-relaxed" id="core-bullets">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EB288B]/70" />
                  <span>吃饱，只是行为</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EB288B]/70" />
                  <span className="font-semibold text-gray-900">吃对，才是系统</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EB288B]/70" />
                  <span className="text-[#EB288B] font-bold">稳定，才是结果</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card Item 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6 items-start group"
            id="guide-item-diff"
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 drop-shadow-[0_2px_8px_rgba(235,40,139,0.15)]"
              id="guide-icon-diff"
            >
              <img
                src={`${import.meta.env.BASE_URL}LandingPage Full Sec4-IC2.png`}
                alt="LandingPage Full Sec4-IC2.png"
                className="w-full h-full object-cover scale-[1.35]"
              />
            </div>
            <div className="space-y-3" id="guide-desc-diff">
              <h3 className="text-xl md:text-2xl font-noto-sans-sc font-black text-[#EB288B]" id="diff-title">
                我们的差别
              </h3>
              <ul className="space-y-1.5 text-gray-700 font-noto-sans-sc text-[15px] sm:text-base leading-relaxed" id="diff-bullets">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9BA88B]" />
                  <span>市场只教你吃什么</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9BA88B]" />
                  <span className="font-semibold text-gray-900">我们连接食物与身体能量</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9BA88B]" />
                  <span className="text-[#9BA88B] font-bold">创造让身体稳定的系统</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card Item 3 */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 items-start group"
            id="guide-item-val"
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 drop-shadow-[0_2px_8px_rgba(235,40,139,0.15)]"
              id="guide-icon-val"
            >
              <img
                src={`${import.meta.env.BASE_URL}LandingPage Full Sec4-IC3.png`}
                alt="LandingPage Full Sec4-IC3.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3" id="guide-desc-val">
              <h3 className="text-xl md:text-2xl font-noto-sans-sc font-black text-[#EB288B]" id="val-title">
                我们的价值
              </h3>
              <ul className="space-y-1.5 text-gray-700 font-noto-sans-sc text-[15px] sm:text-base leading-relaxed" id="val-bullets">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89A63] mt-2" />
                  <span>Hulu Hulu 创造的不只是饮食方法</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89A63] mt-2" />
                  <span className="text-gray-900 leading-relaxed">
                    而是一套 <strong className="text-[#D89A63] font-bold bg-amber-50 px-1 py-0.5 rounded text-sm sm:text-base">“食物 + 能量 + 身体状态”</strong> 的完整调理系统
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Right column: Masterfully hand-rendered vector watercolor food bowl */}
        <div className="lg:col-span-6 flex items-center justify-center p-4 relative" id="positioning-right-visual">
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-full max-w-sm sm:max-w-md aspect-square bg-[#FAF8F4]/90 rounded-full border border-[#9BA88B]/20 p-8 shadow-xl relative"
            id="watercolor-bento-card"
          >
            {/* Ginkgo outline behind standard salad bowl */}
            <GinkgoLeafDecoration className="absolute -bottom-6 -left-6 w-32 h-32 transform rotate-[120deg] opacity-70 pointer-events-none" />
            
            {/* Section 4 image slot — swap real asset later */}
            <img
              src={`${import.meta.env.BASE_URL}LandingPage Full Sec4-BG.jpg`}
              alt="LandingPage Full Sec4-BG.jpg"
              className="w-full h-full object-cover object-[left_100%] rounded-full border-4 border-white/60 bg-[#ECE7DE] drop-shadow-2xl"
              id="brand-positioning-image-slot"
            />

            {/* Elegant organic hand-drawn food bowl vector (kept as decorative fallback) */}
            <svg
              className="hidden w-full h-full filter drop-shadow-2xl"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              id="vector-bento-bowl"
            >
              <defs>
                <linearGradient id="pumpkin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E99238" />
                  <stop offset="100%" stopColor="#C96815" />
                </linearGradient>
                <linearGradient id="avocado-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A8C079" />
                  <stop offset="50%" stopColor="#7E9D47" />
                  <stop offset="100%" stopColor="#51701A" />
                </linearGradient>
                <linearGradient id="bowl-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ECEBE8" />
                  <stop offset="50%" stopColor="#BEBDBA" />
                  <stop offset="100%" stopColor="#878683" />
                </linearGradient>
              </defs>

              {/* Steel Bowl Exterior Rim */}
              <circle cx="200" cy="200" r="170" fill="none" stroke="url(#bowl-metal)" strokeWidth="15" />
              <circle cx="200" cy="200" r="162" fill="none" stroke="#FAF6F0" strokeWidth="2.5" />
              <circle cx="200" cy="200" r="160" fill="#EADCC7" /> {/* Warm soup/rice grain base layer */}

              {/* Lettuce / Botanical greens layers matching Hulu watercolor wash style */}
              <path d="M 60,180 Q 80,100 170,100 T 260,120 Q 200,200 60,180 Z" fill="#8CA080" opacity="0.65" />
              <path d="M 120,80 Q 180,60 260,90 T 320,180 Q 220,180 120,80 Z" fill="#9BA88B" opacity="0.55" />

              {/* Stacked roasted pumpkin slices (Golden earth color representing 'Earth' energy) */}
              <g id="roasted-pumpkin">
                {/* Slice 1 */}
                <path d="M 110,130 C 130,90 200,90 220,120 C 190,130 140,140 110,130 Z" fill="url(#pumpkin-gradient)" stroke="#8F4800" strokeWidth="1" />
                <path d="M 130,110 Q 170,105 190,115" stroke="#FAF6F0" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                {/* Slice 2 */}
                <path d="M 80,180 C 100,120 180,110 200,150 C 160,170 110,180 80,180 Z" fill="url(#pumpkin-gradient)" stroke="#8F4800" strokeWidth="1" />
                <path d="M 100,150 Q 140,135 170,145" stroke="#FAF6F0" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              </g>

              {/* Stacked Avocado Slices (Sleek curve layers) */}
              <g id="avocado-wedges" transform="translate(14, 25)">
                {/* Outer slice */}
                <path d="M 170,150 Q 240,110 290,170 Q 220,230 170,150 Z" fill="url(#avocado-gradient)" />
                <path d="M 190,158 Q 235,128 273,172" stroke="#E1EEAA" strokeWidth="3" fill="none" opacity="0.7" />
                {/* Inner slice */}
                <path d="M 190,165 Q 245,130 280,175 Q 225,220 190,165 Z" fill="#D3E59E" />
                <path d="M 210,170 Q 240,145 264,175" stroke="#FFF" strokeWidth="2.5" fill="none" opacity="0.8" />
              </g>

              {/* Radish thin rounds (Pink boundary with white inner, resembling standard Japanese radish slice) */}
              <g id="radish-rounds">
                {/* Radish 1 */}
                <circle cx="270" cy="230" r="28" fill="#FFF" stroke="#EB288B" strokeWidth="4" />
                <circle cx="270" cy="230" r="21" fill="none" stroke="#EB288B" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5" />
                <circle cx="270" cy="230" r="3" fill="#2F2F2F" opacity="0.6" /> {/* Sesame seed */}
                
                {/* Radish 2 */}
                <circle cx="310" cy="180" r="22" fill="#FFF" stroke="#EB288B" strokeWidth="3.5" />
                <circle cx="310" cy="180" r="16" fill="none" stroke="#EB288B" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
                <circle cx="308" cy="176" r="2" fill="#2F2F2F" opacity="0.6" />
                <circle cx="314" cy="184" r="1.5" fill="#2F2F2F" opacity="0.6" />

                {/* Radish 3 (Stacked beneath) */}
                <circle cx="285" cy="160" r="25" fill="#FFF" stroke="#EB288B" strokeWidth="4" />
                <circle cx="282" cy="158" r="2" fill="#2F2F2F" opacity="0.6" />
              </g>

              {/* Grains / Sesame / Seeds sprinkle */}
              <g fill="#A67B4C" opacity="0.8">
                <ellipse cx="160" cy="245" rx="3.5" ry="6.5" transform="rotate(35, 160, 245)" />
                <ellipse cx="172" cy="238" rx="3.5" ry="6" transform="rotate(-15, 172, 238)" />
                <ellipse cx="150" cy="254" rx="4" ry="7" transform="rotate(20, 150, 254)" />
                <ellipse cx="185" cy="250" rx="3" ry="5.5" transform="rotate(-40, 185, 250)" />
              </g>

              {/* Bright green edamame beans and chickpeas */}
              <g id="edamame-beans">
                <circle cx="205" cy="210" r="11" fill="#91BA48" stroke="#6F9B27" strokeWidth="1" />
                <circle cx="215" cy="225" r="9" fill="#7FA938" stroke="#5E8320" strokeWidth="1" />
                <circle cx="190" cy="222" r="12" fill="#A1C958" stroke="#7EAB37" strokeWidth="1" />
                <circle cx="225" cy="205" r="10" fill="#91BA48" stroke="#6F9B27" strokeWidth="1" />
                
                {/* Shiny highlights */}
                <ellipse cx="202" cy="207" rx="2.5" ry="4" fill="#E8FFB5" opacity="0.8" transform="rotate(-25, 202, 207)" />
                <ellipse cx="187" cy="218" rx="3" ry="5" fill="#E8FFB5" opacity="0.8" transform="rotate(-15, 187, 218)" />
              </g>

              {/* Purple Shreds / Red cabbage highlights */}
              <path d="M 230,120 Q 280,105 320,130" stroke="#7A225F" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M 245,135 Q 295,115 315,145" stroke="#8E2D70" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 235,150 Q 285,145 300,165" stroke="#7A225F" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />

            </svg>
            
          </motion.div>
        </div>

      </div>

      {/* Section 4 bottom highlight box quote */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 overflow-hidden mt-16 max-w-4xl mx-auto bg-[#F7F3EC] border-2 border-dashed border-[#9BA88B]/40 rounded-3xl p-8 md:p-12 text-center"
        id="brand-positioning-highlight-box"
      >
        {/* Full-width background image slot */}
        <img
          src={`${import.meta.env.BASE_URL}LandingPage Full Sec3-BG.jpg`}
          alt="LandingPage Full Sec3-BG.jpg"
          className="absolute inset-0 w-full h-full object-fill opacity-100 pointer-events-none select-none"
          id="brand-positioning-highlight-bg"
        />
        <p className="relative z-10 text-lg md:text-2xl font-noto-sans-sc text-[#2F2F2F] leading-relaxed tracking-wide" id="brand-positioning-quote">
          食物营养与大地的共振，<br />
          创造让生命回归稳定的和谐能量生态
        </p>
      </motion.div>
    </section>
  );
}
