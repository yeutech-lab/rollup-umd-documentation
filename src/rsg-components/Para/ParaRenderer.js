import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

export function ParaRenderer({ children }) {
  return <div>{children}</div>;
}

ParaRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ParaRenderer;
