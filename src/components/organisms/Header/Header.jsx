import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PiMountainsLight, PiGlobeHemisphereEastLight, PiHouseLineLight } from "react-icons/pi";
import { Button } from '@/components/atoms/Button/Button';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const currentPath = '#aventura'; 

  const navItems = [
    { name: 'Aventura', href: '#aventura', icon: PiMountainsLight },
    { name: 'Destinos', href: '#destinos', icon: PiGlobeHemisphereEastLight },
    { name: 'Alojamiento', href: '#alojamiento', icon: PiHouseLineLight },
    { name: 'Sobre nosotros', href: '#nosotros' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header bg-white relative z-50 shadow-sm" role="banner" aria-label="Cabecera principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          <div className="header__logo flex-shrink-0 flex items-center">
            <a href="/" aria-label="Ir a inicio" className="flex items-center gap-2">
              <img 
                src="/logoWaveless.png" 
                alt="Logo Waveless" 
                className="h-8 w-auto  object-contain"
              />
            </a>
          </div>

          {/* Navegación Desktop */}
          <nav className="header__nav hidden md:flex h-full space-x-4 lg:space-x-14" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a 
                  key={item.name}
                  href={item.href} 
                  className={`relative flex items-center gap-2 font-medium h-full px-1 transition-colors whitespace-nowrap ${
                    isActive 
                      ? 'text-brand-orange' 
                      : 'text-gray-700 hover:text-brand-orange'
                  }`}
                >
                  {item.icon && <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />}
                  {item.name}
                  
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-brand-orange"></div>
                      <div className="w-full h-[3px] bg-brand-orange"></div>
                    </div>
                  )}
                </a>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center">
            <Button variant="reserva">
              Reserva
            </Button>
          </div>

          {/* Botón Hamburguesa Móvil/Tablet */}
          <div className="flex items-center md:hidden h-full">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-orange focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil / Tablet */}
      {isMenuOpen && (
        <div className="header__mobile-menu md:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-t border-brand-gray shadow-xl" role="navigation" aria-label="Menú móvil principal">
          <div className="px-4 pt-4 pb-3 space-y-1 sm:w-80 sm:border-r sm:h-full sm:shadow-md">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a 
                  key={item.name}
                  href={item.href} 
                  className={`flex items-center gap-3 px-3 py-4 rounded-md text-base font-medium border-b border-gray-100 transition-colors ${
                    isActive ? 'text-brand-orange bg-orange-50' : 'text-gray-700 hover:text-brand-orange hover:bg-gray-50'
                  }`}
                >
                  {item.icon && <item.icon size={20} />}
                  {item.name}
                </a>
              );
            })}
            <div className="pt-6">
              <Button variant="reserva">
                Reserva
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};