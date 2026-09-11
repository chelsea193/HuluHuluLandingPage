/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUp, MessageCircle, Sparkles } from 'lucide-react';

import HeroSection from './components/HeroSection';
import { useAfterLoad } from './useAfterLoad';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { TRANSLATIONS } from './data/translations';
import { getLocaleBasePath, buildLocaleUrl, type BasePath } from './utils/locale';

// Only the hero is above the fold, so it is the only section in the entry
// chunk. The rest are split out and mounted once the page is idle: the first
// paint then only has to render the hero instead of the whole document, and
// their JavaScript is fetched in parallel rather than parsed before anything
// is on screen. They still mount within a moment of load, well before a
// visitor can scroll to them or use the nav anchors that point into them.
const PainPoints = React.lazy(() => import('./components/PainPoints'));
const CompareSection = React.lazy(() => import('./components/CompareSection'));
const FooterAndCTA = React.lazy(() => import('./components/FooterAndCTA'));

// Quiz, FAQ, Menu, Five Elements Balance and Wellness Lifestyle are entirely
// separate pages a visitor only reaches by navigating there deliberately, so
// their (sizeable) code is split out of the main bundle the same way and
// fetched on demand instead of up front. YinYangBalance/FiveElementsWheel
// themselves are imported directly inside YinYangPage/WellnessLifestylePage
// (not lazy here) — same pattern as FoodGallery inside MenuPage.
const QuizPage = React.lazy(() => import('./pages/QuizPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const MenuPage = React.lazy(() => import('./pages/MenuPage'));
const YinYangPage = React.lazy(() => import('./pages/YinYangPage'));
const WellnessLifestylePage = React.lazy(() => import('./pages/WellnessLifestylePage'));

type PageType = 'home' | 'menu' | 'yinyang' | 'wellness' | 'quiz' | 'faq';

function AppContent() {
  const { language, setLanguage, isZh } = useLanguage();
  const t = TRANSLATIONS[language];

  // "/", "/menu", "/five-elements-balance", "/wellness-lifestyle", "/quiz"
  // and "/faq" (each with an "/en" sibling — see vite.config.ts's multi-page
  // build) are separate static documents, not client-side routes — this
  // identifies which one the visitor is actually on, and stays constant for
  // the document's lifetime (switching page means a real navigation, same as
  // switching language).
  const basePage: BasePath = getLocaleBasePath(window.location.pathname);

  const pageForBase = (base: BasePath): PageType => {
    if (base === '/menu') return 'menu';
    if (base === '/five-elements-balance') return 'yinyang';
    if (base === '/wellness-lifestyle') return 'wellness';
    if (base === '/quiz') return 'quiz';
    if (base === '/faq') return 'faq';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(pageForBase(basePage));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const belowFoldReady = useAfterLoad();

  // Sync page state on back/forward navigation and plain in-page hash
  // changes (e.g. a home section anchor) — each real page (home, menu,
  // yinyang, wellness, quiz, faq) is its own static document with its own
  // locale-pure <title> already baked into the HTML shell, so there's no
  // per-page title bookkeeping to do here.
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(pageForBase(basePage));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [basePage]);

  // Arriving on the home document with a section hash already in the URL —
  // e.g. navigateHome()'s cross-document `href` navigation from /menu, or a
  // bookmarked/shared link — races the lazy below-the-fold sections: the
  // browser's native hash-scroll fires on load, before PainPoints/FiveElements/
  // YinYang/etc. have mounted (they wait on `belowFoldReady`), so it finds
  // nothing and silently no-ops. Re-run the scroll once those sections are
  // actually in the DOM, so the visitor doesn't have to click the nav link
  // a second time for it to take effect.
  useEffect(() => {
    if (!belowFoldReady || currentPage !== 'home') return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }, [belowFoldReady, currentPage]);

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
    { id: 'hulu-hero', label: t.nav.hero, type: 'section' as const },
    { id: 'wellness', label: t.nav.fiveElements, type: 'page' as const, pageKey: 'wellness' as PageType },
    { id: 'yinyang', label: t.nav.yinYang, type: 'page' as const, pageKey: 'yinyang' as PageType },
    { id: 'menu', label: t.nav.gallery, type: 'page' as const, pageKey: 'menu' as PageType },
    { id: 'quiz', label: t.nav.quiz, type: 'page' as const, pageKey: 'quiz' as PageType },
    { id: 'faq', label: t.nav.faq, type: 'page' as const, pageKey: 'faq' as PageType }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.type === 'page' && link.pageKey) {
      // Every page link is its own separate static document.
      navigateToPage(link.pageKey);
      return;
    }

    // Section link clicked from a non-home page: home's sections only exist
    // in the home document, so this can't be handled by just flipping local
    // state. When we're on a genuinely different document (e.g. /menu),
    // setting the hash here does NOT change `window.location.pathname`, so
    // the hashchange listener's `basePage` check (line ~74) immediately
    // re-forces currentPage back to 'menu', undoing the setCurrentPage('home')
    // below and leaving the Menu UI on screen — the section link silently
    // does nothing. navigateHome() already knows how to do a real
    // cross-document navigation when basePage !== '/', and falls back to the
    // same in-page hash+scroll when we're already on home, so reuse it here.
    if (currentPage !== 'home') {
      navigateHome(link.id);
      return;
    }

    const targetElement = document.getElementById(link.id);
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

  // Used by QuizPage/FAQPage's own "Home" link and the footer CTA —
  // navigates to the real home page and, if a sectionId is given, scrolls to
  // it once the home sections have mounted. Home is always "/" (or "/en/"),
  // so if the current document is a different page (e.g. Menu), this is a
  // real cross-document navigation rather than an in-page scroll.
  const navigateHome = (sectionId?: string) => {
    if (basePage !== '/') {
      window.location.href = buildLocaleUrl(language, '/', sectionId ? `#${sectionId}` : '');
      return;
    }
    window.location.hash = sectionId ?? '';
    setCurrentPage('home');
    if (sectionId) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            const topOffset = target.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToPage = (page: PageType) => {
    if (page === 'home') {
      navigateHome();
      return;
    }
    // 'menu' / 'yinyang' / 'wellness' / 'quiz' / 'faq' — each its own
    // separate static document. Already there? Just reset (clear hash,
    // scroll top); otherwise navigate for real.
    const targetBase: BasePath = page === 'menu'
      ? '/menu'
      : page === 'yinyang'
        ? '/five-elements-balance'
        : page === 'wellness'
          ? '/wellness-lifestyle'
          : page === 'quiz'
            ? '/quiz'
            : '/faq';
    if (basePage === targetBase) {
      window.location.hash = '';
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.href = buildLocaleUrl(language, targetBase);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFAE8] text-[#2F2F2F] antialiased relative overflow-hidden" id="hulu-world-app">
      {/* Skip link — invisible until focused, so a keyboard user tabbing in
          from the address bar can jump straight past the header nav instead
          of tabbing through every link in it first. Uses the same brand
          color already used for other filled buttons, not a new color. */}
      <a
        href="#main-content"
        className="fixed top-2 left-2 z-[9999] -translate-y-24 focus:translate-y-0 transition-transform duration-200 px-4 py-2 rounded-full bg-[#A4B799] text-white text-sm font-semibold shadow-lg"
        id="skip-to-content-link"
      >
        {t.footer.skipLink}
      </a>

      {/* Sticky Header Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-[5000] transition-all duration-300 backdrop-blur-md ${isScrolled || currentPage !== 'home'
          ? 'bg-[#FAF8F4]/90 shadow-sm border-b border-[#ECE7DE]/60 py-2.5 md:py-3'
          : 'bg-[#FAF8F4]/40 py-4 md:py-5'
          }`}
        id="app-sticky-header"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4 xl:gap-6" id="header-container">

          {/* Logo element */}
          <a
            href="#hulu-hero"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage('home');
            }}
            className="flex items-center group pointer-events-auto shrink-0"
            id="header-logo-link"
          >
            <img
              src={`${import.meta.env.BASE_URL}HuluHulu Logo-GV FA-02.png`}
              alt="Hulu Hulu Wellness"
              width={400}
              height={225}
              className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              id="header-logo-image"
            />
          </a>

          {/* Desktop Nav menu — compact, single-line, no wrapping */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-4 shrink min-w-0" id="desktop-navbar" aria-label={isZh ? '主导航' : 'Primary navigation'}>
            <ul className="flex items-center gap-1 xl:gap-2.5 2xl:gap-4 list-none m-0 p-0">
              {navLinks.map((link) => {
                const isActive = link.type === 'page' && currentPage === link.pageKey;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`text-xs xl:text-[13px] font-noto-sans-sc font-semibold tracking-normal whitespace-nowrap shrink-0 relative transition-all duration-200 py-1.5 px-2 xl:px-2.5 rounded-lg group pointer-events-auto flex items-center gap-1.5 ${isActive
                        ? 'text-[#A4B799] font-bold bg-[#A4B799]/8 shadow-2xs'
                        : 'text-gray-600 hover:text-[#A4B799] hover:bg-black/4'
                        }`}
                      id={`nav-link-${link.id}`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-indicator"
                          className="absolute bottom-0 inset-x-2 h-0.5 bg-[#A4B799] rounded-full"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Desk Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0 pointer-events-auto" id="header-desk-actions">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-0.5 rounded-full bg-[#ECE7DE]/80 border border-[#ECE7DE] text-xs font-bold font-noto-sans-sc shadow-2xs shrink-0" id="lang-switcher-desktop">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap ${language === 'zh'
                  ? 'bg-white text-[#A4B799] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
                title={isZh ? '切换至中文 (CN)' : 'Switch to Chinese (CN)'}
                id="lang-btn-zh"
              >
                CN
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap ${language === 'en'
                  ? 'bg-white text-[#A4B799] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
                title="Switch to English (EN)"
                id="lang-btn-en"
              >
                EN
              </button>
            </div>

            <a
              href="#final-cta-section"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage !== 'home') {
                  navigateHome('final-cta-section');
                  return;
                }
                const target = document.getElementById('final-cta-section');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 rounded-full bg-[#9BA88B] hover:bg-[#859275] text-[#FAF8F4] text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm whitespace-nowrap flex items-center gap-1.5"
              id="header-cta-btn"
            >
              <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.nav.consultationBtn}</span>
            </a>
          </div>

          {/* Mobile hamburger menu trigger — icon-only, so it needs its own
              accessible name plus the expanded/controls pair a screen reader
              uses to announce what the button does and what it opens. */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 pointer-events-auto cursor-pointer"
            id="mobile-menu-trigger"
            type="button"
            aria-label={mobileMenuOpen ? (isZh ? '关闭菜单' : 'Close menu') : (isZh ? '打开菜单' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-overlay"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
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
              <div className="px-6 py-4 flex flex-col gap-2" id="mobile-links-container">
                {/* Mobile Language Switcher */}
                <div className="flex items-center justify-between pb-3 mb-1 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-600 font-noto-sans-sc">
                    {isZh ? '选择语言' : 'Language'}
                  </span>
                  <div className="flex items-center p-0.5 rounded-full bg-[#ECE7DE]/70 border border-[#ECE7DE] text-xs font-bold font-noto-sans-sc" id="lang-switcher-mobile">
                    <button
                      onClick={() => setLanguage('zh')}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${language === 'zh'
                        ? 'bg-white text-[#A4B799] shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      {language === 'zh' ? '中文' : 'CN'}
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${language === 'en'
                        ? 'bg-white text-[#A4B799] shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      English
                    </button>
                  </div>
                </div>

                <nav aria-label={isZh ? '移动端导航' : 'Mobile navigation'}>
                  <ul className="list-none m-0 p-0">
                    {navLinks.map((link) => {
                      const isActive = link.type === 'page' && currentPage === link.pageKey;
                      return (
                        <li key={link.id}>
                          <a
                            href={`#${link.id}`}
                            onClick={(e) => handleNavClick(e, link)}
                            className={`text-sm font-noto-sans-sc font-bold py-2.5 border-b border-gray-100 flex items-center justify-between transition-colors ${isActive ? 'text-[#A4B799]' : 'text-gray-700 hover:text-[#A4B799]'
                              }`}
                            id={`m-nav-link-${link.id}`}
                          >
                            <span>{link.label}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="pt-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigateToPage('quiz');
                    }}
                    className="w-full text-center py-3 rounded-xl bg-[#A4B799] text-white text-xs font-bold hover:bg-[#8E9F84] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    id="mobile-quiz-cta"
                  >
                    <Sparkles className="w-4 h-4" />
                    {t.nav.mobileQuizCta}
                  </button>

                  <a
                    href="#final-cta-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (currentPage !== 'home') {
                        navigateHome('final-cta-section');
                        return;
                      }
                      const target = document.getElementById('final-cta-section');
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full text-center py-3 rounded-xl bg-[#9BA88B] text-white text-xs font-bold hover:bg-[#859275] transition-colors block"
                    id="mobile-header-cta"
                  >
                    {t.nav.mobileWhatsappCta}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content wrapper. Menu/Yinyang/Wellness dropped their in-page
          breadcrumb, so their top padding is tuned to the fixed header's own
          actual rendered height at each of ITS breakpoints (61px below 640px,
          65px from 640px, 69px from 768px — measured from #app-sticky-header,
          not guessed) so content starts flush under the header with no gap
          or overlap. Quiz/FAQ still render their own top breadcrumb inside
          the page, so they keep the taller clearance; home keeps its own
          pt-[80px] tuned to its taller, non-sticky-styled hero header. */}
      <main
        className={`w-full ${
          currentPage === 'home'
            ? 'pt-[80px]'
            : currentPage === 'quiz' || currentPage === 'faq'
              ? 'pt-[105px] md:pt-[115px]'
              : 'pt-[61px] sm:pt-[65px] md:pt-[69px]'
        }`}
        id="main-content"
      >

        {currentPage === 'home' && (
          <>
            {/* Section 1: Hero Banner */}
            <HeroSection />

            {belowFoldReady && (
              <React.Suspense fallback={null}>
                {/* Section 2: User Pain grid */}
                <PainPoints />

                {/* Section 3: Supplements compared with Whole foods.
                    (The Central Five Elements Interactive Wheel that used to
                    sit here is now its own page — see /wellness-lifestyle/
                    and WellnessLifestylePage — and the Yin/Yang balance
                    dashboard moved to /five-elements-balance/ and
                    YinYangPage — same as the Menu gallery.) */}
                <CompareSection />

                {/* Section 4 & Footer: Final Join CTA and copyright footer block */}
                <FooterAndCTA onNavigatePage={navigateToPage} />

                {/* Natural Tones Theme Background Watercolor Blobs.
                    These are offset against the full page box (blob-3 sits at
                    `top: 40%`, blob-2 hangs off the bottom), so they have to be
                    committed in the same paint as the sections that give the
                    document its final height — mounted any earlier they resolve
                    against the hero-only page and then jump several thousand
                    pixels, which was the entire CLS score. `<main>` is not
                    positioned, so they still lay out against #hulu-world-app
                    exactly as they did before. */}
                <div className="watercolor-blob blob-1"></div>
                <div className="watercolor-blob blob-2"></div>
                <div className="watercolor-blob blob-3"></div>
              </React.Suspense>
            )}
          </>
        )}

        {currentPage === 'menu' && (
          <React.Suspense fallback={null}>
            <MenuPage />
            <FooterAndCTA onNavigatePage={navigateToPage} />
          </React.Suspense>
        )}

        {currentPage === 'yinyang' && (
          <React.Suspense fallback={null}>
            <YinYangPage />
            <FooterAndCTA onNavigatePage={navigateToPage} />
          </React.Suspense>
        )}

        {currentPage === 'wellness' && (
          <React.Suspense fallback={null}>
            <WellnessLifestylePage />
            <FooterAndCTA onNavigatePage={navigateToPage} />
          </React.Suspense>
        )}

        {currentPage === 'quiz' && (
          <React.Suspense fallback={null}>
            <QuizPage
              onNavigateHome={navigateHome}
              onNavigateFAQ={() => navigateToPage('faq')}
              onNavigateMenu={() => navigateToPage('menu')}
            />
            <FooterAndCTA onNavigatePage={navigateToPage} />
          </React.Suspense>
        )}

        {currentPage === 'faq' && (
          <React.Suspense fallback={null}>
            <FAQPage
              onNavigateHome={navigateHome}
              onNavigateQuiz={() => navigateToPage('quiz')}
            />
            <FooterAndCTA onNavigatePage={navigateToPage} />
          </React.Suspense>
        )}

      </main>

      {/* Scroll to Top floating widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            title={t.nav.scrollToTop}
            aria-label={t.nav.scrollToTop}
            type="button"
            className="fixed bottom-8 right-8 z-[4000] w-12 h-12 rounded-full bg-[#A4B799] text-[#FAF8F4] hover:bg-[#8E9F84] flex items-center justify-center shadow-lg cursor-pointer transform hover:translate-y-[-4px] transition-all duration-300 pointer-events-auto"
            id="scroll-to-top-fab"
          >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
