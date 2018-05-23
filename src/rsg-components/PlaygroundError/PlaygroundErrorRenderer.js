import React from 'react';
import PropTypes from 'prop-types';
import Pre from 'bootstrap-styled/lib/Pre';

export function PlaygroundErrorRenderer({ message }) {
  return <Pre>{message}</Pre>;
}

PlaygroundErrorRenderer.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PlaygroundErrorRenderer;
