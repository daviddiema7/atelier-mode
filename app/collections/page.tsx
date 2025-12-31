"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Collections() {
  // 👇 METS LE VRAI NUMÉRO ICI
  const whatsappNumber = "243897415153"; 
  
  // On génère les mêmes 15 créations que sur l'accueil
  const creations = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? `Robe Wax Modèle N°${i+1}` : `Ensemble Bazin N°${i+1}`,
    category: i % 3 === 0 ? "Pièce Unique" : "Sur Mesure",
    // On s'assure que ce sont les mêmes fichiers images
    image: `/images/creation${i + 1}.jpg`
  }));

  return (
    <main className="min-h-screen bg-cream text-charcoal font-sans">
      
      {/* HEADER SIMPLIFIÉ (Sticky pour rester accessible) */}
      <nav className="p-6 md:p-8 max-w-7xl mx-auto flex justify-between items-center sticky top-0 bg-cream/95 backdrop-blur-sm z-50 transition-all">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-terracotta transition group">
          <div className="w-8 h-8 rounded-full border border-sand flex items-center justify-center group-hover:border-terracotta transition">
             <ArrowLeft size={14} />
          </div>
          Retour Accueil
        </Link>
        
        {/* Rappel discret de la marque */}
        <span className="signature-force text-3xl text-terracotta hidden md:block">Fudkas.</span>
      </nav>

      {/* TITRE DE LA PAGE */}
      <section className="text-center py-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-ochre text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Catalogue 2025</span>
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Collection Complète</h1>
          <div className="w-24 h-1 bg-terracotta mx-auto rounded-full"></div>
          <p className="text-charcoal/60 mt-6 max-w-lg mx-auto leading-relaxed">
            Parcourez l'ensemble de mes créations. Cliquez sur le bouton "Commander" d'une tenue pour réserver votre modèle sur WhatsApp.
          </p>
        </motion.div>
      </section>

      {/* GRILLE DES CRÉATIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
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
              {/* Image Container */}
              <div className="h-[500px] overflow-hidden relative mb-5 bg-sand rounded-sm shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                
                {/* --- BOUTON COMMANDER (CORRIGÉ MOBILE) --- */}
                <motion.a 
                  whileTap={{ scale: 0.9 }}
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour Charly, je souhaite commander ce modèle vu dans la collection : "${item.title}"`)}`}
                  target="_blank"
                  className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm text-charcoal pl-5 pr-6 py-3 rounded-full flex items-center gap-2 shadow-xl 
                  hover:bg-[#25D366] hover:text-white 
                  active:bg-[#25D366] active:text-white
                  transition duration-300 
                  opacity-100 translate-y-0 
                  md:opacity-0 md:translate-y-4 
                  md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  <ShoppingBag size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Commander</span>
                </motion.a>
              </div>
              
              {/* Infos */}
              <div className="text-center">
                <p className="text-ochre text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{item.category}</p>
                <h3 className="text-2xl font-serif text-charcoal group-hover:text-terracotta transition duration-300">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="bg-charcoal text-sand py-12 text-center border-t-4 border-ochre">
        <p className="signature-force text-3xl text-cream mb-2">Fudkas Couture</p>
        <p className="text-xs opacity-40 uppercase tracking-widest">Fait main à Paris</p>
      </footer>
    </main>
  );
}