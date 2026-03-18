"use client";

import { trackEvent } from "@/lib/analytics";

export default function TraceabilityPage() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 border-l-4 border-rio-navy pl-8" data-reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-rio-navy/50">
            Audit & Evidence
          </p>
          <h1 className="mt-4 font-serif text-4xl text-rio-navy sm:text-5xl lg:text-6xl">
            L'Intégrité de la Donnée
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-rio-navy/70">
            La traçabilité n'est pas une option, c'est une preuve. Chez Jaimetchoujena Rio Aqua Group, 
            chaque lot est accompagné d'un dossier numérique complet, de la récolte à l'expédition.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <h2 className="font-serif text-3xl text-rio-navy mb-6">Le Passeport de Batch</h2>
            <p className="text-rio-navy/70 mb-6 leading-relaxed">
              Pour les responsables achats et qualité, l'incertitude est le plus grand risque. 
              Notre système de traçabilité numérique élimine les zones d'ombre en fournissant un 
              historique vérifiable pour chaque expédition.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Logs numériques de la chaîne du froid",
                "Certificats d'analyse ISO TS 16649-3 par lot",
                "Horodatage précis des cycles de purification (48h)",
                "Données environnementales de la lagune de Dakhla"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-rio-navy">
                  <div className="h-1.5 w-1.5 rounded-full bg-living-orange" />
                  {item}
                </li>
              ))}
            </ul>
            
            <a
              href="/brand/batch-report-sample.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("view_traceability_demo", { type: "batch_report_sample" })}
              className="inline-block bg-living-orange px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:brightness-110"
            >
              Consulter un rapport de lot type
            </a>
          </div>
          
          <div className="relative aspect-[4/5] bg-rio-navy/5 p-8 border border-rio-navy/10 overflow-hidden" data-reveal>
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center" />
            <div className="relative h-full border border-rio-navy/20 bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-rio-navy/10 pb-4">
                <div className="h-6 w-20 bg-rio-navy/10" />
                <div className="h-4 w-12 bg-living-orange/20" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-rio-navy/5" />
                <div className="h-3 w-3/4 bg-rio-navy/5" />
                <div className="h-20 w-full bg-rio-navy/5" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-12 w-full bg-rio-navy/5" />
                  <div className="h-12 w-full bg-rio-navy/5" />
                </div>
                <div className="h-3 w-1/2 bg-rio-navy/5" />
              </div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="h-10 w-full border-2 border-rio-navy/20" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-rio-navy/10 pt-16" data-reveal>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-living-orange mb-4">Rigueur</h3>
              <p className="text-sm text-rio-navy/60">Une discipline de mesure systématique à chaque point de contrôle critique (CCP).</p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-living-orange mb-4">Evidence</h3>
              <p className="text-sm text-rio-navy/60">Pas de marketing sans data. Chaque affirmation est étayée par un enregistrement numérique.</p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-living-orange mb-4">Confiance</h3>
              <p className="text-sm text-rio-navy/60">La réduction de l'incertitude biologique pour une tranquillité d'esprit opérationnelle.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
