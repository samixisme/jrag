import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-rio-navy/10 bg-white p-8 shadow-lg">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-rio-navy/60" data-reveal>
          Contact commercial
        </p>
        <h1 className="mt-3 font-serif text-3xl text-rio-navy" data-reveal>
          Parlons de votre approvisionnement
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-rio-navy/75" data-reveal>
          Pour une premiere qualification rapide, utilisez notre formulaire de
          demande de devis. Vous recevrez une reponse sous un jour ouvre.
        </p>
        <Link
          href="/b2b/request-quote"
          className="mt-6 inline-block rounded-lg bg-living-orange px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:brightness-110 active:translate-y-[1px]"
          data-reveal
        >
          Ouvrir le formulaire devis
        </Link>
      </div>
    </section>
  );
}
