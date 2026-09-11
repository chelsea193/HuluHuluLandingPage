/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sprout } from 'lucide-react';
import { useAfterLoad } from '../useAfterLoad';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

/** Tailwind's md / lg breakpoints, mirrored so JS and CSS agree. */
const QUERIES: Record<Breakpoint, string> = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
};

const detect = (): Breakpoint => {
  if (typeof window === 'undefined') return 'desktop';
  if (window.matchMedia(QUERIES.mobile).matches) return 'mobile';
  if (window.matchMedia(QUERIES.tablet).matches) return 'tablet';
  return 'desktop';
};

/**
 * Which hero band to render. The three bands used to be rendered together and
 * hidden with `md:hidden` / `hidden lg:flex`, but CSS visibility does not stop
 * the download — every visitor was fetching all three hero clips. Mounting only
 * the matching band means one clip is fetched instead of three.
 */
function useBreakpoint(): Breakpoint {
  const [bp, setBp] = React.useState<Breakpoint>(detect);

  React.useEffect(() => {
    const lists = (Object.keys(QUERIES) as Breakpoint[]).map((k) => window.matchMedia(QUERIES[k]));
    const onChange = () => setBp(detect());
    lists.forEach((l) => l.addEventListener('change', onChange));
    onChange(); // resolve any resize between first paint and mount
    return () => lists.forEach((l) => l.removeEventListener('change', onChange));
  }, []);

  return bp;
}

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = React.useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

/**
 * Decorative background clip. The source is an H.264/VP9 pair rather than the
 * original GIF — the same 7.7s loop is ~1 MB as video against ~50 MB as GIF.
 *
 * The poster is rendered as a real <img> rather than the <video poster>
 * attribute: it is the frame the video starts on, it is preloaded from
 * index.html, and as an <img> it can paint as soon as the markup exists
 * instead of waiting for a video element to be created and decoded. The
 * <video> is then layered over it once the page is idle, so the swap is
 * invisible — same first frame, same box. Reduced motion keeps the poster.
 */
function HeroClip({
  name,
  className,
  id,
  reduced,
  videoRef,
}: {
  name: string;
  className: string;
  id: string;
  reduced: boolean;
  videoRef?: React.Ref<HTMLVideoElement>;
}) {
  const base = `${import.meta.env.BASE_URL}${name}`;
  const poster = `${base}-poster.jpg`;
  const showVideo = useAfterLoad() && !reduced;

  return (
    <>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        // The hero is above the fold on every breakpoint, so this is the LCP
        // candidate and must never be lazy or deprioritised.
        fetchPriority="high"
        decoding="async"
        className={className}
        id={id}
      />
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          aria-hidden="true"
          tabIndex={-1}
          className={className}
          id={`${id}-video`}
        >
          {/* MP4 first on purpose. The VP9/WebM encode came out larger than the
              H.264 one for all three clips (1.5 MB vs 1.3 MB on desktop), and
              every browser that plays the WebM plays the MP4 too — offering
              WebM first just spends the extra bytes for nothing. */}
          <source src={`${base}.mp4`} type="video/mp4" />
          <source src={`${base}.webm`} type="video/webm" />
        </video>
      )}
    </>
  );
}

export default function HeroSection() {
  const breakpoint = useBreakpoint();
  const reducedMotion = usePrefersReducedMotion();
  const { isZh } = useLanguage();
  const t = TRANSLATIONS[isZh ? 'zh' : 'en'].hero;

  // The tablet layout shows the same clip twice (top crop / bottom crop) as one
  // continuous image, so the second element is nudged back into step whenever
  // the two decoders drift apart.
  const tabletTopRef = React.useRef<HTMLVideoElement>(null);
  const tabletBottomRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (breakpoint !== 'tablet' || reducedMotion) return;
    const top = tabletTopRef.current;
    const bottom = tabletBottomRef.current;
    if (!top || !bottom) return;
    const sync = () => {
      if (Math.abs(top.currentTime - bottom.currentTime) > 0.15) {
        bottom.currentTime = top.currentTime;
      }
    };
    top.addEventListener('timeupdate', sync);
    return () => top.removeEventListener('timeupdate', sync);
  }, [breakpoint, reducedMotion]);

  const scrollToConcern = (e: React.MouseEvent) => {
    e.preventDefault();
    // Anchor-scroll to the next homepage section (Pain Points). This used to
    // target FiveElementsWheel's "section-5", but that section moved to its
    // own page (/wellness-lifestyle/ — see WellnessLifestylePage.tsx) and no
    // longer exists on the homepage.
    const target = document.getElementById('pain-points-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Exactly one band mounts, so the hero copy exists once in the DOM: it always
  // owns the <h1> and the plain ids, with no risk of duplicate headings.
  const heroContent = () => {
    const Headline = motion.h1;
    const uid = (name: string) => name;

    return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-4"
        id={uid('title-pill')}
      >
        {/* <div className="w-8 h-8 rounded-full bg-[#9BA88B]/20 flex items-center justify-center text-[#9BA88B]" id="brand-sprout">
          <Sprout className="w-4 h-4" />
        </div> */}
        <span className="text-sm uppercase tracking-widest font-noto-sans-sc font-black text-gray-500" id={uid('hero-small-title')}>
          {t.smallTitle}
        </span>
      </motion.div>

      <Headline
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-noto-sans-sc font-black text-[#A4B799] tracking-tight leading-tight mb-4"
        id={uid('hero-main-headline')}
      >
        {t.mainHeadline}
      </Headline>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm sm:text-base font-noto-sans-sc text-[#2F2F2F] font-light leading-relaxed mb-6 max-w-xl"
        id={uid('hero-subheadline')}
      >
        {t.subheadline}
      </motion.p>

      {/* Action CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center gap-3"
        id={uid('hero-button-box')}
      >
        <a
          href="#pain-points-section"
          onClick={scrollToConcern}
          className="px-8 py-4 rounded-full bg-[#A4B799] hover:bg-[#8E9F84] text-[#FFFAE8] text-sm font-noto-sans-sc font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-amber-950/10 cursor-pointer pointer-events-auto inline-flex items-center gap-2 group"
          id={uid('hero-primary-cta')}
        >
          {t.ctaBtn}
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>

        <span className="text-xs text-gray-600 font-noto-sans-sc tracking-widest" id={uid('hero-curation-credit')}>
          {t.curationCredit}
        </span>
      </motion.div>
    </>
    );
  };

  return (
    <header className="relative w-full bg-[#FAF1EA] overflow-hidden" id="hulu-hero">

      {/* Mobile — single full-bleed clip, text centered on top */}
      {breakpoint === 'mobile' && (
        <div className="relative min-h-[100vh] flex items-start justify-center" id="hulu-hero-mobile">
          <HeroClip
            name="LP-Mobile-GIF"
            reduced={reducedMotion}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
            id="hulu-hero-bg-image-mobile"
          />
          <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-16 pb-24 text-center flex flex-col items-center" id="hero-layout-mobile">
            {heroContent()}
          </div>
        </div>
      )}

      {/* Tablet — the tablet clip is split into a text band (its own top-cropped slice, sized to
          the text) and a fixed-ratio band below that reveals the mascot from a bottom-anchored
          backdrop. The band height scales with viewport width (not the header's height), so the
          crop stays correct across the whole md–lg range. */}
      {breakpoint === 'tablet' && (
        <div className="relative" id="hulu-hero-tablet">
          <div className="relative" id="hulu-hero-tablet-text-band">
            <HeroClip
              name="LP-Tablet-GIF"
              reduced={reducedMotion}
              videoRef={tabletTopRef}
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0"
              id="hulu-hero-bg-image-tablet-title-band"
            />
            <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-20 pb-10 text-center flex flex-col items-center" id="hero-layout-tablet">
              {heroContent()}
            </div>
          </div>
          <div className="relative h-[70vw] overflow-hidden" id="hulu-hero-tablet-object-band">
            <HeroClip
              name="LP-Tablet-GIF"
              reduced={reducedMotion}
              videoRef={tabletBottomRef}
              className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none"
              id="hulu-hero-bg-image-tablet-object-band"
            />
          </div>
        </div>
      )}

      {/* Desktop — single full-bleed clip, text centered on top */}
      {breakpoint === 'desktop' && (
        <div className="relative min-h-[100vh] flex items-start justify-center" id="hulu-hero-desktop">
          <HeroClip
            name="LP-Desktop-Header"
            reduced={reducedMotion}
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0"
            id="hulu-hero-bg-image-desktop"
          />
          <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-16 pb-24 text-center flex flex-col items-center" id="hero-layout-desktop">
            {heroContent()}
          </div>
        </div>
      )}

    </header>
  );
}
