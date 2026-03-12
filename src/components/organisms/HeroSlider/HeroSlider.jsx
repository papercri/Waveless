import { useState } from 'react';

const SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1018/1920/1080',
    title: 'Ruta por Australia',
    subtitle: 'Si te va la aventura, no te lo puedes perder',
    cta: 'Más información'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1015/1920/1080',
    title: 'Naturaleza Salvaje',
    subtitle: 'Desconecta de la rutina en lugares únicos',
    cta: 'Descubrir'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1016/1920/1080',
    title: 'Playas Escondidas',
    subtitle: 'El paraíso está más cerca de lo que crees',
    cta: 'Ver destinos'
  }
];

export const HeroSlider = () => {
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
      {/* Slides */}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md max-w-2xl">
                {slide.subtitle}
              </p>
              <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors shadow-lg">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controles Laterales */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-purple p-2 md:p-3 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
        aria-label="Diapositiva anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-purple p-2 md:p-3 rounded-l-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
        aria-label="Siguiente diapositiva"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-transparent ${
              index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
};