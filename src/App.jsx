import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
        <title>Sharp & Crafty - Custom Gifts & Decor in Ottawa Gatineau</title>
        <meta name="description" content="Transform your ideas into beautiful, personalized gifts and decor. Phebe-Jane Sharp lovingly creates custom apparel, party favors, event decor and more in Ottawa Gatineau. Craft your vision today!" />
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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;