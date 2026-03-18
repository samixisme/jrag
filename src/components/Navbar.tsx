"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const b2bLinks = [
  { name: "Histoire", href: "/b2b/history" },
  { name: "Produits", href: "/b2b/products" },
  { name: "Certifications", href: "/b2b/certifications" },
  { name: "Contact", href: "/b2b/contact" },
];

const b2cLinks = [
  { name: "Boutique", href: "/b2c/shop" },
  { name: "Mon Compte", href: "/b2c/account" },
  { name: "Recettes", href: "/b2c/recipes" },
  { name: "Panier", href: "/b2c/cart" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Determine if we are in B2B, B2C or Home
  const isB2B = pathname.startsWith("/b2b");
  const isB2C = pathname.startsWith("/b2c");
  const isHome = pathname === "/";

  if (isHome) return null; // Don't show navbar on gateway page

  const links = isB2B ? b2bLinks : b2cLinks;
  const themeColor = isB2B ? "bg-rio-navy" : "bg-living-orange";
  const hoverColor = isB2B ? "hover:text-living-orange" : "hover:text-rio-navy";

  return (
    <nav className={`sticky top-0 z-50 w-full ${themeColor} text-white shadow-md`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center bg-white p-2 rounded-b-xl shadow-lg">
            <Link href="/">
              <Image src="/logo.png" alt="JRAG Logo" width={60} height={60} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-sans font-medium uppercase tracking-widest text-sm">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 ${hoverColor} ${
                    pathname === link.href ? "text-dakhla-sand" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Path Switcher */}
          <div className="hidden md:block">
            <Link
              href={isB2B ? "/b2c/shop" : "/b2b"}
              className="rounded-full border-2 border-white/30 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-black"
            >
              {isB2B ? "Accès Particuliers" : "Accès Professionnels"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-rio-navy p-4 space-y-4 shadow-xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={isB2B ? "/b2c/shop" : "/b2b"}
            className={`block w-full text-center px-4 py-3 rounded-lg font-bold text-white ${isB2B ? "bg-living-orange" : "bg-rio-navy"}`}
            onClick={() => setIsOpen(false)}
          >
            {isB2B ? "Accès Particuliers" : "Accès Professionnels"}
          </Link>
        </div>
      )}
    </nav>
  );
}
