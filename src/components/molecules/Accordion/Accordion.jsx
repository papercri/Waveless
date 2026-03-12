import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Accordion({ open, onToggle, icon, title, children }) {
  return (
    <div className="py-4" role="region" aria-label={`Sección: ${title}`}> 
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none group"
        aria-expanded={open}
        aria-controls={`accordion-content-${title}`}
        onClick={onToggle}
      >
        <span className={`flex items-center gap-2 font-medium transition-colors ${open ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-orange'}`}>
          {icon && <span aria-hidden="true">{icon}</span>}
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-orange" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-dark" />
        )}
      </button>
      {open && (
        <div id={`accordion-content-${title}`}>{children}</div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
