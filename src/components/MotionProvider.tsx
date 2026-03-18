"use client";

import { useEffect } from "react";

export default function MotionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    let cleanup = () => undefined;

    const setupMotion = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const [{ default: Lenis }, gsapModule, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      const gsap = gsapModule.gsap;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.1,
        lerp: 0.08,
        smoothWheel: true,
      });

      const onScroll = () => {
        ScrollTrigger.update();
      };

      lenis.on("scroll", onScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      const revealTargets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealTargets.forEach((target) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: target,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      cleanup = () => {
        lenis.off("scroll", onScroll);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    setupMotion();
    return () => cleanup();
  }, []);

  return <>{children}</>;
}
