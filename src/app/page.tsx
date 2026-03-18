"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);

  const setContext = (mode: "b2b" | "b2c") => {
    document.cookie = `jrag-context=${mode}; path=/; max-age=3600; SameSite=Lax`;
  };

  const handleSelectPath = (mode: "b2b" | "b2c") => {
    setContext(mode);
    trackEvent("select_onboarding_path", {
      audience: mode,
      entry_point: "home_split",
      variant: "classy_calm_v1",
    });
  };

  useEffect(() => {
    trackEvent("view_onboarding_gateway", {
      variant: "classy_calm_v1",
    });

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const panels = Array.from(
        containerRef.current?.querySelectorAll<HTMLElement>("[data-panel]") ?? []
      );
      const revealNodes = Array.from(
        containerRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? []
      );

      gsap.set(panels, { autoAlpha: 0, yPercent: 4, scale: 1.01, filter: "blur(8px)" });
      gsap.set(emblemRef.current, { autoAlpha: 0, y: 18, scale: 0.94, rotate: -3 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(panels, {
        autoAlpha: 1,
        yPercent: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.3,
        stagger: 0.16,
      })
        .to(
          emblemRef.current,
          { autoAlpha: 1, y: 0, scale: 1, rotate: 0, duration: 0.95, ease: "power2.out" },
          "-=0.92"
        )
        .from(
          revealNodes,
          { y: 20, autoAlpha: 0, stagger: 0.06, duration: 0.82, ease: "power2.out" },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#021630] font-sans md:min-h-screen md:flex-row"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(164,216,229,0.08),transparent_45%),radial-gradient(circle_at_84%_78%,rgba(240,234,214,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-45 [background:linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:100%_38px] md:[background-size:100%_50px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(0,43,92,0.5)_0%,rgba(2,22,48,0.12)_38%,rgba(240,234,214,0.18)_100%)]" />

      <div className="pointer-events-none absolute left-6 top-6 z-30 text-dakhla-sand/65 md:left-10 md:top-9">
        <p data-reveal className="text-[10px] font-semibold uppercase tracking-[0.34em]">
          Rio Aqua Group
        </p>
        <p data-reveal className="mt-2 max-w-[22rem] text-xs leading-relaxed text-dakhla-sand/50">
          Choisissez votre parcours. Un accueil plus calme, plus noble, construit pour la
          rigueur de decision.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/24 to-transparent md:block" />

      <div
        ref={emblemRef}
        className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/95 p-4 shadow-[0_18px_46px_rgba(0,0,0,0.36)] md:block"
      >
        <Image src="/logo.png" alt="JRAG Logo" width={120} height={120} className="object-contain" />
      </div>

      <div className="absolute left-1/2 top-8 z-30 -translate-x-1/2 rounded-full border border-white/35 bg-white/95 p-2 shadow-[0_10px_26px_rgba(0,0,0,0.24)] md:hidden">
        <Image src="/logo.png" alt="JRAG Logo" width={80} height={80} className="object-contain" />
      </div>

      <Link
        data-panel
        href="/b2b"
        onClick={() => handleSelectPath("b2b")}
        aria-label="Entrer dans l'espace B2B"
        className="group relative z-10 flex min-h-[50svh] w-full flex-col items-center justify-center overflow-hidden border-b border-white/14 bg-[linear-gradient(160deg,#041a39_0%,#002b5c_58%,#204874_100%)] px-8 py-20 text-center transition-all duration-700 hover:brightness-105 focus-visible:z-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dakhla-sand md:min-h-[100svh] md:w-1/2 md:border-b-0 md:border-r md:border-white/10 md:px-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(164,216,229,0.15),transparent_38%)] opacity-70 transition-opacity duration-700 group-hover:opacity-95" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/42" />
        <div className="relative z-10 max-w-md">
          <p
            data-reveal
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-dakhla-sand/72"
          >
            Rigoureux
          </p>
          <h2
            data-reveal
            className="mb-5 font-serif text-[clamp(2.35rem,5.1vw,4.7rem)] leading-[1.03] tracking-[0.02em] text-white"
          >
            Espace Professionnel
          </h2>
          <p data-reveal className="mx-auto max-w-md text-[15px] leading-relaxed text-dakhla-sand/82">
            Rigoureux par Nature. Pur par Design. <br />
            Securisez votre approvisionnement premium avec certification complete.
          </p>
          <div
            data-reveal
            className="mt-10 inline-flex items-center gap-2 border-b border-dakhla-sand/72 pb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-dakhla-sand transition-all duration-500 group-hover:border-white group-hover:text-white"
          >
            Entrer
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              {"->"}
            </span>
          </div>
        </div>
      </Link>

      <Link
        data-panel
        href="/b2c/shop"
        onClick={() => handleSelectPath("b2c")}
        aria-label="Entrer dans la boutique B2C"
        className="group relative z-10 flex min-h-[50svh] w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#f3eddf_0%,#ecdfc4_52%,#e6d5b5_100%)] px-8 py-20 text-center transition-all duration-700 hover:brightness-105 focus-visible:z-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rio-navy md:min-h-[100svh] md:w-1/2 md:px-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(255,107,0,0.14),transparent_42%)] opacity-60 transition-opacity duration-700 group-hover:opacity-85" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/8" />
        <div className="relative z-10 max-w-md">
          <p
            data-reveal
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-rio-navy/64"
          >
            Noble
          </p>
          <h2
            data-reveal
            className="mb-5 font-serif text-[clamp(2.35rem,5.1vw,4.7rem)] leading-[1.03] tracking-[0.02em] text-rio-navy"
          >
            Boutique Privée
          </h2>
          <p data-reveal className="mx-auto max-w-md text-[15px] leading-relaxed text-rio-navy/80">
            Le plus pur trésor de la lagune. <br />
            Une experience sensorielle de Dakhla, du desert a votre table.
          </p>
          <div
            data-reveal
            className="mt-10 inline-flex items-center gap-2 border-b border-rio-navy/74 pb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-rio-navy transition-all duration-500 group-hover:border-living-orange group-hover:text-living-orange"
          >
            Commander
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              {"->"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

