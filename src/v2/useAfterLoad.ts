/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * `true` once the page has finished loading and the main thread has gone idle.
 *
 * The page is client-rendered, so every section it mounts on the first pass is
 * work that happens before anything at all appears on screen. Gating the
 * below-the-fold sections — and the decorative hero clip — on this flag means
 * the first render only has to produce the hero, and the rest arrives a moment
 * later while the visitor is still reading it.
 *
 * The 2s `timeout` is a backstop: on a busy main thread an idle callback can be
 * postponed indefinitely, and the rest of the page must never fail to mount.
 */
export function useAfterLoad(): boolean {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancel = () => {};
    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        const h = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
        cancel = () => window.cancelIdleCallback(h);
      } else {
        const h = window.setTimeout(() => setReady(true), 200);
        cancel = () => window.clearTimeout(h);
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
    return () => {
      window.removeEventListener('load', schedule);
      cancel();
    };
  }, []);

  return ready;
}
