
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import UKLawStudy from '@/components/UKLawStudy';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Meenu Agarwal - Education Counselor";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <UKLawStudy />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
