import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Code from 'bootstrap-styled/lib/Code'; // eslint-disable-line no-unused-vars

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
  deprecated: PropTypes.bool,
};

export default NameRenderer;
