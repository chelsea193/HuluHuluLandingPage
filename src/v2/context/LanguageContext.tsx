/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { isEnglishPath, getLocaleBasePath, buildLocaleUrl, type Language } from '../utils/locale';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isZh: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'huluhulu_language_preference';

/**
 * "/" and "/en/" (and, per page, "/menu" and "/en/menu") are separate static
 * documents — see en/index.html, menu/index.html, en/menu/index.html and
 * vite.config.ts's multi-page build — not one page with a client-side
 * toggle. The URL is therefore authoritative: a visitor landing on /en/...
 * always sees English, even if localStorage remembers a stale preference
 * from a previous visit to the Chinese document.
 */
function detectLanguageFromPath(): Language {
  if (typeof window === 'undefined') return 'zh';
  return isEnglishPath(window.location.pathname) ? 'en' : 'zh';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const fromUrl = detectLanguageFromPath();
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, fromUrl);
    }
    return fromUrl;
  });

  // Switching language means navigating to the sibling document for the
  // current page (home, menu, ...) rather than flipping state in place —
  // there is no in-place "English mode" left to flip to.
  const setLanguage = (lang: Language) => {
    if (typeof window === 'undefined' || lang === language) return;
    localStorage.setItem(STORAGE_KEY, lang);
    const { pathname, hash, search } = window.location;
    const base = getLocaleBasePath(pathname);
    window.location.href = buildLocaleUrl(lang, base, `${search}${hash}`);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  useEffect(() => {
    // Keep <html lang> in step with the active language. "zh-Hans" (not
    // "zh-CN") matches index.html's static initial value, so switching to
    // Chinese never changes the attribute when it was already correct.
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    isZh: language === 'zh'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
