import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Button from 'bootstrap-styled/lib/Button'; // eslint-disable-line no-unused-vars

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

TabButtonRenderer.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default TabButtonRenderer;
