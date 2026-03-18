"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavLink = { name: string; href: string };

const b2bLinks: NavLink[] = [
  { name: "Histoire", href: "/b2b/history" },
  { name: "Produits", href: "/b2b/products" },
  { name: "Certifications", href: "/b2b/certifications" },
  { name: "Contact", href: "/b2b/contact" },
  { name: "Demander un devis", href: "/b2b/request-quote" },
];

const b2cLinks: NavLink[] = [
  { name: "Boutique", href: "/b2c/shop" },
  { name: "Mon compte", href: "/b2c/account" },
  { name: "Recettes", href: "/b2c/recipes" },
  { name: "Panier", href: "/b2c/cart" },
];

const sharedLinks: NavLink[] = [
  { name: "Impact & RSE", href: "/shared/impact" },
  { name: "Blog", href: "/shared/blog" },
  { name: "Galerie", href: "/shared/gallery" },
  { name: "FAQ", href: "/shared/faq" },
];

const legalLinks: NavLink[] = [
  { name: "Mentions legales", href: "/legal/mentions" },
  { name: "Confidentialite", href: "/legal/privacy" },
  { name: "CGV / CGU", href: "/legal/cgv" },
  { name: "Plan du site", href: "/shared/sitemap" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInfoMenuOpen, setIsInfoMenuOpen] = useState(false);
  const [persistedContext, setPersistedContext] = useState<"b2b" | "b2c" | null>(null);

  useEffect(() => {
    setIsOpen(false);
    setIsInfoMenuOpen(false);

    // Read context from cookie
    const match = document.cookie.match(/jrag-context=(b2b|b2c)/);
    if (match) {
      setPersistedContext(match[1] as "b2b" | "b2c");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isB2B = pathname.startsWith("/b2b");
  const isB2C = pathname.startsWith("/b2c");
  const isShared = pathname.startsWith("/shared");
  const isLegal = pathname.startsWith("/legal");

  useEffect(() => {
    if (isB2B) {
      document.cookie = "jrag-context=b2b; path=/; max-age=2592000; samesite=lax";
      setPersistedContext("b2b");
    }
    if (isB2C) {
      document.cookie = "jrag-context=b2c; path=/; max-age=2592000; samesite=lax";
      setPersistedContext("b2c");
    }
  }, [isB2B, isB2C]);

  // Determine active mode: explicit route takes priority, then persisted cookie.
  const activeMode = isB2B ? "b2b" : isB2C ? "b2c" : persistedContext || "b2b";
  const isActuallyB2C = activeMode === "b2c";

  const primaryLinks = useMemo(() => {
    if (isB2B) {
      return b2bLinks;
    }
    if (isB2C) {
      return b2cLinks;
    }
    if (isShared) {
      return sharedLinks;
    }
    return legalLinks;
  }, [isB2B, isB2C, isShared]);

  if (isHome) {
    return null;
  }

  const bgColor = isActuallyB2C
    ? isScrolled
      ? "bg-rio-navy/92 ring-1 ring-dakhla-sand/25"
      : "bg-rio-navy/86 ring-1 ring-dakhla-sand/20"
    : isScrolled
      ? "bg-rio-navy/90"
      : "bg-rio-navy/84";

  const accentColor = "text-dakhla-sand";
  const toggleHref = activeMode === "b2b" ? "/b2c/shop" : "/b2b/request-quote";
  const toggleLabel = activeMode === "b2b" ? "Vers la boutique" : "Espace pro";

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${bgColor} text-white ${isScrolled ? "shadow-xl" : "shadow-none"}`}
      data-reveal
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between py-3">
          <Link href="/" className="group relative shrink-0">
            <div className="rounded-xl bg-white p-2 shadow-lg transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="JRAG Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
            <div className="ml-12 flex items-center gap-7 font-sans text-[11px] font-semibold uppercase tracking-[0.14em]">
              {primaryLinks.map((link) => {
                const active = isCurrent(pathname, link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative transition-colors duration-200 hover:text-white ${active ? accentColor : "text-white/90"}`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-current transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                );
              })}

              {!isShared && !isLegal && (
                <div
                  className="relative"
                  onMouseEnter={() => setIsInfoMenuOpen(true)}
                  onMouseLeave={() => setIsInfoMenuOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={isInfoMenuOpen}
                    aria-controls="nav-more-menu"
                    className="flex items-center gap-1 text-white/90 transition-colors hover:text-dakhla-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    onClick={() => setIsInfoMenuOpen((open) => !open)}
                    onFocus={() => setIsInfoMenuOpen(true)}
                    onBlur={(event) => {
                      if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
                        setIsInfoMenuOpen(false);
                      }
                    }}
                  >
                    En savoir plus
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    id="nav-more-menu"
                    className={`absolute left-0 mt-2 w-52 rounded-xl border border-gray-100 bg-white py-2 text-rio-navy shadow-2xl transition-all duration-200 ${isInfoMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
                  >
                    {[...sharedLinks, ...legalLinks].map((link) => {
                      const active = isCurrent(pathname, link.href);
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={`block px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-gray-50 hover:text-heritage-blue ${active ? "text-heritage-blue" : ""}`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <Link
              href={toggleHref}
              className="rounded-full border-2 border-white/40 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:border-white hover:bg-white hover:text-rio-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {toggleLabel}
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label="Ouvrir le menu principal"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-xl bg-white/10 p-2.5 transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[36rem]" : "max-h-0"}`}
      >
        <div className="mx-4 mb-4 space-y-6 rounded-2xl border border-white/15 bg-white p-6 text-rio-navy shadow-2xl">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-rio-navy/45">
              Navigation principale
            </p>
            {primaryLinks.map((link) => {
              const active = isCurrent(pathname, link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block text-sm font-bold uppercase tracking-widest transition-colors ${active ? "text-heritage-blue" : "text-rio-navy hover:text-heritage-blue"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="h-px w-full bg-rio-navy/10" />

          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-rio-navy/45">
              Sections
            </p>
            {[...sharedLinks, ...legalLinks].map((link) => (
              <Link
                key={`mobile-${link.name}`}
                href={link.href}
                className="block text-xs font-bold uppercase tracking-[0.14em] text-rio-navy/70 transition-colors hover:text-heritage-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href={toggleHref}
            className={`block w-full rounded-xl py-3 text-center text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg ${activeMode === "b2b" ? "bg-living-orange" : "bg-heritage-blue"}`}
          >
            {toggleLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}
