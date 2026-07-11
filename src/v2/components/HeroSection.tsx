/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sprout } from 'lucide-react';

export default function HeroSection() {
  const scrollToConcern = (e: React.MouseEvent) => {
    e.preventDefault();
    // Anchor-scroll to Section 5 (Food Is Energy & Vitality)
    const target = document.getElementById('section-5');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroContent = (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-4"
        id="title-pill"
      >
        {/* <div className="w-8 h-8 rounded-full bg-[#9BA88B]/20 flex items-center justify-center text-[#9BA88B]" id="brand-sprout">
          <Sprout className="w-4 h-4" />
        </div> */}
        <span className="text-sm uppercase tracking-widest font-noto-sans-sc font-black text-gray-500" id="hero-small-title">
          FOOD IS ENERGY · 食物即能量
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-noto-sans-sc font-black text-[#EB288B] tracking-tight leading-tight mb-4"
        id="hero-main-headline"
      >
        你多久没有好好吃饭了？
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm sm:text-base font-noto-sans-sc text-[#2F2F2F] font-light leading-relaxed mb-6 max-w-xl"
        id="hero-subheadline"
      >
        食物不只是卡路里 它会影响你的身体能量、情绪状态与生活品质。
      </motion.p>

      {/* Action CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center gap-3"
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

        <span className="text-xs text-gray-600 font-noto-sans-sc tracking-widest" id="hero-curation-credit">
          — BY HULU HULU WELLNESS
        </span>
      </motion.div>
    </>
  );

  return (
    <header className="relative w-full bg-[#FAF1EA] overflow-hidden" id="hulu-hero">

      {/* Mobile — single full-bleed image, text centered on top */}
      <div className="md:hidden relative min-h-[100vh] flex items-start justify-center" id="hulu-hero-mobile">
        <img
          src="/LP-Mobile-GIF.gif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
          id="hulu-hero-bg-image-mobile"
        />
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-16 pb-24 text-center flex flex-col items-center" id="hero-layout-mobile">
          {heroContent}
        </div>
      </div>

      {/* Tablet — the tablet GIF is split into a text band (its own top-cropped slice, sized to
          the text) and a fixed-ratio band below that reveals the mascot from a bottom-anchored
          backdrop. The band height scales with viewport width (not the header's height), so the
          crop stays correct across the whole md–lg range. */}
      <div className="hidden md:block lg:hidden relative" id="hulu-hero-tablet">
        <div className="relative" id="hulu-hero-tablet-text-band">
          <img
            src="/LP-Tablet-GIF.gif"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0"
            id="hulu-hero-bg-image-tablet-title-band"
          />
          <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-20 pb-10 text-center flex flex-col items-center" id="hero-layout-tablet">
            {heroContent}
          </div>
        </div>
        <div className="relative h-[70vw] overflow-hidden" id="hulu-hero-tablet-object-band">
          <img
            src="/LP-Tablet-GIF.gif"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none"
            id="hulu-hero-bg-image-tablet-object-band"
          />
        </div>
      </div>

      {/* Desktop — single full-bleed image, text centered on top */}
      <div className="hidden lg:flex relative min-h-[100vh] items-start justify-center" id="hulu-hero-desktop">
        <img
          src="/LP-Desktop-Header.gif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0"
          id="hulu-hero-bg-image-desktop"
        />
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-16 pb-24 text-center flex flex-col items-center" id="hero-layout-desktop">
          {heroContent}
        </div>
      </div>

    </header>
  );
}
