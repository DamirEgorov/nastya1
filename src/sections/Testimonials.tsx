import React, { useState, useEffect, useRef } from 'react';
import testimonialData, { Testimonial } from '../data/testimonialData';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const goToTestimonial = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const nextTestimonial = () => {
    const newIndex = (activeIndex + 1) % testimonialData.length;
    goToTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (activeIndex - 1 + testimonialData.length) % testimonialData.length;
    goToTestimonial(newIndex);
  };

  // Set up autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [activeIndex]);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Resume autoplay on mouse leave
  const resumeAutoplay = () => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
  };

  // Animation on scroll
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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Client Testimonials</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Hear what my clients have to say about their experience and the albums I created for them.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div 
          ref={testimonialRef}
          className="relative max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < testimonial.rating ? 'fill-amber-500 text-amber-500' : 'text-slate-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-white" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-slate-700 dark:text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === activeIndex 
                    ? 'bg-amber-500 w-6' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;