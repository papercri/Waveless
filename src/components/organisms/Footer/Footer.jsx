export const Footer = () => {
  return (
    <footer className="footer bg-brand-light pt-12 mt-16 flex flex-col items-center">
      <div className="mb-8">
        <a href="/" aria-label="Ir a inicio">
          <span className="text-2xl font-bold text-brand-purple flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">W</div>
            waveless
          </span>
        </a>
      </div>
      <div className="w-full bg-[#E5DDE5] py-4 text-center">
        <p className="text-xs font-medium text-brand-purple">
          @2024 Waveless - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};