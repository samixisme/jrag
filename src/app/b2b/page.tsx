import Link from "next/link";

export default function B2BPage() {
  return (
    <section className="bg-rio-navy px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-3 text-[11px] font-black uppercase tracking-[0.3em] text-dakhla-sand/60"
          data-reveal
        >
          Rigueur & Excellence B2B
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl" data-reveal>
          L'Integrite au Service de la Gastronomie Mondiale
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-dakhla-sand/80" data-reveal>
          Au Jaimetchoujena Rio Aqua Group, nous cultivons une alliance rare entre la precision scientifique et l'heritage noble du terroir de Dakhla. 
          De la purification controlee a la tracabilite numerique, chaque batch est un gage de securite absolue pour vos clients les plus exigeants.
        </p>

        <div className="mt-10 flex flex-wrap gap-4" data-reveal>
          <Link
            href="/b2b/request-quote"
            className="rounded-none bg-living-orange px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:brightness-110 active:translate-y-[1px]"
          >
            Securiser mon allocation
          </Link>
          <Link
            href="/b2b/certifications"
            className="rounded-none border-2 border-white/40 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-rio-navy"
          >
            Voir les preuves de rigueur
          </Link>
        </div>
      </div>
    </section>
  );
}
