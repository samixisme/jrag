import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import NewsletterPopup from "@/components/NewsletterPopup";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Jaimetchoujena Rio Aqua Group (JRAG) | Le plus pur tresor de la lagune",
  description:
    "Conchyliculture premium a Dakhla. Rigueur, noblesse et transparence pour les professionnels et les particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <MotionProvider>
          <main className="flex-grow">{children}</main>
        </MotionProvider>
        <NewsletterPopup />
        <Footer />
      </body>
    </html>
  );
}
