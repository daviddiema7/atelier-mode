"use client";

import { motion } from "framer-motion";
import { Scissors, Instagram, Mail, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  // CONFIGURATION DES IMAGES LOCALES
  // Assure-toi que les fichiers sont bien dans le dossier "public/images"
  const creations = [
    { 
      id: 1, 
      title: "Robe Cocktail Wax", 
      category: "Pièce Unique", 
      // Le chemin commence par /images/... (Next.js sait que c'est dans 'public')
      image: "/images/creation1.jpg" 
    },
    { 
      id: 2, 
      title: "Ensemble Soie & Bazin", 
      category: "Collection 'Racines'", 
      image: "/images/creation2.jpg" 
    },
    { 
      id: 3, 
      title: "Veste Kimono Moderne", 
      category: "Prêt-à-porter", 
      image: "/images/creation3.jpg" 
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-charcoal font-sans selection:bg-terracotta selection:text-white">
      
      {/* --- HEADER --- */}
      <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="signature-force text-6xl md:text-8xl text-terracotta transform -rotate-2 origin-left leading-none pt-4 block">
            Fudkas Couture
          </span>
          <span className="text-[10px] text-ochre font-sans font-bold tracking-[0.3em] uppercase mt-4 ml-4 flex items-center gap-2">
             <span className="w-8 h-[1px] bg-ochre"></span> Par Charly
          </span>
        </div>
        
        <button className="hidden md:flex items-center gap-2 border border-sand px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-terracotta hover:text-white hover:border-terracotta transition duration-300">
          <Mail size={14} /> Prendre RDV
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sand/30 text-terracotta rounded-none border-l-2 border-ochre text-xs font-bold tracking-wider mb-8">
            <Scissors size={14} /> 
            CRÉATION AFRO-CONTEMPORAINE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 text-charcoal">
            L'élégance a <br/>
            une <span className="text-terracotta italic relative">
              âme.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-ochre" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-charcoal/70 text-lg leading-relaxed max-w-md mb-10">
            Entre tradition et modernité, <strong>Fudkas Couture</strong> sublime les tissus d'exception. Des coupes épurées, rehaussées par la chaleur de l'Afrique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-charcoal text-white px-8 py-4 rounded-none border-b-4 border-ochre font-medium hover:bg-terracotta transition duration-300 flex items-center justify-center gap-2">
              Voir la collection <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 font-medium border border-sand hover:bg-white transition text-charcoal">
              <Instagram size={20} /> Instagram
            </button>
          </div>
        </motion.div>

        {/* Image Hero Principale */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 relative h-[600px] w-full"
        >
          <div className="absolute top-10 -right-6 w-full h-full border-2 border-ochre/30 -z-10" />
          
          <div className="relative w-full h-full overflow-hidden shadow-2xl bg-sand">
            {/* C'est ici qu'on appelle ta photo principale */}
            <img 
              src="/images/accueil.jpg" 
              alt="Création Fudkas Principale" 
              className="object-cover w-full h-full hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
        </motion.div>
      </section>

      {/* --- SECTION PHILOSOPHIE --- */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 text-[200px] opacity-5 text-sand font-serif pointer-events-none">"</div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h3 className="text-sm font-bold tracking-[0.2em] text-ochre mb-6 uppercase">Le Savoir-Faire</h3>
          <p className="text-2xl md:text-4xl leading-relaxed text-charcoal font-serif">
            "Je ne couds pas seulement du tissu, je sculpte une identité. Du Wax vibrant au Bazin noble, chaque vêtement est une célébration de la femme."
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-16 h-1 bg-terracotta"></div>
          </div>
        </div>
      </section>

      {/* --- GALERIE --- */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-serif text-charcoal mb-2">Créations Uniques</h2>
              <p className="text-charcoal/60">Explorez les dernières pièces sorties de l'atelier.</p>
            </div>
            <a href="#" className="text-terracotta font-bold text-sm tracking-widest border-b border-terracotta pb-1 hover:text-charcoal hover:border-charcoal transition">TOUT VOIR</a>
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
                <div className="h-[450px] overflow-hidden relative mb-6 bg-sand">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                
                <div className="flex justify-between items-center border-t border-sand pt-4">
                  <h3 className="text-xl font-serif text-charcoal">{item.title}</h3>
                  <span className="text-ochre font-bold text-lg">+</span>
                </div>
                <p className="text-charcoal/50 text-xs uppercase tracking-wider mt-1">{item.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-charcoal text-sand py-20 border-t-4 border-ochre">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div>
            <span className="signature-force text-4xl text-cream block mb-4">Fudkas.</span>
            <p className="text-white/60 text-sm leading-relaxed">
              Atelier de couture Afro-Chic.<br/>
              Pièces uniques & Sur-mesure.<br/>
              Fait main avec passion.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h4>
            <a href="#" className="hover:text-ochre transition flex items-center gap-2"><Mail size={16}/> contact@fudkas.com</a>
            <span className="flex items-center gap-2"><MapPin size={16}/> Paris / Banlieue</span>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Suivez-moi</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-ochre hover:border-ochre hover:text-charcoal transition cursor-pointer">
                <Instagram size={18} />
              </div>
            </div>
          </div>

        </div>
        <div className="text-center mt-16 text-white/20 text-xs">
          © 2025 Fudkas Couture. Tous droits réservés.
        </div>
      </footer>

    </main>
  );
}