/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Leaf, ArrowDown, Sparkles, Sprout } from 'lucide-react';

export default function HeroSection() {
  const scrollToConcern = (e: React.MouseEvent) => {
    e.preventDefault();
    // Anchor-scroll to Section 5 (Food Is Energy & Vitality)
    const target = document.getElementById('section-5');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particleVariants: Variants = {
    animate1: {
      y: [0, -12, 0],
      rotate: [0, 10, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    },
    animate2: {
      y: [0, 15, 0],
      rotate: [0, -15, 8, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }
    },
    animate3: {
      x: [0, 10, -10, 0],
      y: [0, -8, 8, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
    }
  };

  return (
    <header className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#F7F3EC] overflow-hidden" id="hulu-hero">

      {/* Background Watercolor Grid / Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40 md:opacity-50" id="hero-watercolor-wrapper">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">

          {/* Natural SVG Filters to create water-color bleeding texture */}
          <defs>
            <filter id="watercolor-bleeding" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Watercolor Blobs - Warm earth tone palette */}
          <circle cx="150" cy="180" r="180" fill="#9BA88B" filter="url(#watercolor-bleeding)" opacity="0.35" />
          <circle cx="1200" cy="200" r="220" fill="#E3DAC9" filter="url(#watercolor-bleeding)" opacity="0.5" />
          <circle cx="800" cy="750" r="190" fill="#D89A63" filter="url(#watercolor-bleeding)" opacity="0.25" />
          <circle cx="200" cy="800" r="150" fill="#EB288B" filter="url(#watercolor-bleeding)" opacity="0.15" />

          {/* Dynamic Floating Grains / Grains of Rice background */}
          <g fill="#EB288B" opacity="0.1" transform="translate(100, 200)">
            <ellipse cx="10" cy="20" rx="3" ry="7" transform="rotate(25)" />
            <ellipse cx="60" cy="40" rx="3" ry="7" transform="rotate(-15)" />
            <ellipse cx="30" cy="90" rx="4" ry="9" transform="rotate(45)" />
          </g>
          <g fill="#9BA88B" opacity="0.15" transform="translate(1250, 600)">
            <path d="M10,10 Q20,0 20,20 Q10,30 10,10 Z" transform="rotate(15)" />
            <path d="M40,50 Q50,40 50,60 Q40,70 40,50 Z" transform="rotate(-35)" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero-layout">

        {/* Left Side: Display Typography */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center" id="hero-typography">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
            id="title-pill"
          >
            <div className="w-8 h-8 rounded-full bg-[#9BA88B]/20 flex items-center justify-center text-[#9BA88B]" id="brand-sprout">
              <Sprout className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-widest font-noto-sans-sc font-black text-[#EB288B]" id="hero-small-title">
              FOOD IS ENERGY · 食物即能量
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-noto-sans-sc font-black text-[#2F2F2F] tracking-tight leading-tight mb-8"
            id="hero-main-headline"
          >
            你多久没有好好吃饭了？
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-l-2 border-[#D89A63] pl-6 mb-12 space-y-2"
            id="hero-subheadline-wrapper"
          >
            <p className="text-2xl font-noto-sans-sc text-[#EB288B] font-medium leading-relaxed">
              食物不只是卡路里
            </p>
            <p className="text-sm sm:text-base font-noto-sans-sc text-gray-600 font-light leading-relaxed">
              它会影响你的身体能量、情绪状态与生活品质。
            </p>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
            id="hero-button-box"
          >
            <a
              href="#section-5"
              onClick={scrollToConcern}
              className="px-8 py-4 rounded-full bg-[#EB288B] hover:bg-[#D1167B] text-[#F7F3EC] text-sm font-noto-sans-sc font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-amber-950/10 cursor-pointer pointer-events-auto inline-flex items-center gap-2 group"
              id="hero-primary-cta"
            >
              【了解食物能量】
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <span className="text-xs text-gray-400 font-noto-sans-sc tracking-widest" id="hero-curation-credit">
              — BY HULU HULU WELLNESS
            </span>
          </motion.div>
        </div>

        {/* Right Side: Hand-drawn Watercolor food bowl illustration wrapper */}
        <div className="lg:col-span-5 relative flex items-center justify-center" id="hero-visual-container">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: 'spring' }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
            id="hero-bowl-wrapper"
          >

            {/* Section 1 hero image slot — swap real asset later */}
            <img
              src={`${import.meta.env.BASE_URL}LandingPage Full SEC1v2-01.jpg`}
              alt="LandingPage Full SEC1v2-01.jpg"
              className="w-full h-full object-cover object-right rounded-[2.5rem] border-4 border-white/60 bg-[#ECE7DE] drop-shadow-2xl"
              id="hero-image-slot"
            />

            {/* Decorative hand-drawn watercolor bowl (kept as background flourish) */}
            <svg
              className="hidden w-full h-full drop-shadow-2xl"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="handdrawn-bowl"
            >
              <defs>
                {/* SVG Filter to create hand-drawn fiber style texture */}
                <filter id="handdrawn-sketch" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>

              <g filter="url(#handdrawn-sketch)">
                {/* Bowl shadow background */}
                <ellipse cx="200" cy="250" rx="140" ry="25" fill="#241B12" opacity="0.08" />

                {/* Outer Bowl Base */}
                <path d="M 60,180 C 60,280 140,320 200,320 C 260,320 340,280 340,180" fill="#FAF6F0" stroke="#EB288B" strokeWidth="4.5" strokeLinecap="round" />
                {/* Bowl Inner lip shadow */}
                <ellipse cx="200" cy="180" rx="140" ry="25" fill="#ECE7DE" stroke="#EB288B" strokeWidth="3" />

                {/* Ingredients Layer 1 (Miso soup / base) */}
                <ellipse cx="200" cy="182" rx="130" ry="20" fill="#EADCC7" />

                {/* Left Side: Avocado / Leafy Green items */}
                <ellipse cx="120" cy="175" rx="30" ry="18" fill="#9BA88B" transform="rotate(-15, 120, 175)" />
                <path d="M 95,160 Q 110,140 125,165 Q 110,190 95,160 Z" fill="#8CA080" />

                {/* Rice grains drawing / seed details */}
                <ellipse cx="180" cy="180" rx="3" ry="5.5" fill="#FAF6F0" transform="rotate(30, 180, 180)" />
                <ellipse cx="192" cy="176" rx="3.5" ry="6" fill="#FAF6F0" transform="rotate(-10, 192, 176)" />
                <ellipse cx="170" cy="186" rx="4" ry="7" fill="#8D5E24" transform="rotate(45, 170, 186)" /> {/* Brown Rice */}
                <ellipse cx="185" cy="190" rx="3" ry="5.5" fill="#8D5E24" transform="rotate(-25, 185, 190)" />

                {/* Red Berry / Tomato items */}
                <circle cx="250" cy="184" r="14" fill="#D47D72" />
                <circle cx="265" cy="176" r="10" fill="#C56A5E" />
                <path d="M 248,172 C 248,172 250,165 248,165" stroke="#4F3D30" strokeWidth="2.5" />

                {/* Sesame Seeds sprinkled on top */}
                <circle cx="215" cy="174" r="2" fill="#2F2F2F" />
                <circle cx="225" cy="178" r="2.5" fill="#2F2F2F" />
                <circle cx="210" cy="182" r="2" fill="#2F2F2F" />

                {/* Mushroom/Sprout rising out of the bowl */}
                <path d="M 160,170 Q 155,130 145,110" stroke="#EB288B" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M 145,110 C 135,110 135,122 145,122 C 155,122 155,110 145,110 Z" fill="#9BA88B" />

                {/* Second green leaf detail */}
                <path d="M 220,170 Q 240,140 265,145" stroke="#EB288B" strokeWidth="3" fill="none" />
                <path d="M 235,150 Q 255,130 260,145 Z" fill="#9BA88B" />

                {/* Bowl artistic ring patterns */}
                <path d="M 90,240 C 120,270 200,280 310,240" stroke="#9BA88B" strokeWidth="2.5" strokeDasharray="5 5" fill="none" />
                <path d="M 110,270 C 140,290 200,300 290,270" stroke="#D89A63" strokeWidth="2" fill="none" />
              </g>
            </svg>

            {/* Micro-animating floating watercolor natural elements surrounding bowl */}
            <motion.div
              variants={particleVariants}
              animate="animate1"
              className="absolute -top-10 left-6 text-[#9BA88B]"
              id="float-element-1"
            >
              <Leaf className="w-8 h-8 fill-current opacity-80" />
            </motion.div>

            <motion.div
              variants={particleVariants}
              animate="animate2"
              className="absolute top-24 -right-10 text-[#D89A63]"
              id="float-element-2"
            >
              <div className="w-4 h-6 rounded-full bg-[#D89A63]/60 rotate-45 border border-dashed border-[#EB288B]/25" id="mini-grain-1"></div>
            </motion.div>

            <motion.div
              variants={particleVariants}
              animate="animate3"
              className="absolute bottom-12 -left-6 text-[#EB288B]"
              id="float-element-3"
            >
              <div className="w-5 h-7 rounded-sm border-2 border-[#EB288B]/30 transform rotate-12" id="mini-grain-2"></div>
            </motion.div>

            {/* Glowing backdrop circular aura representing clean whole-body energy */}
            <div className="absolute inset-4 rounded-full bg-radial from-white via-transparent to-transparent -z-10 blur-xl" id="bowl-glow-back"></div>
          </motion.div>

        </div>

      </div>

    </header>
  );
}
