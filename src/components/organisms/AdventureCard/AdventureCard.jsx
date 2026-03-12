import { useState } from 'react';
import { PriceBreakdown } from '../../molecules/PriceBreakdown/PriceBreakdown';
import { Button } from '@/components/atoms/Button/Button';
import { Badge } from '@/components/atoms/Badge/Badge';
import { ChevronDown } from 'lucide-react';

export const AdventureCard = ({ image, category, location, duration, title, price, continente }) => {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <article className="adventure-card flex flex-col bg-white rounded-2xl  border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
      
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-2xl" loading="lazy" />
        <Badge className="absolute top-4 right-4">
          {category}
        </Badge>
      </div>

      <div className="p-5 flex flex-col grow">
        <p className="text-xs text-brand-purple font-semibold mb-2">
          {location}
          {continente && location !== continente ? `, ${continente}` : ''}
          <span className="text-gray-500 font-normal"> {duration}</span>
        </p>
        <h3 className="text-lg font-bold text-brand-dark leading-tight mb-6">
          Descubre {title}
        </h3>

        <div className="mt-auto bg-brand-light -mx-5 -mb-5 p-5 flex items-center justify-between border-t border-gray-50">
          <div>
            <p className="text-xs text-gray-500 mb-1">Desde</p>
            <p className="text-xl font-bold text-brand-dark mb-1">{price} €</p>
            
            <div className="relative">
              <button 
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-xs text-brand-purple flex items-center gap-1 hover:text-brand-orange transition-colors underline"
                aria-expanded={showBreakdown}
              >
                Ver desglose
                <ChevronDown className={`w-3 h-3 transform transition-transform ${showBreakdown ? 'rotate-180' : ''}`} />
              </button>
              
              <PriceBreakdown 
                isOpen={showBreakdown} 
                onClose={() => setShowBreakdown(false)} 
              />
            </div>
          </div>
          <Button variant="card">
            Reservar
          </Button>
        </div>
      </div>
    </article>
  );
};