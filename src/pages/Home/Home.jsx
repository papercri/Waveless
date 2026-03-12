import { useState } from 'react';
import { MainLayout } from '@/components/templates/MainLayout/MainLayout';
import { HeroSlider } from '@/components/organisms/HeroSlider/HeroSlider';
import { FilterSidebar } from '@/components/organisms/FilterSidebar/FilterSidebar';
import { AdventureCard } from '@/components/organisms/AdventureCard/AdventureCard';
import { ListFilter } from 'lucide-react';
import cardsData from '@data/cards.json';

export const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const cardsByContinent = cardsData.reduce((acc, card) => {
    acc[card.continente] = acc[card.continente] || [];
    acc[card.continente].push(card);
    return acc;
  }, {});

  return (
    <MainLayout>
      <HeroSlider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
            Vive tus propias aventuras
          </h1>
          <p className="text-gray-500 lg:text-xl text-lg">
            Para los que les gusta explorar y conocer mundo sin complejos
          </p>
        </div>

        {/* Botón Filtros Móvil/Tablet */}
        <div className="lg:hidden flex justify-start mb-4">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-1 px-4 text-brand-dark font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          >
            <ListFilter size="18" />
            Ver filtros
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 xl:w-1/5 shrink-0">
            <FilterSidebar 
              isOpen={isFilterOpen} 
              onClose={() => setIsFilterOpen(false)} 
            />
          </div>

          {/* Main Grid */}
          <div className="lg:w-3/4 xl:w-4/5 flex flex-col">
            {Object.entries(cardsByContinent).map(([continent, cards]) => (
              <section key={continent} className="mb-12">
                <h3 className="text-2xl font-bold text-brand-purple mb-6">{continent}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {cards.map((card) => (
                    <AdventureCard 
                      key={card.id}
                      image={card.image}
                      category={card.category}
                      location={card.location}
                      duration={card.duration}
                      title={card.title}
                      price={card.price}
                      continente={card.continente}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};