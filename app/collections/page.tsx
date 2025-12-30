"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone, MapPin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Collections() {
  const whatsappLink = "https://wa.me/33600000000"; // Ton numéro ici

  // On simule 15 créations pour la page complète
  const creations = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? "Robe Wax & Soie" : "Ensemble Bazin Riche",
    category: i % 3 === 0 ? "Pièce Unique" : "Sur Mesure",
    image: i % 3 === 0 ? "/images/creation1.jpg" : i % 3 === 1 ? "/images/creation2.jpg" : "/images/creation3.jpg"
  }));

  return (
    <main className="min-h-screen bg-cream text-charcoal font-sans">
      
      {/* HEADER SIMPLIFIÉ */}
      <nav className="p-6 md:p-8 max-w-7xl mx-auto flex justify-between items-center sticky top-0 bg-cream/95 backdrop-blur-sm z-50">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-terracotta transition">
          <ArrowLeft size={18} /> Retour
        </Link>
        <span className="signature-force text-4xl text-terracotta">Fudkas.</span>
      </nav>

      {/* TITRE */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-4">La Collection Complète</h1>
        <div className="w-16 h-1 bg-ochre mx-auto"></div>
        <p className="text-charcoal/60 mt-4 max-w-lg mx-auto">
          Découvrez l'ensemble de mes créations. Chaque pièce est unique et peut être adaptée à vos envies.
        </p>
      </section>

      {/* GRILLE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {creations.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-[500px] overflow-hidden relative mb-4 bg-sand rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                {/* Overlay Contact */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <a href={whatsappLink} className="bg-white text-charcoal px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-terracotta hover:text-white transition">
                    Commander
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-ochre text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-2xl font-serif text-charcoal">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="bg-charcoal text-sand py-12 text-center border-t-4 border-ochre">
        <p className="text-sm opacity-50">© 2025 Fudkas Couture</p>
      </footer>
    </main>
  );
}