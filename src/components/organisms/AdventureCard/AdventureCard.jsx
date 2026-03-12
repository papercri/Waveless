import { useState } from 'react';
import { PriceBreakdown } from '../../molecules/PriceBreakdown/PriceBreakdown';

export const AdventureCard = ({ image, category, location, duration, title, price }) => {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <article className="adventure-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
      
      {/* Imagen y Badge */}
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs text-brand-purple font-semibold mb-2">
          {location} <span className="text-gray-500 font-normal">• {duration}</span>
        </p>
        <h3 className="text-lg font-bold text-brand-dark leading-tight mb-6">
          {title}
        </h3>

        {/* Footer de la Card (Precio y Botón) */}
        <div className="mt-auto bg-brand-light -mx-5 -mb-5 p-5 flex items-center justify-between border-t border-gray-50">
          <div>
            <p className="text-xs text-gray-500 mb-1">Desde</p>
            <p className="text-xl font-bold text-brand-dark mb-1">{price} €</p>
            
            {/* Contenedor relativo para el Popover en Desktop */}
            <div className="relative">
              <button 
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-xs text-brand-purple flex items-center gap-1 hover:text-brand-orange transition-colors"
                aria-expanded={showBreakdown}
              >
                Ver desglose
                <svg className={`w-3 h-3 transform transition-transform ${showBreakdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <PriceBreakdown 
                isOpen={showBreakdown} 
                onClose={() => setShowBreakdown(false)} 
              />
            </div>
          </div>
          <button className="border-2 border-brand-purple text-brand-purple font-medium px-6 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2">
            Reservar
          </button>
        </div>
      </div>
    </article>
  );
};