import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#FBF9F6] via-[#FDE68A]/10 to-[#A997AB]/10">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Blur for "Personalized." */}
        <div className="absolute w-60 h-60 bg-[#D36B5F] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob -translate-x-full lg:-translate-x-[24rem]"></div>
        {/* Blur for "Local." */}
        <div className="absolute w-60 h-60 bg-[#A997AB] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        {/* Blur for "Craftmanship." */}
        <div className="absolute w-60 h-60 bg-[#86968C] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 translate-x-full lg:translate-x-[24rem]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-5xl md:text-6xl lg:text-7xl pacifico text-[#2F2F2F] mb-6 leading-tight">
          <span className="text-[#D36B5F]">Personalized.</span>{' '}
          <span className="text-[#A997AB]">Local.</span>{' '}
          <span className="text-[#86968C]">Craftmanship.</span>
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-lg md:text-xl text-[#2F2F2F] mb-2 leading-relaxed">Transform your idea into beautiful, handcrafted keepers. Made with care locally in Ottawa / Gatineau.</motion.p>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="text-xl md:text-2xl text-[#2F2F2F] font-bold mb-8 leading-relaxed">Stay Sharp. Be Crafty.</motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }}>
          <Button onClick={handleCtaClick} className="px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105
                       bg-[#D36B5F] text-white font-semibold
                       hover:bg-[#D36B5F]/90">
            Start Your Custom Order!
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default Hero;