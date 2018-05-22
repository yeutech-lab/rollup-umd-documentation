import React from 'react';
import PropTypes from 'prop-types';
import Article from 'bootstrap-styled/lib/Article';

export function ExamplesRenderer({ children }) {
  return <Article>{children}</Article>;
}

ExamplesRenderer.propTypes = {
  children: PropTypes.node, // eslint-disable-line react/require-default-props
};

export default ExamplesRenderer;
