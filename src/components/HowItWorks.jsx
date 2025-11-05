import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Hammer, Gift } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Share Your Idea',
      description: 'Tell us about your vision and what you want to create',
      color: '#FDE68A'
    },
    {
      icon: Palette,
      title: 'Design & Approve',
      description: 'We collaborate to perfect your design until it\'s just right',
      color: '#A997AB'
    },
    {
      icon: Hammer,
      title: 'We Craft It',
      description: 'Your piece is lovingly handcrafted with attention to detail',
      color: '#86968C'
    },
    {
      icon: Gift,
      title: 'Delivered to You',
      description: 'Receive your beautiful, one-of-a-kind creation',
      color: '#D36B5F'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#FDE68A]/20 via-[#A997AB]/20 to-[#86968C]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#FDE68A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#A997AB] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#86968C] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] mb-6">
              How It <span className="pacifico text-[#D36B5F]">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-[#2F2F2F] max-w-3xl mx-auto leading-relaxed">
              From your initial idea to the finished masterpiece, we make the process simple and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#D36B5F]/30">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon size={36} className="text-white" />
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#D36B5F] flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#2F2F2F] mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[#2F2F2F] text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center py-8 px-4 text-dusty-coral">
          <span className="material-symbols-outlined text-2xl">brush</span>
          <div className="flex-grow border-t border-dashed border-current mx-4"></div>
          <span className="material-symbols-outlined text-2xl">content_cut</span>
          <div className="flex-grow border-t border-dashed border-current mx-4"></div>
          <span className="material-symbols-outlined text-2xl">card_giftcard</span>
        </div>
      </section>
  );
};

export default HowItWorks;