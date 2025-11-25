import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavLink = ({ to, children, onClick, className, isMobile = false }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const scrollToAction = () => {
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else if (to === 'page-bottom') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    };

    if (isMobile) {
      // First, call the onClick to close the menu
      if (onClick) {
        onClick();
      }
      // Then, wait for the menu's exit animation to complete before scrolling
      setTimeout(scrollToAction, 300); // 300ms matches the exit animation duration
    } else {
      // For desktop, scroll immediately
      scrollToAction();
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const closeMenu = () => setIsMenuOpen(false);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FBF9F6]/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/sharp-and-crafty-logo.png" alt="Sharp & Crafty Logo" className="h-12 md:h-14 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="showcase" className="text-[#2F2F2F] hover:text-[#D36B5F] transition-colors font-medium">
            Our Craft
          </NavLink>
          <NavLink to="how-it-works" className="text-[#2F2F2F] hover:text-[#D36B5F] transition-colors font-medium">
            How It Works
          </NavLink>
          <NavLink to="page-bottom" className="text-[#2F2F2F] hover:text-[#D36B5F] transition-colors font-medium">
            Contact
          </NavLink>
          <NavLink to="contact">
            <Button className="bg-[#D36B5F] hover:bg-[#D36B5F]/90 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">Get Crafty</Button>
          </NavLink>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#2F2F2F] p-2" aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden bg-[#FBF9F6] border-t border-[#D36B5F]/20">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <NavLink to="showcase" onClick={closeMenu} isMobile={true} className="text-[#2F2F2F] hover:text-[#D36B5F] transition-colors font-medium text-left py-2">
                Our Craft
              </NavLink>
              <NavLink to="how-it-works" onClick={closeMenu} isMobile={true} className="text-[#2F2F2F] hover:text-[#D36B5F] transition-colors font-medium text-left py-2">
                How It Works
              </NavLink>
              <NavLink to="page-bottom" onClick={closeMenu} isMobile={true} className="text-[#2F2F2F] hover:text-[#D36B5F] transition-colors font-medium text-left py-2">
                Contact
              </NavLink>
              <NavLink to="contact" onClick={closeMenu} isMobile={true}>
                <Button className="bg-[#D36B5F] hover:bg-[#D36B5F]/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg w-full">
                  Get Crafty
                </Button>
              </NavLink>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};
export default Header;