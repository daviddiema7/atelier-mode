import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// 1. On charge les polices Google
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair', display: 'swap' });
const lato = Lato({ subsets: ["latin"], weight: ['300', '400', '700'], variable: '--font-lato', display: 'swap' });

// 2. On charge TA police locale
// On l'appelle simplement "customFont" pour éviter les confusions de noms
const customFont = localFont({
  src: './fonts/Gabriela.ttf',  // Assure-toi que c'est bien ce nom de fichier exact
  variable: '--font-custom',    // On donne un nom de variable simple
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fudkas Couture",
  description: "Atelier de couture par Charly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* 3. On injecte la variable ici */}
      <body className={`${playfair.variable} ${lato.variable} ${customFont.variable} font-sans antialiased bg-cream text-charcoal`}>
        {children}
      </body>
    </html>
  );
}