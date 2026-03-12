export const Footer = () => {
  return (
    <footer className="footer bg-brand-light pt-12 mt-16 flex flex-col items-center" role="contentinfo" aria-label="Pie de página">
      <div className="mb-8">
        <a href="/" aria-label="Ir a inicio">
          <span className="text-2xl font-bold text-brand-purple flex items-center gap-2">
            <img 
              src="/logoWaveless.png" 
              alt="Logo Waveless" 
              className="h-8 w-auto object-contain"
            />
          </span>
        </a>
      </div>
      <div className="w-full bg-[#E5DDE5] py-4 text-center">
        <p className="text-xs font-medium text-brand-purple">
          @{new Date().getFullYear()} Waveless - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};