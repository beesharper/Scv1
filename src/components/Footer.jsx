import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';
const Footer = () => {
  return <footer id="page-bottom" className="bg-[#FBF9F6] border-t-2 border-[#D36B5F]">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img src="https://horizons-cdn.hostinger.com/5598ff09-b6ae-4ce7-8318-464a195c2a7f/sharp-and-crafty-logo-transp-W6iv4.png" alt="Sharp & Crafty Logo" className="h-36 w-auto" />
          </div>

          <p className="text-lg text-[#2F2F2F] mb-6 pacifico">
            Handcrafted with love & personalized for you
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.instagram.com/sharp_craftystudio/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#D36B5F] flex items-center justify-center text-white hover:bg-[#D36B5F]/90 transition-all transform hover:scale-110 shadow-lg" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/p/Sharp-Crafty-Studio-61560759479916/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#A997AB] flex items-center justify-center text-white hover:bg-[#A997AB]/90 transition-all transform hover:scale-110 shadow-lg" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="mailto:sharpcraftystudio@gmail.com" className="w-12 h-12 rounded-full bg-[#86968C] flex items-center justify-center text-white hover:bg-[#86968C]/90 transition-all transform hover:scale-110 shadow-lg" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-[#2F2F2F] space-y-2">
            <p className="font-medium text-xl">
              (343) 961-5899
            </p>
            <p className="text-sm text-[#2F2F2F]/70">Gatineau, QC • 100% Handcrafted Locally</p>
          </div>

          <div className="mt-8 pt-8 border-t border-[#D36B5F]/20">
            <p className="text-sm text-[#2F2F2F]/60">
              © {new Date().getFullYear()} Sharp & Crafty. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;