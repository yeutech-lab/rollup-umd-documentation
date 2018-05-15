import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

export function TextRenderer({
  semantic,
  size,
  color,
  underlined,
  children,
  ...props
}) {
  const Tag = semantic || 'span'; // eslint-disable-line no-unused-vars

  return (
    <Tag {...props}>
      {children}
    </Tag>
  );
}

TextRenderer.propTypes = {
  semantic: PropTypes.oneOf(['em', 'strong']),
  size: PropTypes.oneOf(['inherit', 'small', 'base', 'text']),
  color: PropTypes.oneOf(['base', 'light']),
  underlined: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TextRenderer.defaultProps = {
  size: 'inherit',
  color: 'base',
  underlined: false,
};

export default TextRenderer;
