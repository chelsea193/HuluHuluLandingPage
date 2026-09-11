/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FoodGallery from '../components/FoodGallery';

/**
 * The Menu page — formerly a scroll-to section on the homepage
 * ("gallery-section"), now its own document at /menu/ and /en/menu/ (see
 * menu/index.html, en/menu/index.html, vite.config.ts) so it can carry its
 * own indexable <title>/description instead of sharing the homepage's.
 * FoodGallery owns the page's single <h1>.
 */
export default function MenuPage() {
  return (
    <div id="menu-page-root">
      <FoodGallery />
    </div>
  );
}
