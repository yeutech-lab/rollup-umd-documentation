import React from 'react';
import PropTypes from 'prop-types';
import A from 'bootstrap-styled/lib/A';

export function RibbonRenderer({ url, text }) {
  return (
    <A href={url}>
      {text}
    </A>
  );
}

RibbonRenderer.defaultProps = {
  text: 'Fork me on GitHub',
};

RibbonRenderer.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default RibbonRenderer;
