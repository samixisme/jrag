import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col md:flex-row overflow-hidden font-sans">
      {/* Centered Logo */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl hidden md:block">
        <Image src="/logo.png" alt="JRAG Logo" width={120} height={120} className="object-contain" />
      </div>
      
      {/* Mobile Logo */}
      <div className="absolute left-1/2 top-8 z-20 -translate-x-1/2 md:hidden">
        <Image src="/logo.png" alt="JRAG Logo" width={80} height={80} className="object-contain" />
      </div>

      {/* Left Panel: B2B (Rigor & Trust) */}
      <Link 
        href="/b2b"
        className="group relative flex h-1/2 w-full flex-col items-center justify-center bg-rio-navy transition-all duration-700 hover:w-full md:h-full md:w-1/2 md:hover:w-[60%]"
      >
        <div className="z-10 text-center px-8">
          <h2 className="mb-2 font-serif text-2xl tracking-widest text-dakhla-sand/60 uppercase">Professionnels</h2>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Accès Pro</h1>
          <p className="max-w-md text-dakhla-sand/80 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
            Rigoureux par Nature. Pur par Design. <br />
            Explorez notre terroir d'exception et sécurisez votre approvisionnement.
          </p>
          <div className="mt-8 inline-block border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors group-hover:bg-white group-hover:text-rio-navy">
            Entrer
          </div>
        </div>
        {/* Background Overlay for effect */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
      </Link>

      {/* Right Panel: B2C (Noble & Life) */}
      <Link 
        href="/b2c/shop"
        className="group relative flex h-1/2 w-full flex-col items-center justify-center bg-living-orange transition-all duration-700 hover:w-full md:h-full md:w-1/2 md:hover:w-[60%]"
      >
        <div className="z-10 text-center px-8">
          <h2 className="mb-2 font-serif text-2xl tracking-widest text-rio-navy/60 uppercase">Particuliers</h2>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Boutique</h1>
          <p className="max-w-md text-white/90 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
            Le plus pur trésor de la lagune. <br />
            Une expérience sensorielle unique, du désert à votre table.
          </p>
          <div className="mt-8 inline-block border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors group-hover:bg-white group-hover:text-living-orange">
            Commander
          </div>
        </div>
        {/* Background Overlay for effect */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
      </Link>
    </div>
  );
}
