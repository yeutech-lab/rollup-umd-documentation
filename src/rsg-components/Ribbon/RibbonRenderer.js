import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import A from 'bootstrap-styled/lib/A'; // eslint-disable-line no-unused-vars

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
