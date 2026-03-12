import { useState } from 'react';
import { MainLayout } from '../../components/templates/MainLayout/MainLayout';
import { HeroSlider } from '../../components/organisms/HeroSlider/HeroSlider';
import { FilterSidebar } from '../../components/organisms/FilterSidebar/FilterSidebar';
import { AdventureCard } from '../../components/organisms/AdventureCard/AdventureCard';
import { Pagination } from '../../components/molecules/Pagination/Pagination';

// Datos de prueba basados en tu diseño
const MOCK_CARDS = Array(9).fill({
  id: Math.random(),
  image: 'https://picsum.photos/id/1018/600/400',
  category: 'Quads',
  location: 'Marruecos, África',
  duration: '9 días',
  title: 'Descubre Bangkok con Iberojet',
  price: '248,00'
});

export const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <MainLayout>
      <HeroSlider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Vive tus propias aventuras
          </h2>
          <p className="text-gray-500 text-lg">
            Para los que les gusta explorar y conocer mundo sin complejos
          </p>
        </div>

        {/* Botón Filtros Móvil/Tablet */}
        <div className="lg:hidden flex justify-center mb-8">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 px-6 text-brand-dark font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            Ver filtros
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 xl:w-1/5 flex-shrink-0">
            <FilterSidebar 
              isOpen={isFilterOpen} 
              onClose={() => setIsFilterOpen(false)} 
            />
          </div>

          {/* Main Grid + Pagination */}
          <div className="lg:w-3/4 xl:w-4/5 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_CARDS.map((card, index) => (
                <AdventureCard 
                  key={index}
                  image={card.image}
                  category={card.category}
                  location={card.location}
                  duration={card.duration}
                  title={card.title}
                  price={card.price}
                />
              ))}
            </div>
            
            <Pagination />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};