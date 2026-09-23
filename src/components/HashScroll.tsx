"use client";

import { useEffect } from "react";

/**
 * Scrolls the closest scroll container to `window.location.hash` on mount
 * and whenever the URL hash changes. Necessary because `.mainContent` owns
 * its own scroll (see globals.css) and native anchor navigation doesn't
 * always find the inner container reliably, especially after cross-page
 * client-side navigations.
 *
 * Mount once, near the top of any page whose sections use `id` anchors.
 */
export default function HashScroll() {
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash.slice(1);
            if (!hash) return;
            // wait a frame so the target element is definitely laid out
            requestAnimationFrame(() => {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        };

        scrollToHash();
        window.addEventListener("hashchange", scrollToHash);
        return () => window.removeEventListener("hashchange", scrollToHash);
    }, []);

    return null;
}
