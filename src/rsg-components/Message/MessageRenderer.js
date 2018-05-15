import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars

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
