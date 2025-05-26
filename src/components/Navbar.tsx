import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-amber-600" />
          <span className="font-serif font-bold text-xl">СТРАНИЦЫ</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
          <button onClick={() => scrollToSection('process')} className="nav-link">Process</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          <button onClick={() => scrollToSection('home')} className="py-2 text-left hover:text-amber-600 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="py-2 text-left hover:text-amber-600 transition-colors">About</button>
          <button onClick={() => scrollToSection('gallery')} className="py-2 text-left hover:text-amber-600 transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('process')} className="py-2 text-left hover:text-amber-600 transition-colors">Process</button>
          <button onClick={() => scrollToSection('testimonials')} className="py-2 text-left hover:text-amber-600 transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="py-2 text-left hover:text-amber-600 transition-colors">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
