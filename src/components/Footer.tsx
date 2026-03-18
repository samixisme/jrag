"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="bg-rio-navy text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-lg inline-block">
              <Image src="/logo.png" alt="JRAG Logo" width={80} height={80} />
            </div>
            <p className="text-dakhla-sand/70 text-sm leading-relaxed max-w-xs">
              Jaimetchoujena Rio Aqua Group. <br />
              L'excellence de la conchyliculture marocaine. <br />
              Rigoureux par Nature. Pur par Design.
            </p>
          </div>

          {/* B2B Links */}
          <div>
            <h3 className="text-living-orange font-bold uppercase tracking-widest text-sm mb-6">Professionnels</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/b2b/products" className="hover:text-white transition-colors">Nos Produits</Link></li>
              <li><Link href="/b2b/history" className="hover:text-white transition-colors">Notre Histoire</Link></li>
              <li><Link href="/b2b/certifications" className="hover:text-white transition-colors">Qualité & Certifications</Link></li>
              <li><Link href="/b2b/contact" className="hover:text-white transition-colors">Devenir Partenaire</Link></li>
            </ul>
          </div>

          {/* B2C Links */}
          <div>
            <h3 className="text-living-orange font-bold uppercase tracking-widest text-sm mb-6">Boutique</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/b2c/shop" className="hover:text-white transition-colors">Nos Huîtres</Link></li>
              <li><Link href="/b2c/recipes" className="hover:text-white transition-colors">Recettes de Chefs</Link></li>
              <li><Link href="/shared/impact" className="hover:text-white transition-colors">Impact & RSE</Link></li>
              <li><Link href="/shared/faq" className="hover:text-white transition-colors">Aide & FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-living-orange font-bold uppercase tracking-widest text-sm mb-6">Informations</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/legal/mentions" className="hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link href="/legal/cgv" className="hover:text-white transition-colors">CGV / CGU</Link></li>
              <li><Link href="/shared/blog" className="hover:text-white transition-colors">Actualités</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-dakhla-sand/40 tracking-widest uppercase">
          <p>© 2026 Jaimetchoujena Rio Aqua Group. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Dakhla, Maroc</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
