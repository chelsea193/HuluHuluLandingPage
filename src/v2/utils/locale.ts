/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Path-prefix helpers shared between LanguageContext (switching language on
 * the current page) and App.tsx (switching page while keeping the language).
 * Each real page ("/", "/menu", "/five-elements-balance", "/wellness-lifestyle",
 * "/quiz", "/faq") is built as two separate static documents — one at the
 * bare path (Chinese) and one under "/en" (English) — see vite.config.ts's
 * multi-page `build.rollupOptions.input` and the sibling index.html /
 * menu/index.html / five-elements-balance/index.html /
 * wellness-lifestyle/index.html / quiz/index.html / faq/index.html (each with
 * an en/ counterpart) shells.
 */

export type Language = 'zh' | 'en';
export type BasePath = '/' | '/menu' | '/five-elements-balance' | '/wellness-lifestyle' | '/quiz' | '/faq';

/** True for "/en", "/en/", "/en/menu", "/en/menu/", etc. */
export function isEnglishPath(pathname: string): boolean {
  const lower = pathname.toLowerCase();
  return lower === '/en' || lower.startsWith('/en/');
}

/** Strips the "/en" locale prefix (if any) and trailing slashes, leaving the page identity. */
export function getLocaleBasePath(pathname: string): BasePath {
  const lower = pathname.toLowerCase();
  const withoutEn = lower === '/en' || lower === '/en/'
    ? '/'
    : lower.startsWith('/en/')
      ? lower.slice(3)
      : lower;
  const trimmed = withoutEn.replace(/\/+$/, '') || '/';
  if (trimmed === '/menu') return '/menu';
  if (trimmed === '/five-elements-balance') return '/five-elements-balance';
  if (trimmed === '/wellness-lifestyle') return '/wellness-lifestyle';
  if (trimmed === '/quiz') return '/quiz';
  if (trimmed === '/faq') return '/faq';
  return '/';
}

/** Builds the real URL for a given language + page, preserving any hash/search. */
export function buildLocaleUrl(lang: Language, base: BasePath, hashAndSearch = ''): string {
  const path = lang === 'en'
    ? (base === '/' ? '/en/' : `/en${base}/`)
    : (base === '/' ? '/' : `${base}/`);
  return `${path}${hashAndSearch}`;
}
