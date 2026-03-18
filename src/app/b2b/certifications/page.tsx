"use client";

import { trackEvent } from "@/lib/analytics";

const certificates = [
  { 
    label: "Certification ISO 22000", 
    type: "iso_22000",
    description: "Management de la securite des denrees alimentaires.",
    date: "2026-01-12",
    href: "/brand/certifications.html"
  },
  { 
    label: "Conformite HACCP", 
    type: "haccp",
    description: "Analyse des dangers et points critiques pour leur maitrise.",
    date: "2025-11-05",
    href: "/brand/certifications.html"
  },
  { 
    label: "Traceabilite : Batch Passport", 
    type: "batch_report",
    description: "Exemple de rapport de lot complet (Purification, Labo, Logistique).",
    date: "2026-03-15",
    href: "/brand/batch-report-sample.html"
  },
];

export default function CertificationsPage() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 border-l-4 border-rio-navy pl-8" data-reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-rio-navy/50">
            Rigueur & Conformite
          </p>
          <h1 className="mt-4 font-serif text-4xl text-rio-navy sm:text-5xl lg:text-6xl">
            Standards Verifies
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-rio-navy/70">
            La purete de nos produits est validee par des protocoles de controle stricts. 
            Nous garantissons une tracabilite totale de la lagune a l'export.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.type}
              className="group relative flex flex-col justify-between rounded-none border border-rio-navy/10 bg-dakhla-sand/10 p-8 transition-all hover:bg-white hover:shadow-2xl"
              data-reveal
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-10 w-10 rounded-full border border-rio-navy/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-rio-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rio-navy/40">Valide : {cert.date}</span>
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-rio-navy">{cert.label}</h3>
                <p className="mb-8 text-sm leading-relaxed text-rio-navy/60">
                  {cert.description}
                </p>
              </div>
              
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("view_certification", {
                    certificate_type: cert.type,
                  })
                }
                className="flex w-full items-center justify-center border-2 border-rio-navy py-3 text-[10px] font-black uppercase tracking-[0.2em] text-rio-navy transition-all hover:bg-rio-navy hover:text-dakhla-sand"
              >
                Consulter le document
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-none border-t border-rio-navy/10 pt-12 text-center" data-reveal>
          <p className="mx-auto max-w-xl text-sm italic text-rio-navy/50">
            "La confiance n'exclut pas le controle. Chaque lot est soumis a une double verification interne et externe avant expedition."
          </p>
        </div>
      </div>
    </section>
  );
}
