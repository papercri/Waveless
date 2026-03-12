export const Pagination = () => {
  return (
    <nav className="flex justify-center items-center space-x-2 mt-12" aria-label="Paginación">
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-50" disabled aria-label="Página anterior">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-orange text-white font-medium" aria-current="page">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 font-medium">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 font-medium">3</button>
      <span className="text-gray-500">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 font-medium">8</button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100" aria-label="Página siguiente">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </nav>
  );
};