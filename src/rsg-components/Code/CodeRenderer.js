import React from 'react';
import PropTypes from 'prop-types';
import Code from 'bootstrap-styled/lib/Code';

export function CodeRenderer({ className, children }) {
  const isHighlighted = className && className.indexOf('lang-') !== -1;
  if (isHighlighted) {
    return <Code className={className} dangerouslySetInnerHTML={{ __html: children }} />;
  }
  return <Code className={className}>{children}</Code>;
}

CodeRenderer.propTypes = {
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node, // eslint-disable-line react/require-default-props, react/no-unused-prop-types
};

export default CodeRenderer;
