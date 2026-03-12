import { Check } from 'lucide-react';
export function Checkbox({ checked, onChange, ...props }) {
  return (
    <div className="relative flex items-center justify-center w-5 h-5" role="checkbox" aria-checked={checked}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none w-5 h-5 border border-brand-dark rounded checked:bg-brand-orange checked:border-brand-dark focus:outline-none transition-colors cursor-pointer"
        aria-label="Seleccionar opción"
        {...props}
      />
      {checked && (
        <Check strokeWidth={3} className="absolute w-3 h-3 text-brand-dark pointer-events-none" />
      )}
    </div>
  );
}
