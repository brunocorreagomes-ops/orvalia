"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    try {
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        lerp: 0.1,
      });

      lenis.on('scroll', ScrollTrigger.update);

      tick = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      console.error("Lenis/Scroll error:", e);
    }

    return () => {
      if (lenis) lenis.destroy();
      if (tick) gsap.ticker.remove(tick);
    };
  }, []);

  return null;
}
