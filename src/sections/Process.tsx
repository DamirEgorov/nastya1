import React, { useEffect } from 'react';
import { MessageSquare, Image, Palette, BookOpen, Edit, Package } from 'lucide-react';
import processData from '../data/processData';

const Process: React.FC = () => {
  // Map icons to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="h-8 w-8 text-amber-500" />;
      case 'Image': return <Image className="h-8 w-8 text-amber-500" />;
      case 'Palette': return <Palette className="h-8 w-8 text-amber-500" />;
      case 'BookOpen': return <BookOpen className="h-8 w-8 text-amber-500" />;
      case 'Edit': return <Edit className="h-8 w-8 text-amber-500" />;
      case 'Package': return <Package className="h-8 w-8 text-amber-500" />;
      default: return <MessageSquare className="h-8 w-8 text-amber-500" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const processItems = document.querySelectorAll('.process-item');
    processItems.forEach(item => observer.observe(item));

    return () => {
      processItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="process" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">The Design Process</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            From concept to delivery, here's how I work with you to create your perfect photo album.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 dark:bg-amber-800 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {processData.map((step, index) => (
              <div 
                key={step.id} 
                className={`process-item md:flex items-center opacity-0 translate-y-8 transition-all duration-700 ease-out ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? 'md:rounded-r-none' : 'md:rounded-l-none'
                  }`}>
                    <div className="flex items-center mb-4 md:hidden">
                      <div className="bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-3">
                        {step.id}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    </div>
                    <div className="hidden md:block mb-3">
                      {getIcon(step.icon)}
                    </div>
                    <h3 className="hidden md:block font-serif text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;