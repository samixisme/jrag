"use client";

import { useEffect, useState, FormEvent } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsVisibleDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isBlogArticle = pathname.startsWith("/shared/blog/") && pathname !== "/shared/blog";

  useEffect(() => {
    if (!isBlogArticle || isDismissed) return;

    let hasScrolled60 = false;
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent > 0.6) {
        hasScrolled60 = true;
      }
    };

    const handleExitIntent = (e: MouseEvent) => {
      if (hasScrolled60 && e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    // Mobile: 12s inactivity after 60% scroll
    const startInactivityTimer = () => {
      if (hasScrolled60) {
        timer = setTimeout(() => {
          setIsVisible(true);
        }, 12000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseout", handleExitIntent);
    window.addEventListener("touchstart", () => clearTimeout(timer));
    window.addEventListener("scroll", startInactivityTimer);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseout", handleExitIntent);
      clearTimeout(timer);
    };
  }, [isBlogArticle, isDismissed]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      trackEvent("subscribe_newsletter", { form_location: "exit_popup" });
      setIsSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setIsVisible(false);
        setIsVisibleDismissed(true);
      }, 2000);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-rio-navy/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-none border border-white/10 bg-white p-8 shadow-2xl">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-rio-navy/40 hover:text-rio-navy"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <h3 className="font-serif text-2xl text-rio-navy mb-2">Bienvenue a table.</h3>
            <p className="text-sm text-rio-navy/60">Votre inscription est confirmee.</p>
          </div>
        ) : (
          <>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-heritage-blue mb-4">
              Avant de partir...
            </p>
            <h2 className="font-serif text-3xl text-rio-navy mb-4 leading-tight">
              Rejoignez la Table du Chef.
            </h2>
            <p className="text-sm text-rio-navy/70 mb-8 leading-relaxed">
              Recevez chaque mois nos accords mets-vins, les profils des nouvelles recoltes et les techniques des chefs etoiles.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full border-b-2 border-heritage-blue bg-transparent py-3 text-rio-navy outline-none focus:border-living-orange transition-colors"
              />
              <div className="flex items-center justify-between pt-4">
                <button 
                  type="button"
                  onClick={() => {
                    setIsVisible(false);
                    setIsVisibleDismissed(true);
                  }}
                  className="text-[10px] font-bold uppercase tracking-widest text-rio-navy/40 hover:text-rio-navy"
                >
                  Non, merci.
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-living-orange px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:brightness-110 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Envoi..." : "S'abonner"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
