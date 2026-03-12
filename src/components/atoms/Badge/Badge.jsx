import PropTypes from 'prop-types';

export const Badge = ({ children, className = '' }) => (
  <span className={`bg-brand-orange text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow ${className}`.trim()}>
    {children}
  </span>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
