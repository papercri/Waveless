import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header border-b border-brand-gray bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="header__logo flex-shrink-0 flex items-center">
            {/* Placeholder del Logo */}
            <a href="/" aria-label="Ir a inicio">
              <span className="text-2xl font-bold text-brand-purple flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">W</div>
                waveless
              </span>
            </a>
          </div>

          {/* Navegación Desktop */}
          <nav className="header__nav hidden md:flex space-x-8" aria-label="Navegación principal">
            <a href="#aventura" className="text-gray-700 hover:text-brand-orange flex items-center gap-2 font-medium">
              <span aria-hidden="true">⛰️</span> Aventura
            </a>
            <a href="#destinos" className="text-gray-700 hover:text-brand-orange flex items-center gap-2 font-medium">
              <span aria-hidden="true">🌎</span> Destinos
            </a>
            <a href="#alojamiento" className="text-gray-700 hover:text-brand-orange flex items-center gap-2 font-medium">
              <span aria-hidden="true">🏨</span> Alojamiento
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-brand-orange font-medium">
              Sobre nosotros
            </a>
          </nav>

          {/* Botón Reserva Desktop */}
          <div className="hidden md:flex items-center">
            <button className="btn-primary">
              Reserva
            </button>
          </div>

          {/* Botón Hamburguesa Móvil/Tablet */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-orange hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
              {/* Icono Hamburguesa / Cerrar (SVG simple) */}
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil / Tablet (Offcanvas/Dropdown) */}
      {isMenuOpen && (
        <div 
          className="header__mobile-menu md:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-t border-brand-gray shadow-xl" 
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-3 space-y-1 sm:w-80 sm:border-r sm:h-full sm:shadow-md">
            <a href="#aventura" className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 border-b border-gray-100">
              Aventura
            </a>
            <a href="#destinos" className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 border-b border-gray-100">
              Destinos
            </a>
            <a href="#alojamiento" className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 border-b border-gray-100">
              Alojamiento
            </a>
            <a href="#nosotros" className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 border-b border-gray-100">
              Sobre nosotros
            </a>
            <div className="pt-6">
              <button className="btn-primary w-full">
                Reserva
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};