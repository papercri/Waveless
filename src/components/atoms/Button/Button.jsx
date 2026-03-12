import PropTypes from 'prop-types';

const variantStyles = {
  reserva: 'bg-brand-purple text-white px-8 py-2 rounded-full font-medium transition-colors hover:bg-white hover:text-brand-purple border-2 border-brand-purple',

  hero: 'bg-brand-orange text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors shadow-lg',

  card: 'bg-white border-2 border-brand-purple text-brand-purple font-medium px-6 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors',
};

export const Button = ({ children, variant = 'reserva', className = '', ...props }) => {
  return (
    <button
      className={`${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['reserva', 'hero', 'card']),
  className: PropTypes.string,
};
