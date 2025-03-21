
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 bg-gradient-to-r from-indigo-50/95 to-purple-50/95 shadow-md backdrop-blur-md border-b border-indigo-100/50' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-2 rounded-full">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
          </div>
          <span className="font-serif text-xl md:text-2xl font-medium text-gray-900">Meenu Agarwal</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="opacity-0 relative text-gray-700 hover:text-indigo-700 transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all hover:after:w-full"
              style={{ animationName: 'fade-in', animationDuration: '0.5s', animationFillMode: 'forwards', animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#contact">
            <Button className="hidden md:flex bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-6 transition-all shadow-md hover:shadow-lg">
              Book a Consultation
            </Button>
          </a>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium text-gray-800 hover:text-indigo-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-6">
            Book a Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
