import PropTypes from 'prop-types';

export const Input = ({ id, value, onChange, placeholder, icon: Icon, ...props }) => (
  <div className="relative" role="textbox" aria-label={placeholder}>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark transform -scale-x-100" />}
    <input
      id={id}
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-brand-dark rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-brand-orange focus:ring-brand-orange appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      inputMode="numeric"
      pattern="[0-9]*"
      aria-label={placeholder}
      {...props}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.elementType,
};
