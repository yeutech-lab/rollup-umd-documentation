import React from 'react';
import PropTypes from 'prop-types';
import Button from 'bootstrap-styled/lib/Button';

export function TabButtonRenderer({
  name,
  onClick,
  active, // eslint-disable-line no-unused-vars
  children,
}) {
  return (
    <Button name={name} onClick={onClick}>
      {children}
    </Button>
  );
}
/* eslint-disable react/require-default-props */
TabButtonRenderer.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
};
/* eslint-enable react/require-default-props */
export default TabButtonRenderer;
