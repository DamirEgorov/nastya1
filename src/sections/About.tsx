import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add('translate-x-0', 'opacity-100');
            }
            if (entry.target === textRef.current) {
              entry.target.classList.add('translate-x-0', 'opacity-100');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="relative -translate-x-10 opacity-0 transition-all duration-1000 ease-out"
          >
            <div className="relative z-10">
              <img 
                  src="/nastyafoto.jpg" 
                  alt="Настя — дизайнер фотоальбомов" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-full z-0"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-teal-500 rounded-lg z-0"></div>
          </div>

          <div 
            ref={textRef}
            className="translate-x-10 opacity-0 transition-all duration-1000 ease-out delay-300"
          >
            <h3 className="font-serif text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Привет, меня зовут Настя!
              </h3>

            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Здесь я создаю фотокниги. Они про жизнь вашей семьи, про самое сокровенное и дорогое. В них истории о том, как вы женились, ждали малышей, уезжали в путешествия, строили свое дело, исполняли мечты, переезжали, встречались с друзьями, собирались на даче у бабушки, и о многом другом, что хранится в вашем сердце.
            </p>

            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Как фотограф я знаю, что особенные моменты нашей жизни теряются в телефонах, на компьютерах и по ссылкам на файлообменники. Мы почти к ним не возвращаемся. Потому что неудобно и некогда, а со временем всё сложнее найти нужные фотографии. Я проверила это на десятках фотокниг — лучше не затягивать, иначе жизнь убежит вперёд. Поэтому с любовью соберу ваши воспоминания в красивые, стильные альбомы.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-amber-600 mb-2">10+</span>
                <span className="text-slate-600 dark:text-slate-400">Years Experience</span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-amber-600 mb-2">500+</span>
                <span className="text-slate-600 dark:text-slate-400">Albums Created</span>
              </div>
            </div>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-colors shadow-md"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
