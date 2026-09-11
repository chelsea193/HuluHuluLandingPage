import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Served from the domain root: huluhuluwellness.com is a GitHub Pages
    // custom domain, not a github.io subpath.
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        // Static HTML shells, one per (page, language) pair, sharing one React
        // bundle — each shell carries its own locale-pure SEO tags (title,
        // description, hreflang, JSON-LD) so Google can index and rank each
        // page and language separately instead of one bilingual document.
        input: {
          main: path.resolve(__dirname, 'index.html'),
          en: path.resolve(__dirname, 'en/index.html'),
          menu: path.resolve(__dirname, 'menu/index.html'),
          menuEn: path.resolve(__dirname, 'en/menu/index.html'),
          yinyang: path.resolve(__dirname, 'five-elements-balance/index.html'),
          yinyangEn: path.resolve(__dirname, 'en/five-elements-balance/index.html'),
          wellness: path.resolve(__dirname, 'wellness-lifestyle/index.html'),
          wellnessEn: path.resolve(__dirname, 'en/wellness-lifestyle/index.html'),
          quiz: path.resolve(__dirname, 'quiz/index.html'),
          quizEn: path.resolve(__dirname, 'en/quiz/index.html'),
          faq: path.resolve(__dirname, 'faq/index.html'),
          faqEn: path.resolve(__dirname, 'en/faq/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});