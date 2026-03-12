import { Button } from '@/components/atoms/Button/Button';
import { PiMountainsLight, PiGlobeHemisphereEastLight, PiHouseLineLight } from "react-icons/pi";
import { IoPricetagOutline } from "react-icons/io5";
import { ChevronDown, ChevronUp, X, Info, Check } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/atoms/Input/Input';

// Custom checkbox component with lucide-react Check icon
function CheckboxWithIcon() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="relative flex items-center justify-center w-5 h-5">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="appearance-none w-5 h-5 border border-gray-300 rounded checked:bg-brand-orange checked:border-brand-orange focus:outline-none focus:ring-2 transition-colors cursor-pointer"
      />
      {checked && (
        <Check strokeWidth={3} className="absolute w-3 h-3 text-white pointer-events-none" />
      )}
    </div>
  );
}

export const FilterSidebar = ({ isOpen, onClose }) => {
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
    filter-sidebar bg-brand-light md:bg-transparent
    ${isOpen ? 'fixed inset-0 z-50 flex flex-col' : 'hidden'} 
    lg:block lg:relative lg:z-auto lg:w-full lg:h-auto overflow-y-auto lg:overflow-visible
  `;

  return (
    <aside className={sidebarClasses} aria-label="Filtros de búsqueda">
      {/* Cabecera Móvil (solo visible si está abierto como modal) */}
      <div className="flex lg:hidden items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <h2 className="text-lg font-bold text-brand-dark">Filtrar mi búsqueda</h2>
        <button 
          onClick={onClose}
          className="p-2 text-gray-500 hover:text-brand-orange focus:outline-none"
          aria-label="Cerrar filtros"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 lg:p-6 bg-brand-light rounded-2xl">
        <h3 className="hidden lg:block text-xl font-bold text-brand-dark mb-6">Filtrar mi búsqueda</h3>

        {/* Grupo: Destinos */}
        <div className="border-b border-gray-200 py-4">
          <button
            className="flex w-full items-center justify-between text-left focus:outline-none group"
            aria-expanded={openAccordions.destinos}
            onClick={() => toggleAccordion('destinos')}
          >
            <span className={`flex items-center gap-2 font-medium transition-colors ${openAccordions.destinos ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-orange'}`}>
              <span aria-hidden="true"><PiGlobeHemisphereEastLight className="w-5 h-5" /></span> Destinos
            </span>
            {openAccordions.destinos ? (
              <ChevronUp className="w-5 h-5 text-brand-orange" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {openAccordions.destinos && (
            <div className="pl-6 py-2 text-sm text-gray-600">Contenido de destinos...</div>
          )}
        </div>

        {/* Grupo: Aventura */}
        <div className="border-b border-gray-200 py-4">
          <button
            className="flex w-full items-center justify-between text-left focus:outline-none group"
            aria-expanded={openAccordions.aventura}
            onClick={() => toggleAccordion('aventura')}
          >
            <span className={`flex items-center gap-2 font-medium transition-colors ${openAccordions.aventura ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-orange'}`}>
              <PiMountainsLight className="w-5 h-5" />Aventura
            </span>
            {openAccordions.aventura ? (
              <ChevronUp className="w-5 h-5 text-brand-orange" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {openAccordions.aventura && (
            <div className="space-y-3 pl-6 pt-4">
              {['Quads', 'Parapente', 'Rafting', 'Explora', 'Buceo', 'Paracaídas', 'Snowboard', 'Surf'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group/label">
                  <CheckboxWithIcon />
                  <span className="text-sm text-gray-600 group-hover/label:text-brand-dark flex items-center justify-between w-full">
                    {item}
                    <Info className="w-4 h-4 text-gray-400 hover:text-brand-purple mr-2" />
                  </span>
                </label>
              ))}
              <button className="text-sm font-medium text-brand-purple underline mt-4 hover:text-brand-orange transition-colors">Ver 21 más</button>
            </div>
          )}
        </div>

        {/* Grupo: Alojamiento */}
        <div className="border-b border-gray-200 py-4">
          <button
            className="flex w-full items-center justify-between text-left focus:outline-none group"
            aria-expanded={openAccordions.alojamiento}
            onClick={() => toggleAccordion('alojamiento')}
          >
            <span className={`flex items-center gap-2 font-medium transition-colors ${openAccordions.alojamiento ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-orange'}`}>
              <PiHouseLineLight className="w-5 h-5" /> Alojamiento
            </span>
            {openAccordions.alojamiento ? (
              <ChevronUp className="w-5 h-5 text-brand-orange" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {openAccordions.alojamiento && (
            <div className="pl-6 py-2 text-sm text-gray-600">Contenido de alojamiento...</div>
          )}
        </div>

        {/* Grupo: Precio */}
        <div className="py-4">
          <button
            className="flex w-full items-center justify-between text-left focus:outline-none group"
            aria-expanded={openAccordions.precio}
            onClick={() => toggleAccordion('precio')}
          >
            <span className={`flex items-center gap-2 font-medium transition-colors ${openAccordions.precio ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-orange'}`}>
              <IoPricetagOutline className="w-5 h-5 transform -scale-x-100" /> Precio
            </span>
            {openAccordions.precio ? (
              <ChevronUp className="w-5 h-5 text-brand-orange" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {openAccordions.precio && (
            <div className="flex flex-col gap-3 pt-4">
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
          )}
        </div>
      </div>
      
      {/* Botón Aplicar solo en móvil */}
      <div className="lg:hidden p-4 border-t border-gray-200 bg-white mt-auto">
        <Button variant="reserva" onClick={onClose} className="w-full">
          Aplicar filtros
        </Button>
      </div>
    </aside>
  );
};