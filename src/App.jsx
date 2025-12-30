import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Showcase from '@/components/Showcase';
import HowItWorks from '@/components/HowItWorks';
import Story from '@/components/Story';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sharp & Crafty - Personalized Gifts & Decor in Ottawa Gatineau</title>
        <meta name="description" content="Transform your ideas into beautiful, personalized gifts and decor. Phebe-Jane Sharp lovingly creates custom apparel, party favors, event decor and more in Ottawa Gatineau. Craft your vision today!" />
        <meta property="og:title" content="Personalized Gifts & Decor in Ottawa Gatineau" />
        <meta property="og:description" content="Transform your ideas into beautiful, personalized gifts and decor. Phebe-Jane Sharp lovingly creates custom apparel, party favors, event decor and more in Ottawa Gatineau" />
        <meta property="og:image" content="https://sharpcrafty.com/assets/screenshot-2025-10-25-124258-XkDxn.png" />
        <meta property="og:url" content="https://sharpcrafty.com/" />
        <link rel="canonical" href="https://sharpcrafty.com/" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sharp & Crafty",
            "url": "https://sharpcrafty.com/",
            "telephone": "613 799 6342",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gatineau",
              "addressRegion": "Quebec",
              "addressCountry": "CA"
            },
            "sameAs": [
              "https://www.instagram.com/sharp_craftystudio/",
              "https://www.facebook.com/p/Sharp-Crafty-Studio-61560759479916/"
            ]
          }`}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#FBF9F6] w-full overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Showcase />
          <HowItWorks />
          <Story />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};


function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
