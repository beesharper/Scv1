import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const Story = () => {
  return <section className="py-20 bg-[#EAE0E1]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img alt="Phebe-Jane Sharp smiling on a beach with ocean in background" className="w-full h-full object-cover aspect-square" src="/assets/screenshot-2025-10-25-124258-XkDxn.png" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D36B5F] rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FDE68A] rounded-full blur-2xl opacity-30"></div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <div className="mb-6">
                <Quote size={48} className="text-[#D36B5F] opacity-50" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] mb-6">
                Meet <span className="pacifico text-[#D36B5F]">Phebe-Jane</span>
              </h2>

              <div className="space-y-4 text-lg text-[#2F2F2F] leading-relaxed">
                <p>
                  Hi there! I'm Phebe Jane, the creative behind Sharp & Crafty. I believe that the best gifts & decor are the ones that come from the heart.
                </p>
                <p>
                  What started as a love for crafting has grown into a full-time business dedicated to making your special moments even more memorable. From custom team apparel and gifts to unique wedding favors and event decor, I love bringing your ideas to life.
                </p>
                <p className="font-semibold">
                  Every piece is crafted locally (in Gatineau, QC) by hand, ensuring it's something you'll treasure. I can't wait to create something beautiful just for you!
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#D36B5F]/10 to-[#A997AB]/10 rounded-2xl border-l-4 border-[#D36B5F]">
                <p className="text-[#2F2F2F] italic">
                  "Working with a local artisan means you get personalized attention, unique designs, and the satisfaction of supporting your community. Every piece I create is made with love and care—just for you."
                </p>
                <p className="text-[#D36B5F] font-semibold mt-4">— Phebe Sharp</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default Story;