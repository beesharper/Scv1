import React from 'react';
import { motion } from 'framer-motion';
const Showcase = () => {
  return <section id="showcase" className="py-20 bg-[#FBF9F6]">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] mb-6">
            Handcrafted with <span className="pacifico text-[#D36B5F]">Love</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2F2F2F] max-w-3xl mx-auto leading-relaxed">Custom team apparel, event decor or unique wedding favors - if you can dream it we can craft it for you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
            <img alt="Custom handcrafted team apparel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://horizons-cdn.hostinger.com/5598ff09-b6ae-4ce7-8318-464a195c2a7f/screenshot-2025-10-25-113400-hT8Qu.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Wedding Favors</p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
            <img alt="Elegant wedding favors handmade" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://horizons-cdn.hostinger.com/5598ff09-b6ae-4ce7-8318-464a195c2a7f/screenshot-2025-10-25-112235-fizCZ.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Custom Apparel </p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
            <img alt="Custom event decor handcrafted" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://horizons-cdn.hostinger.com/5598ff09-b6ae-4ce7-8318-464a195c2a7f/screenshot-2025-10-25-112835-kj8wT.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Wedding Favor</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Showcase;