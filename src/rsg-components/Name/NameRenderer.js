import React from 'react';
import PropTypes from 'prop-types';
import Code from 'bootstrap-styled/lib/Code';

export function NameRenderer({
  children,
  deprecated, // eslint-disable-line no-unused-vars
}) {
  return (
    <span>
      <Code>{children}</Code>
    </span>
  );
}

NameRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
};

export default NameRenderer;
