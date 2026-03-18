"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterError, setNewsletterError] = useState("");

  if (pathname === "/") {
    return null;
  }

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = email.trim();

    if (!isValidEmail(normalized)) {
      setNewsletterError("Veuillez saisir une adresse email valide.");
      setNewsletterMessage("");
      return;
    }

    setNewsletterError("");
    setIsSubmitting(true);

    window.setTimeout(() => {
      trackEvent("subscribe_newsletter", { form_location: "footer" });
      setNewsletterMessage("Merci. Votre inscription est confirmee.");
      setEmail("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-rio-navy pb-10 pt-20 font-sans text-white">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-atmosphere-blue/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8" data-reveal>
            <Link
              href="/"
              className="inline-block rounded-2xl bg-white p-3 shadow-2xl transition-transform hover:scale-105"
            >
              <Image
                src="/logo.png"
                alt="JRAG Logo"
                width={90}
                height={90}
                className="object-contain"
              />
            </Link>
            <div>
              <h3 className="mb-2 text-xl font-bold font-serif text-white">
                Jaimetchoujena Rio Aqua Group
              </h3>
              <p className="max-w-xs text-xs font-semibold uppercase tracking-widest text-dakhla-sand/50">
                Rigoureux par nature.
                <br />
                Pur par design.
              </p>
            </div>
            <form className="space-y-2" onSubmit={handleNewsletterSubmit} noValidate>
              <label
                htmlFor="footer-newsletter"
                className="block text-[10px] font-black uppercase tracking-[0.22em] text-dakhla-sand/70"
              >
                Lagoon report mensuel
              </label>
              <div className="flex gap-2">
                <input
                  id="footer-newsletter"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="email@entreprise.com"
                  className={`min-h-11 w-full rounded-lg border bg-white px-3 py-2 text-sm text-rio-navy outline-none transition-all placeholder:text-rio-navy/45 focus-visible:border-living-orange focus-visible:ring-2 focus-visible:ring-living-orange/20 ${newsletterError ? "border-red-400" : "border-white/20"}`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-11 shrink-0 rounded-lg border border-living-orange bg-living-orange px-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-all hover:brightness-110 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "..." : "S'abonner"}
                </button>
              </div>
              {newsletterError && (
                <p className="text-xs text-red-300" role="alert">
                  {newsletterError}
                </p>
              )}
              {newsletterMessage && (
                <p className="text-xs text-dakhla-sand" role="status">
                  {newsletterMessage}
                </p>
              )}
            </form>
          </div>

          <div data-reveal>
            <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-dakhla-sand/75">
              Professionnels
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="/b2b/products"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Catalogue produits
                </Link>
              </li>
              <li>
                <Link
                  href="/b2b/history"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Origines & terroir
                </Link>
              </li>
              <li>
                <Link
                  href="/b2b/certifications"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Normes & qualite
                </Link>
              </li>
              <li>
                <Link
                  href="/b2b/request-quote"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          <div data-reveal>
            <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-dakhla-sand/75">
              Particuliers
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="/b2c/shop"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  La boutique
                </Link>
              </li>
              <li>
                <Link
                  href="/b2c/recipes"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Cuisiner l'huitre
                </Link>
              </li>
              <li>
                <Link
                  href="/shared/impact"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Engagement durable
                </Link>
              </li>
              <li>
                <Link
                  href="/shared/faq"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Assistance client
                </Link>
              </li>
            </ul>
          </div>

          <div data-reveal>
            <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-dakhla-sand/75">
              Entreprise
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="/shared/blog"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Actualites
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/mentions"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Mentions legales
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Confidentialite
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/cgv"
                  className="text-white/60 transition-colors duration-300 hover:text-white"
                >
                  CGV / CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/shared/sitemap"
                  className="text-white/60 underline decoration-atmosphere-blue/50 underline-offset-4 transition-colors duration-300 hover:text-white"
                >
                  Plan du site
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white/5 pt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-dakhla-sand/30 md:flex-row">
          <p>(c) 2026 JRAG. Etabli a Dakhla, Sahara.</p>
          <div className="mt-6 flex space-x-8 md:mt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
