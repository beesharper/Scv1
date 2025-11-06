import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [{
  quote: "The most stunning and customized items can be found at Sharp and Crafty Studio. The founder, Phebe and her cousin Maddie have collaborated to create the perfect gift for those seeking a unique present either for themselves or a loved one. I highly recommend their services to anyone wanting a \"WOW\" item at reasonable prices.",
  author: "Victoria Palado-Lapointe",
  color: "text-[#86968C]"
}, {
  quote: "The Ottawa One World Grannies are delighted with the mugs we recently ordered, designed by Phebe. The quality is excellent, showing a colourful Solidarity’ quilt made by Canadian grandmothers as well as our name and logo.",
  author: "One World Grannies",
  color: "text-[#A997AB]"
}, {
  quote: "Fast, creative, and so easy to work with. Sharp & Crafty brought our team's vision to life perfectly.",
  author: "Coach Davies, Gatineau Gryphons",
  color: "text-butter-yellow"
}];
const TrustBar = () => {
  return <section className="py-20 bg-gradient-to-br from-butter-yellow/20 via-[#A997AB]/20 to-[#86968C]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-butter-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#A997AB] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#86968C] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2F2F2F] mb-4">
              Thoughts From Our <span className="pacifico text-[#D36B5F]">Neighbors</span>
            </h2>
            <p className="text-lg text-[#2F2F2F]/80 max-w-2xl mx-auto">We love our community! Here's what people are saying about our handcrafted creations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} className="flex flex-col items-center text-center">
                <Quote fill="currentColor" className={`${testimonial.color} w-12 h-12 mb-4 opacity-70`} />
                <p className="text-lg text-[#2F2F2F]/90 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-[#2F2F2F]">- {testimonial.author}</p>
              </motion.div>)}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center py-4 px-4 text-dusty-coral">
          <span className="material-symbols-outlined text-2xl">brush</span>
          <div className="flex-grow border-t border-dashed border-current mx-4"></div>
          <span className="material-symbols-outlined text-2xl">content_cut</span>
          <div className="flex-grow border-t border-dashed border-current mx-4"></div>
          <span className="material-symbols-outlined text-2xl">card_giftcard</span>
        </div>
      </section>
};
export default TrustBar;