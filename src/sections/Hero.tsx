import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const sectionTop = sectionRef.current.offsetTop;
        const parallaxOffset = scrollY * 0.4;
        
        // Apply parallax effect
        if (scrollY <= sectionTop + sectionRef.current.offsetHeight) {
          sectionRef.current.style.backgroundPositionY = `${parallaxOffset}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("/FON2.jpg")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          <span className="block">ФОТОКНИГИ ИЗ ВАШИХ ФОТОГРАФИЙ</span>
        </h1>
        
        <p className="text-slate-200 text-xl md:text-2xl max-w-2xl mx-auto mb-8">
         ДУШЕВНО И СТИЛЬНО О ВАС И ВАШЕЙ ЖИЗНИ.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#gallery" 
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl"
          >
            Смотреть портфолио
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-md transition-colors"
          >
            Связаться со мной
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
