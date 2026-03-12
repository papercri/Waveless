import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/atoms/Button/Button';
import slidesData from '@data/slides.json';

export const HeroSlider = () => {
  const SLIDES = slidesData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero-slider relative w-full h-[60vh] md:h-[70vh] bg-gray-900 overflow-hidden" aria-label="Carrusel de destinos destacados">
      <div 
        className="hero-slider__track flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="hero-slider__slide relative min-w-full h-full">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
                <span style={{ fontFamily: 'Syne, sans-serif' }}>{slide.title}</span>
              </h1>
              <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl">
                {slide.subtitle}
              </p>
              <Button variant="hero">
                {slide.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Controles Laterales */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-brand-purple-light hover:bg-white text-white hover:text-brand-purple p-2 md:p-3 transition-colors focus:outline-none  rounded-r-xs"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-brand-purple-light  hover:bg-white text-white hover:text-brand-purple p-2 md:p-3 transition-colors focus:outline-none rounded-l-xs"
        aria-label="Siguiente diapositiva"
      >
        <ChevronRight size={24} />
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`border border-white w-3 h-3 rounded-full transition-colors outline-none ${
              index === currentIndex 
                ? 'bg-brand-orange' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
};