"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lenis: Lenis | null = null;
    
    try {
      lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    } catch (error) {
      console.error("Lenis skip:", error);
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  return null;
}
