/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import YinYangBalance from '../components/YinYangBalance';

/**
 * The Five Elements / Yin-Yang page — formerly a scroll-to section on the
 * homepage, now its own document at /five-elements-balance/
 * and /en/five-elements-balance/ (see five-elements-balance/index.html,
 * en/five-elements-balance/index.html, vite.config.ts) so it can carry its
 * own indexable <title>/description instead of sharing the homepage's.
 * YinYangBalance owns the page's split-screen content.
 */
export default function YinYangPage() {
  return (
    <div id="yinyang-page-root">
      <YinYangBalance />
    </div>
  );
}
