import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;

const REVEAL_SELECTOR =
  "section h1, section h2, section h3, section p, section img, section video, section article, section li, section form, section blockquote, [data-reveal]";

const SmoothScroll = () => {
  const { pathname } = useLocation();

  // Lenis smooth scrolling
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Reset to top on route change + reveal-on-scroll
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
        if (el.classList.contains("reveal") || el.closest("[data-no-reveal]")) return;
        if (el.parentElement?.closest(".reveal:not(.is-revealed)")) return; // avoid double nesting delay
        el.classList.add("reveal");
        io.observe(el);
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
