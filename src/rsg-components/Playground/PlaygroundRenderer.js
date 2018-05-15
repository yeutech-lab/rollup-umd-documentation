import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

export function PlaygroundRenderer({
  name,
  preview,
  previewProps,
  tabButtons,
  tabBody,
  toolbar,
}) {
  const { ...props } = previewProps;

  return (
    <div>
      <div {...props} data-preview={name}>
        {preview}
      </div>
      <div>
        <div>{tabButtons}</div>
        <div>{toolbar}</div>
      </div>
      <div>{tabBody}</div>
    </div>
  );
}

PlaygroundRenderer.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.node.isRequired,
  previewProps: PropTypes.object.isRequired,
  tabButtons: PropTypes.node.isRequired,
  tabBody: PropTypes.node.isRequired,
  toolbar: PropTypes.node.isRequired,
};

export default PlaygroundRenderer;
