import { Button } from '@/components/atoms/Button/Button';
import { PiMountainsLight, PiGlobeHemisphereEastLight, PiHouseLineLight } from "react-icons/pi";
import { IoPricetagOutline } from "react-icons/io5";
import { ChevronDown, ChevronUp, X, Info } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/atoms/Input/Input';

import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';
import { Accordion } from '@/components/molecules/Accordion/Accordion';
import { FilterOption } from '@/components/molecules/FilterOption/FilterOption';

export const FilterSidebar = ({ isOpen, onClose }) => {

  const [aventuraChecks, setAventuraChecks] = useState(Array(8).fill(false));
  const handleAventuraCheck = (idx) => {
    setAventuraChecks((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };
  const [openAccordions, setOpenAccordions] = useState({
    destinos: false,
    aventura: true,
    alojamiento: false,
    precio: true,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  const sidebarClasses = `
    filter-sidebar bg-white 
    ${isOpen ? 'fixed inset-0 z-50 flex flex-col sm:max-w-[300px] w-full shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)]' : 'hidden'} 
    lg:block lg:relative lg:z-auto w-full  lg:h-auto overflow-y-auto lg:overflow-visible
  `;

  return (
    <aside className={sidebarClasses} aria-label="Filtros de búsqueda">
      {/* Cabecera Móvil (solo visible si está abierto como modal) */}
      <div className="flex lg:hidden items-center justify-between p-4  bg-white sticky top-0 z-10 ">
        <h2 className="text-lg font-bold text-brand-dark">Filtrar mi búsqueda</h2>
        <button 
          onClick={onClose}
          className="p-2 text-brand-dark hover:text-brand-orange focus:outline-none"
          aria-label="Cerrar filtros"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 lg:p-6">
        <h3 className="hidden lg:block text-xl font-bold text-brand-dark pt-8 pb-6 mb-4 border-b border-gray-200">Filtrar mi búsqueda</h3>

        <Accordion
          open={openAccordions.destinos}
          onToggle={() => toggleAccordion('destinos')}
          icon={<PiGlobeHemisphereEastLight className="w-5 h-5" />}
          title="Destinos"
        >
          <div className="pl-6 py-2 text-sm text-brand-dark">Contenido de destinos...</div>
        </Accordion>

        <Accordion
          open={openAccordions.aventura}
          onToggle={() => toggleAccordion('aventura')}
          icon={<PiMountainsLight className="w-5 h-5" />}
          title="Aventura"
        >
          <div className="space-y-5 pl-6 pt-4">
            {['Quads', 'Parapente', 'Rafting', 'Explora', 'Buceo', 'Paracaídas', 'Snowboard', 'Surf'].map((item, idx) => (
              <FilterOption
                key={item}
                checked={aventuraChecks[idx]}
                onChange={() => handleAventuraCheck(idx)}
                label={item}
                icon={<Checkbox checked={aventuraChecks[idx]} onChange={() => handleAventuraCheck(idx)} />}
              >
                <Info className="w-3 h-3 text-brand-dark hover:text-brand-purple ml-2" />
              </FilterOption>
            ))}
            <button className="text-sm font-medium text-brand-purple underline mt-2 hover:text-brand-orange transition-colors">Ver 21 más</button>
          </div>
        </Accordion>

        <Accordion
          open={openAccordions.alojamiento}
          onToggle={() => toggleAccordion('alojamiento')}
          icon={<PiHouseLineLight className="w-5 h-5" />}
          title="Alojamiento"
        >
          <div className="pl-6 py-2 text-sm text-brand-dark">Contenido de alojamiento...</div>
        </Accordion>

        <Accordion
          open={openAccordions.precio}
          onToggle={() => toggleAccordion('precio')}
          icon={<IoPricetagOutline className="w-5 h-5 transform -scale-x-100" />}
          title="Precio"
        >
          <div className="flex flex-col gap-4 pt-4">
            <Input
              id="min-price"
              placeholder="Mínimo"
              icon={IoPricetagOutline}
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <Input
              id="max-price"
              placeholder="Máximo"
              icon={IoPricetagOutline}
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </Accordion>
      </div>
      
    </aside>
  );
};