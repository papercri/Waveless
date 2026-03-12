export const FilterSidebar = ({ isOpen, onClose }) => {
  // Clases base combinando BEM y Tailwind. 
  // En móvil ocupa toda la pantalla (fixed), en desktop es un bloque normal relativo al grid.
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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="p-4 lg:p-6 bg-brand-light rounded-2xl">
        <h3 className="hidden lg:block text-xl font-bold text-brand-dark mb-6">Filtrar mi búsqueda</h3>

        {/* Grupo: Destinos */}
        <div className="border-b border-gray-200 py-4">
          <button className="flex w-full items-center justify-between text-left focus:outline-none" aria-expanded="false">
            <span className="flex items-center gap-2 font-medium text-brand-dark">
              <span aria-hidden="true">🌎</span> Destinos
            </span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Grupo: Aventura (Expandido por defecto) */}
        <div className="border-b border-gray-200 py-4">
          <button className="flex w-full items-center justify-between text-left focus:outline-none mb-4" aria-expanded="true">
            <span className="flex items-center gap-2 font-medium text-brand-orange">
              <span aria-hidden="true">⛰️</span> Aventura
            </span>
            <svg className="w-5 h-5 text-brand-orange transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          
          <div className="space-y-3 pl-6">
            {['Quads', 'Parapente', 'Rafting', 'Explora', 'Buceo', 'Paracaídas', 'Snowboard', 'Surf'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border border-gray-300 rounded checked:bg-brand-orange checked:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-1 transition-colors" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-brand-dark">{item}</span>
              </label>
            ))}
            <button className="text-sm text-brand-purple underline mt-2 hover:text-brand-orange">Ver 21 más</button>
          </div>
        </div>

        {/* Grupo: Alojamiento */}
        <div className="border-b border-gray-200 py-4">
          <button className="flex w-full items-center justify-between text-left focus:outline-none" aria-expanded="false">
            <span className="flex items-center gap-2 font-medium text-brand-dark">
              <span aria-hidden="true">🏨</span> Alojamiento
            </span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Grupo: Precio */}
        <div className="py-4">
          <button className="flex w-full items-center justify-between text-left focus:outline-none mb-4" aria-expanded="true">
            <span className="flex items-center gap-2 font-medium text-brand-orange">
              <span aria-hidden="true">🏷️</span> Precio
            </span>
            <svg className="w-5 h-5 text-brand-orange transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="flex flex-col gap-3">
            <input type="text" placeholder="Mínimo" className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange" />
            <input type="text" placeholder="Máximo" className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange" />
          </div>
        </div>
      </div>
      
      {/* Botón Aplicar solo en móvil */}
      <div className="lg:hidden p-4 border-t border-gray-200 bg-white mt-auto">
        <button onClick={onClose} className="btn-primary w-full">Aplicar filtros</button>
      </div>
    </aside>
  );
};