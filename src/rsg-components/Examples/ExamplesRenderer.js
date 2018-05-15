import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Article from 'bootstrap-styled/lib/Article'; // eslint-disable-line no-unused-vars

export function ExamplesRenderer({ children }) {
  return <Article>{children}</Article>;
}

ExamplesRenderer.propTypes = {
  children: PropTypes.node,
};

export default ExamplesRenderer;
