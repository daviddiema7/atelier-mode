"use client";

import { motion } from "framer-motion";
import { Scissors, Instagram, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  const creations = [
    { 
      id: 1, 
      title: "Robe Bohème Soie", 
      category: "Pièce Unique", 
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "Ensemble Lin Naturel", 
      category: "Création Été", 
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      title: "Manteau Laine Bouillie", 
      category: "Automne / Hiver", 
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-charcoal font-sans selection:bg-terracotta selection:text-white">
      
      {/* --- HEADER MODIFIÉ --- */}
      <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col">
          {/* On utilise la classe "signature-force" qu'on vient de créer */}
          <span className="signature-force text-6xl md:text-8xl text-terracotta transform -rotate-2 origin-left leading-none pt-4 block">
            Fudkas Couture
          </span>
          <span className="text-xs text-sage font-sans font-bold tracking-[0.3em] uppercase mt-4 ml-4">
            Par Charly
          </span>
        </div>
        
        <button className="hidden md:flex items-center gap-2 border border-sand px-6 py-2 rounded-full text-sm font-medium text-charcoal hover:border-terracotta hover:text-terracotta transition duration-300">
          <Mail size={16} /> Me Contacter
        </button>
      </nav>
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texte */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sand/50 text-terracotta rounded-full text-xs font-bold tracking-wider mb-8">
            <Scissors size={14} /> 
            ATELIER ARTISANAL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 text-charcoal">
            Le tissu a <br/>
            son <span className="text-terracotta italic">langage.</span>
          </h1>
          
          <p className="text-charcoal/70 text-lg leading-relaxed max-w-md mb-10">
            Chez <strong>Fudkas Couture</strong>, je transforme la matière brute en élégance. Des créations pensées pour durer, respectueuses de votre style et de votre confort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-terracotta-dark transition duration-300 shadow-lg shadow-terracotta/20 flex items-center justify-center gap-2">
              Découvrir la collection <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium border border-sand hover:bg-white transition text-charcoal">
              <Instagram size={20} /> Instagram
            </button>
          </div>
        </motion.div>

        {/* Image Hero avec forme organique */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 relative h-[550px] w-full"
        >
          {/* Cercle décoratif arrière */}
          <div className="absolute top-10 -right-10 w-4/5 h-4/5 bg-sage/20 rounded-full -z-10 blur-3xl" />
          
          {/* Image principale en forme d'arche */}
          <div className="relative w-full h-full rounded-t-[200px] rounded-b-[20px] overflow-hidden border-[8px] border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=1000&auto=format&fit=crop" 
              alt="Couturière au travail" 
              className="object-cover w-full h-full hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
        </motion.div>
      </section>

      {/* --- SECTION VALEURS --- */}
      <section className="bg-white py-20 border-t border-sand/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-lg font-serif text-terracotta mb-4 italic">Ma philosophie</h3>
          <p className="text-2xl md:text-3xl leading-relaxed text-charcoal font-light">
            "La couture n'est pas qu'une question de fil et d'aiguille. C'est l'art de donner confiance à celle qui porte le vêtement. Chaque pièce Fudkas est une promesse de qualité."
          </p>
          <div className="mt-8">
            <span className="font-bold text-sm tracking-widest uppercase border-b border-terracotta pb-1">Charly</span>
          </div>
        </div>
      </section>

      {/* --- GALERIE --- */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-charcoal mb-2">Créations récentes</h2>
              <p className="text-sage">Explorez les dernières pièces sorties de l'atelier.</p>
            </div>
            <a href="#" className="hidden md:block text-terracotta hover:text-terracotta-dark underline decoration-1 underline-offset-4 transition">Tout voir</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creations.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="h-[400px] overflow-hidden rounded-2xl relative mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <span className="bg-white/90 text-charcoal px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">Voir le détail</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif text-charcoal group-hover:text-terracotta transition">{item.title}</h3>
                    <p className="text-sage text-sm mt-1">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-charcoal text-cream py-16">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left md:flex justify-between items-center">
          <div>
            <p className="font-serif text-3xl mb-2">Fudkas.</p>
            <p className="text-white/50 text-sm max-w-xs">Couture sur mesure & Retouches.<br/>Fait main à l'atelier.</p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col md:flex-row gap-8 text-sm text-white/70">
            <a href="#" className="hover:text-terracotta transition">Mentions Légales</a>
            <a href="#" className="hover:text-terracotta transition">Instagram</a>
            <a href="#" className="hover:text-terracotta transition">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}