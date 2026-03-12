import PropTypes from 'prop-types';

export function FilterOption({ label, icon, children }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group/label" aria-label={`Opción de filtro: ${label}`} role="option">
      {icon}
      <span className="text-sm text-gray-600 group-hover/label:text-brand-dark flex items-center justify-start w-full">
        {label}
        {children}
      </span>
    </label>
  );
}

FilterOption.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  children: PropTypes.node,
};
