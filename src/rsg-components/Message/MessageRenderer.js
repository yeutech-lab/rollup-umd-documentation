import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

export function MessageRenderer({ children }) {
  return (
    <div>
      <Markdown text={Array.isArray(children) ? children.join('\n') : children} />
    </div>
  );
}

MessageRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageRenderer;
