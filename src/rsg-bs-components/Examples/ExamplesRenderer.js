import React from 'react';
import PropTypes from 'prop-types';
import Article from 'bootstrap-styled/lib/Article';

export function ExamplesRenderer({ children }) {
  return <Article>{children}</Article>;
}

ExamplesRenderer.propTypes = {
  /** Specified node element will be passed as children of `<ExamplesRenderer />` component. */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
};

export default ExamplesRenderer;
