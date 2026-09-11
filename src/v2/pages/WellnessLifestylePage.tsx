/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FiveElementsWheel from '../components/FiveElementsWheel';

/**
 * The Wellness / Lifestyle page — formerly a scroll-to section on the
 * homepage ("section-5"), now its own document at /wellness-lifestyle/ and
 * /en/wellness-lifestyle/ (see wellness-lifestyle/index.html,
 * en/wellness-lifestyle/index.html, vite.config.ts) so it can carry its own
 * indexable <title>/description instead of sharing the homepage's — same
 * pattern as MenuPage (/menu/) and YinYangPage (/five-elements-balance/).
 * FiveElementsWheel owns the page's single <h1>.
 */
export default function WellnessLifestylePage() {
  return (
    <div id="wellness-lifestyle-page-root">
      <FiveElementsWheel />
    </div>
  );
}
