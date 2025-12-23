import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const showcaseItems = [
{
imgSrc: "/assets/dtf-sweater.jpg",
imgAlt: "Sweater with colorful DTF design",
title: "DTF Sweater",
delay: 0.0
},
{
imgSrc: "/assets/christmas-mugs.jpg",
imgAlt: "Christmas mugs with Pokemon designs",
title: "Christmas Mugs",
delay: 0.1
},
{
imgSrc: "/assets/screenshot-2025-10-25-113400-hT8Qu.png",
imgAlt: "Custom handcrafted team apparel",
title: "Wedding Favors",
delay: 0.1
},
{
imgSrc: "/assets/screenshot-2025-10-25-112235-fizCZ.png",
imgAlt: "Elegant wedding favors handmade",
title: "Custom Apparel",
delay: 0.2
},
{
imgSrc: "/assets/screenshot-2025-10-25-112835-kj8wT.png",
imgAlt: "Custom event decor handcrafted",
title: "Event Decor",
delay: 0.3
},
];


const Showcase = () => {
  const scrollContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current) {
      // Calculate the total width of all items
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      // Get the width of the container itself
      const clientWidth = scrollContainerRef.current.clientWidth;
      // The difference is the maximum draggable distance
      setContainerWidth(scrollWidth - clientWidth);
    }
  }, [showcaseItems]);

  return (
    <section id="showcase" className="py-20 bg-[#FBF9F6] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] mb-6">
            Handcrafted with <span className="pacifico text-[#D36B5F]">Love</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2F2F2F] max-w-3xl mx-auto leading-relaxed">
            Custom team apparel, event decor or unique wedding favors - if you can dream it we can craft it for you.
          </p>
        </motion.div>

        {/* --- 1. MOBILE-ONLY DRAGGABLE SCROLLER --- */}
        <motion.div ref={scrollContainerRef} className="md:hidden cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex space-x-4 pb-4"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -containerWidth,
            }}
          >
            {showcaseItems.map((item) => (
              <figure
                key={item.title}
                className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square min-w-60"
              >
                <img
                  alt={item.imgAlt}
                  className="w-full h-full object-cover pointer-events-none"
                  src={item.imgSrc}
                />
                <figcaption className="sr-only">{item.title}</figcaption>
              </figure>
            ))}
          </motion.div>
        </motion.div>

        {/* --- 2. DESKTOP-ONLY ANIMATED GRID --- */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square"
            >
              <figure>
                <img
                  alt={item.imgAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.imgSrc}
                />
                <figcaption className="sr-only">{item.title}</figcaption>
              </figure>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{item.title}</p>
              </div>
            </motion.div>
          ))}
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
);
};
export default Showcase;
