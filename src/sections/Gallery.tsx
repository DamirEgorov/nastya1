import React, { useState, useEffect, useRef } from 'react';
import galleryData, { GalleryItem } from '../data/galleryData';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [items, setItems] = useState<GalleryItem[]>(galleryData);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const categories = ['All', ...Array.from(new Set(galleryData.map(item => item.category)))];

  // filter items when category changes
useEffect(() => {
    if (selectedCategory === 'All') {
      // показываем только первый свадебный альбом
      const firstWedding = galleryData.find(item => item.category === 'Свадьбы');
      setItems(firstWedding ? [firstWedding] : []);
    } else {
      setItems(galleryData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentIndex(0);
    document.body.style.overflow = 'auto';
  };

  const prev = () => {
    if (!selectedItem?.images) return;
    setCurrentIndex(i => 
      i === 0 ? selectedItem.images!.length - 1 : i - 1
    );
  };

  const next = () => {
    if (!selectedItem?.images) return;
    setCurrentIndex(i =>
      i === selectedItem.images!.length - 1 ? 0 : i + 1
    );
  };

  // scroll-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = galleryRef.current?.querySelectorAll('.gallery-item') || [];
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, [items]);

  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4" ref={galleryRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            ПОРТФОЛИО
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Здесь вы увидите примеры фотокниг из моих работ — от семейных архивов до историй путешествий.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of “folders” */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.images?.[0] ?? item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Carousel */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              {selectedItem.images ? (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    ‹
                  </button>
                  <img
                    src={selectedItem.images[currentIndex]}
                    alt={`${selectedItem.title} ${currentIndex + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    ›
                  </button>
                </>
              ) : (
                <img
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  className="w-full h-auto object-cover"
                />
              )}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                {selectedItem.category}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {selectedItem.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
