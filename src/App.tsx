/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X, ArrowUp, ShieldAlert, Sparkles, Sprout } from 'lucide-react';

import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
// import BrandPositioning from './components/BrandPositioning';
import FiveElementsWheel from './components/FiveElementsWheel';
import YinYangBalance from './components/YinYangBalance';
// import MacrobioticWisdom from './components/MacrobioticWisdom';
import CompareSection from './components/CompareSection';
import FoodGallery from './components/FoodGallery';
import FooterAndCTA from './components/FooterAndCTA';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hulu-hero', label: '能量启航' },
    { id: 'pain-points-section', label: '警惕失衡' },
    // { id: 'brand-positioning-section', label: '品牌定位' },
    { id: 'section-5', label: '五行食能' },
    { id: 'yin-yang-section', label: '阴阳调和' },
    // { id: 'macrobiotic-section', label: 'Macro 智慧' },
    { id: 'compare-section', label: '原型食愈' },
    { id: 'gallery-section', label: '食愈世界' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    // Close the mobile menu first, then scroll on the next frame. Scrolling in the
    // same tick is cancelled by the menu's collapse (height) animation, which is why
    // navigation silently failed on mobile.
    setMobileMenuOpen(false);
    if (targetElement) {
      requestAnimationFrame(() => {
        const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#2F2F2F] antialiased relative overflow-hidden" id="hulu-world-app">
      {/* Natural Tones Theme Background Watercolor Blobs */}
      <div className="watercolor-blob blob-1"></div>
      <div className="watercolor-blob blob-2"></div>
      <div className="watercolor-blob blob-3"></div>

      {/* Sticky Header Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-[5000] transition-all duration-500 ${isScrolled
          ? 'bg-[#FAF8F4]/80 backdrop-blur-md shadow-sm border-b border-[#ECE7DE]/50 py-3'
          : 'bg-transparent py-6'
          }`}
        id="app-sticky-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between" id="header-container">

          {/* Logo element with sprout */}
          <a
            href="#hulu-hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-2 group pointer-events-auto"
            id="header-logo-link"
          >
            <div className="w-9 h-9 rounded-full bg-[#9BA88B]/20 flex items-center justify-center text-[#9BA88B] group-hover:scale-105 transition-all duration-300">
              <Leaf className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-noto-sans-sc font-black text-[#576751] tracking-wider leading-none">
                Hulu Hulu
              </span>
              <span className="text-[8px] font-noto-sans-sc font-bold uppercase tracking-widest text-[#EB288B] mt-1">
                FOOD IS ENERGY
              </span>
            </div>
          </a>

          {/* Desktop Nav menu */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-navbar">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-xs font-noto-sans-sc font-semibold tracking-wide text-gray-500 hover:text-[#EB288B] relative transition-colors duration-300 py-2 group pointer-events-auto"
                id={`nav-link-${link.id}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D89A63]/70 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Consultation Button Action desk */}
          <div className="hidden lg:block pointer-events-auto" id="header-desk-actions">
            <a
              href="#final-cta-section"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('final-cta-section');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2.5 rounded-full bg-[#9BA88B] hover:bg-[#859275] text-[#FAF8F4] text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm"
              id="header-cta-btn"
            >
              WhatsApp 咨询门径
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 pointer-events-auto cursor-pointer"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Swipeable Mobile Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#FAF8F4] border-b border-[#ECE7DE] relative overflow-hidden"
              id="mobile-menu-overlay"
            >
              <div className="px-6 py-6 flex flex-col gap-4" id="mobile-links-container">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="text-sm font-noto-sans-sc font-bold text-gray-600 hover:text-[#EB288B] py-2 border-b border-gray-100 block transition-colors"
                    id={`m-nav-link-${link.id}`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#final-cta-section"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const target = document.getElementById('final-cta-section');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full text-center py-3 rounded-xl bg-[#EB288B] text-white text-xs font-bold mt-2 hover:bg-[#D1167B] block"
                  id="mobile-header-cta"
                >
                  WhatsApp 咨询门径
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content wrapper */}
      <main className="w-full pt-[80px]" id="main-content">

        {/* Section 1: Hero Banner */}
        <HeroSection />

        {/* Section 2: User Pain grid */}
        <PainPoints />

        {/* Section 2.5: Brand Positioning with Pink Watercolor Circles */}
        {/* <BrandPositioning /> */}

        {/* Section 3: Central Five Elements Interactive Wheel */}
        <FiveElementsWheel />

        {/* Section 4: Split screen Yin / Yang balance dashboard */}
        <YinYangBalance />

        {/* Section 5: Macrobiotic Eco checklist and mockups */}
        {/* <MacrobioticWisdom /> */}

        {/* Section 6: Supplements compared with Whole foods */}
        <CompareSection />

        {/* Section 7: Photo Gallery catalog explorer */}
        <FoodGallery />

        {/* Section 8 & Footer: Final Join CTA and copyright footer block */}
        <FooterAndCTA />

      </main>

      {/* Scroll to Top floating widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            title="回到顶部"
            className="fixed bottom-8 right-8 z-[4000] w-12 h-12 rounded-full bg-[#EB288B] text-[#FAF8F4] hover:bg-[#D1167B] flex items-center justify-center shadow-lg cursor-pointer transform hover:translate-y-[-4px] transition-all duration-300 pointer-events-auto"
            id="scroll-to-top-fab"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
