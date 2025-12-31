"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Scissors, ArrowRight, Phone, ChevronLeft, ChevronRight, ShoppingBag, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Ton numéro (format international sans +)
  const whatsappNumber = "243897415153"; 
  const baseWhatsappLink = `https://wa.me/${whatsappNumber}`;

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const creations = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? `Robe Wax Modèle N°${i+1}` : `Ensemble Bazin N°${i+1}`,
    category: i % 3 === 0 ? "Pièce Unique" : "Sur Mesure",
    image: `/images/creation${i + 1}.jpg` 
  }));

  return (
    <main className="min-h-screen bg-cream text-charcoal font-sans selection:bg-terracotta selection:text-white">
      
      {/* HEADER */}
      <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="signature-force text-6xl md:text-8xl text-terracotta transform -rotate-2 origin-left leading-none pt-4 block">
            Fudkas Couture
          </span>
          <span className="text-[10px] text-ochre font-sans font-bold tracking-[0.3em] uppercase mt-4 ml-4 flex items-center gap-2">
             <span className="w-8 h-[1px] bg-ochre"></span> Par Charly
          </span>
        </div>
        <a href={baseWhatsappLink} target="_blank" className="hidden md:flex items-center gap-2 border border-sand px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition duration-300">
          <Phone size={14} /> WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sand/30 text-terracotta rounded-none border-l-2 border-ochre text-xs font-bold tracking-wider mb-8">
            <Scissors size={14} /> CRÉATION KINSHASA
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 text-charcoal">
            L'élégance a <br/> une <span className="text-terracotta italic relative">âme.</span>
          </h1>
          <p className="text-charcoal/70 text-lg leading-relaxed max-w-md mb-10">
            Entre tradition et modernité, <strong>Fudkas Couture</strong> sublime les tissus d'exception.
          </p>
         <div className="flex flex-col sm:flex-row gap-4">
            {/* On enveloppe le Link dans motion.div pour l'effet rebond */}
            <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
              <Link 
                href="/collections" 
                className="bg-charcoal text-white px-8 py-4 rounded-none border-b-4 border-ochre font-medium 
                hover:bg-terracotta 
                active:bg-terracotta active:border-terracotta  
                transition duration-300 flex items-center justify-center gap-2"
              >
                Voir toute la collection <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="order-1 md:order-2 relative h-[500px] md:h-[600px] w-full">
          <div className="relative w-full h-full overflow-hidden shadow-2xl bg-sand">
            <img src="/images/accueil.jpg" alt="Création Principale" className="object-cover w-full h-full hover:scale-105 transition duration-1000 ease-in-out" />
          </div>
        </motion.div>
      </section>

      {/* CARROUSEL */}
      <section className="bg-cream py-20 border-t border-sand/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-2">Aperçu Collection</h2>
              <p className="text-charcoal/60 text-sm">Coup de cœur ? Commandez directement.</p>
            </div>
            <div className="flex gap-2">
              <motion.button whileTap={{ scale: 0.8 }} onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-sand flex items-center justify-center text-charcoal hover:bg-ochre hover:text-white hover:border-ochre active:bg-ochre active:text-white transition duration-300">
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button whileTap={{ scale: 0.8 }} onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-sand flex items-center justify-center text-charcoal hover:bg-ochre hover:text-white hover:border-ochre active:bg-ochre active:text-white transition duration-300">
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth">
            {creations.map((item) => (
              <motion.div key={item.id} className="snap-center shrink-0 w-[280px] md:w-[350px] group relative">
                <div className="h-[400px] md:h-[500px] overflow-hidden relative mb-4 bg-sand shadow-sm rounded-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                  {/* --- BOUTON COMMANDER MOBILE OPTIMISÉ --- */}
                  <motion.a 
                    whileTap={{ scale: 0.9 }} // Effet rebond au clic
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour Charly, je souhaite commander ce modèle : "${item.title}"`)}`}
                    target="_blank"
                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal pl-4 pr-5 py-3 rounded-full flex items-center gap-2 shadow-xl 
                    hover:bg-[#25D366] hover:text-white 
                    active:bg-[#25D366] active:text-white 
                    transition duration-300 z-10 
                    opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                  >
                    <ShoppingBag size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Commander</span>
                  </motion.a>
                </div>
                <div className="border-l-2 border-ochre pl-4 pr-4">
                  <h3 className="text-lg font-serif text-charcoal">{item.title}</h3>
                  <p className="text-charcoal/50 text-xs uppercase tracking-wider mt-1">{item.category}</p>
                </div>
              </motion.div>
            ))}
            <div className="snap-center shrink-0 w-[200px] h-[400px] md:h-[500px] flex items-center justify-center">
               <Link href="/collections" className="group text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-terracotta text-terracotta flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta group-hover:text-white transition">
                    <ArrowRight size={24} />
                  </div>
                  <span className="text-terracotta font-bold text-sm tracking-widest uppercase border-b border-transparent group-hover:border-terracotta pb-1 transition">Tout voir</span>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="bg-sand/30 py-20 border-t border-ochre/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-charcoal mb-4">Votre tenue, étape par étape</h2>
            <p className="text-charcoal/60">Commander du sur-mesure n'a jamais été aussi simple.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-ochre/30 -z-10"></div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-ochre mb-6 shadow-lg group-hover:scale-110 transition duration-300">
                <span className="font-serif text-3xl text-terracotta">1</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Choisissez & Contactez</h3>
              <p className="text-sm text-charcoal/70 max-w-xs leading-relaxed">Repérez un modèle ou envoyez votre propre inspiration via WhatsApp.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-ochre mb-6 shadow-lg group-hover:scale-110 transition duration-300 delay-100">
                <span className="font-serif text-3xl text-terracotta">2</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Mesures & Confection</h3>
              <p className="text-sm text-charcoal/70 max-w-xs leading-relaxed">Je prends vos mesures et je réalise votre pièce unique avec soin.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-ochre mb-6 shadow-lg group-hover:scale-110 transition duration-300 delay-200">
                <span className="font-serif text-3xl text-terracotta">3</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Essayage & Livraison</h3>
              <p className="text-sm text-charcoal/70 max-w-xs leading-relaxed">Venez essayer votre tenue à Kinshasa. Elle est prête à être portée !</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION ATELIER & CARTE (CORRIGÉE) --- */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Info Atelier */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">L'Atelier</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-terracotta shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal uppercase tracking-widest text-xs mb-1">Adresse</h4>
                  <p className="text-lg leading-relaxed text-charcoal/80">
                    13 Avenue Petro-Congo,<br/>
                    Kinshasa, RDC
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-terracotta shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal uppercase tracking-widest text-xs mb-1">Horaires</h4>
                  <p className="text-charcoal/70">
                    Lundi - Samedi : 09h00 - 18h00<br/>
                    <span className="text-ochre font-medium">Sur rendez-vous uniquement</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-sand/50">
               <p className="italic text-charcoal/50 font-serif">
                 "Un lieu de création où chaque tissu raconte une histoire."
               </p>
            </div>
          </div>

          {/* LA CARTE */}
          <div className="h-[400px] w-full relative rounded-sm overflow-hidden border-2 border-sand shadow-lg bg-sand/20">
            {/* 1. J'ai mis le VRAI lien vers l'avenue Petro-Congo.
               2. J'ai changé le filtre : grayscale(85%) au lieu de 100%.
                  Cela laisse passer un peu de couleur (le rouge du point) tout en gardant l'aspect "vieux papier".
            */}
            <iframe 
              src="https://maps.google.com/maps?q=13+Avenue+Petro-Congo,+Kinshasa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="hover:filter-none transition duration-700 ease-in-out"
            ></iframe>
            
            <div className="absolute inset-0 border-[10px] border-white/30 pointer-events-none"></div>
          </div>

        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-charcoal text-sand py-16 border-t-4 border-ochre">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <span className="signature-force text-4xl text-cream block mb-4">Fudkas.</span>
            <p className="text-white/60 text-sm leading-relaxed">Atelier de couture Afro-Chic.<br/>Kinshasa, RDC</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h4>
            <a href={baseWhatsappLink} className="hover:text-[#25D366] transition flex items-center gap-2 text-lg">
              <Phone size={20}/> <span className="underline decoration-1 underline-offset-4">Discuter sur WhatsApp</span>
            </a>
          </div>
          <div className="text-white/20 text-xs md:text-right flex items-end justify-center md:justify-end">
            © 2025 Fudkas Couture.
          </div>
        </div>
      </footer>
    </main>
  );
}