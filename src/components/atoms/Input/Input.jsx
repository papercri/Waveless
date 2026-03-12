import PropTypes from 'prop-types';

export const Input = ({ id, value, onChange, placeholder, icon: Icon, ...props }) => (
  <div className="relative">
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-orange" />}
    <input
      id={id}
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
      inputMode="numeric"
      pattern="[0-9]*"
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
