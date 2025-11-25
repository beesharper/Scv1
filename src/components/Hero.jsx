import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const products = [
    'Personalized Gifts', 'T-Shirts', 'Hoodies', 'Wedding Favors',
    'Drinkware', 'Event Decor', 'Keychains', 'Luggage Tags'
  ];

  const colors = [
    'bg-dusty-mauve text-white border-none',
    'bg-butter-yellow text-charcoal-black border-none',
    'bg-rose-quartz text-charcoal-black border-none',
    'bg-dusty-coral text-white border-none'
  ];

  // Assign colors to the original set first to ensure consistency
  const coloredProducts = products.map((item, index) => ({
    text: item,
    colorClass: colors[index % colors.length]
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % coloredProducts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [coloredProducts.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#FBF9F6] via-butter-yellow/10 to-[#A997AB]/10">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Blur for "Personalized." */}
        <div className="absolute w-60 h-60 bg-[#D36B5F] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob -translate-x-full lg:-translate-x-[24rem]"></div>
        {/* Blur for "Local." */}
        <div className="absolute w-60 h-60 bg-[#A997AB] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        {/* Blur for "Craftmanship." */}
        <div className="absolute w-60 h-60 bg-butter-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 translate-x-full lg:translate-x-[24rem]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl pacifico text-[#2F2F2F] mb-6 leading-tight"
        >
          <span className="text-[#D36B5F]">Personalized.</span>{' '}
          <span className="text-[#A997AB]">Local.</span>{' '}
          <span className="text-butter-yellow">Craftmanship.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[#2F2F2F] mb-2 leading-relaxed"
        >
          Transform your ideas into beautiful, handcrafted goods. Made locally in Ottawa / Gatineau.
        </motion.p>

        {/* Unified Fade Effect */}
        <div className="flex justify-center items-center h-16 mb-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className={`px-8 py-3 rounded-full text-xl md:text-2xl font-medium shadow-md ${coloredProducts[currentIndex].colorClass}`}
            >
              {coloredProducts[currentIndex].text}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={handleCtaClick}
            className="px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105
                       bg-[#D36B5F] text-white font-semibold
                       hover:bg-[#D36B5F]/90"
          >
            Place your order now!
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center py-4 px-4 text-dusty-coral">
        <span className="material-symbols-outlined text-2xl">brush</span>
        <div className="flex-grow border-t border-dashed border-current mx-4"></div>
        <span className="material-symbols-outlined text-2xl">content_cut</span>
        <div className="flex-grow border-t border-dashed border-current mx-4"></div>
        <span className="material-symbols-outlined text-2xl">card_giftcard</span>
      </div>
    </section>
  );
};

export default Hero;
