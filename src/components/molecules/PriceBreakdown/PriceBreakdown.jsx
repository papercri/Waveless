import { X } from 'lucide-react';

export const PriceBreakdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-40 lg:hidden" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl z-50 p-4
        lg:absolute lg:top-auto lg:bottom-full lg:left-0 lg:translate-x-0 lg:translate-y-0 lg:-mb-2 lg:w-80 lg:shadow-xl lg:border lg:border-gray-100
      ">
        <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
          <h4 className="font-bold text-brand-dark">Desglose de precios</h4>
          <button onClick={onClose} className="text-gray-400 hover:text-brand-orange" aria-label="Cerrar desglose">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-sm font-bold text-brand-purple mb-4">Marruecos, África <span className="text-gray-500 font-normal">9 días</span></p>
        
        <div className="space-y-2 text-sm text-gray-600 border-b border-gray-100 pb-4 mb-2">
          <div className="flex justify-between">
            <span>Precio antes de impuestos</span>
            <span className="font-medium text-brand-dark">1.124,00 €</span>
          </div>
          <div className="flex justify-between">
            <span>Impuesto</span>
            <span className="font-medium text-brand-dark">4,43 €</span>
          </div>
          <div className="flex justify-between">
            <span>Lorem ipsum</span>
            <span className="font-medium text-brand-dark">150,42 €</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-brand-light rounded-lg">
          <span className="font-bold text-brand-dark">Precio final</span>
          <span className="font-bold text-lg text-brand-dark">2.455,00 €</span>
        </div>
      </div>
    </>
  );
};