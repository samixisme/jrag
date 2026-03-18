export default function SitemapPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-dakhla-sand/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-rio-navy mb-12">Plan du Site</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-rio-navy mb-6 border-b border-rio-navy/10 pb-2 uppercase tracking-widest">Professionnels (B2B)</h2>
            <ul className="space-y-4 text-rio-navy/70">
              <li><a href="/b2b" className="hover:text-heritage-blue">Accueil Pro</a></li>
              <li><a href="/b2b/history" className="hover:text-heritage-blue">Notre Histoire</a></li>
              <li><a href="/b2b/products" className="hover:text-heritage-blue">Nos Produits</a></li>
              <li><a href="/b2b/certifications" className="hover:text-heritage-blue">Certifications</a></li>
              <li><a href="/b2b/contact" className="hover:text-heritage-blue">Contact Pro</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-rio-navy mb-6 border-b border-rio-navy/10 pb-2 uppercase tracking-widest">Particuliers (B2C)</h2>
            <ul className="space-y-4 text-rio-navy/70">
              <li><a href="/b2c/shop" className="hover:text-heritage-blue">Boutique en Ligne</a></li>
              <li><a href="/b2c/account" className="hover:text-heritage-blue">Mon Compte</a></li>
              <li><a href="/b2c/recipes" className="hover:text-heritage-blue">Recettes</a></li>
              <li><a href="/b2c/cart" className="hover:text-heritage-blue">Panier</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-rio-navy mb-6 border-b border-rio-navy/10 pb-2 uppercase tracking-widest">Ressources & Impact</h2>
            <ul className="space-y-4 text-rio-navy/70">
              <li><a href="/shared/impact" className="hover:text-heritage-blue">Impact & RSE</a></li>
              <li><a href="/shared/blog" className="hover:text-heritage-blue">Blog & Actualités</a></li>
              <li><a href="/shared/gallery" className="hover:text-heritage-blue">Galerie</a></li>
              <li><a href="/shared/faq" className="hover:text-heritage-blue">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-rio-navy mb-6 border-b border-rio-navy/10 pb-2 uppercase tracking-widest">Informations Légales</h2>
            <ul className="space-y-4 text-rio-navy/70">
              <li><a href="/legal/mentions" className="hover:text-heritage-blue">Mentions Légales</a></li>
              <li><a href="/legal/privacy" className="hover:text-heritage-blue">Confidentialité</a></li>
              <li><a href="/legal/cgv" className="hover:text-heritage-blue">CGV / CGU</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
