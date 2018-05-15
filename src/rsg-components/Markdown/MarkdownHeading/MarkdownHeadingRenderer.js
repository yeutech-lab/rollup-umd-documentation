import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Heading from '../../Heading'; // eslint-disable-line no-unused-vars

function MarkdownHeadingRenderer({ level, children }) {
  return (
    <div>
      <Heading level={level}>{children}</Heading>
    </div>
  );
}

MarkdownHeadingRenderer.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
};

export default MarkdownHeadingRenderer;
