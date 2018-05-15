import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Pre from 'bootstrap-styled/lib/Pre'; // eslint-disable-line no-unused-vars

export function PlaygroundErrorRenderer({ message }) {
  return <Pre>{message}</Pre>;
}

PlaygroundErrorRenderer.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PlaygroundErrorRenderer;
