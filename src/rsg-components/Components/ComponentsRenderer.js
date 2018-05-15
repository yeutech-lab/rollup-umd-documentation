import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

export default function ComponentsRenderer({ children }) {
  return <div>{children}</div>;
}
ComponentsRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};
