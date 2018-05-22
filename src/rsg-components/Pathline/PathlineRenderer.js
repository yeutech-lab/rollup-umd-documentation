import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import Fa from 'bootstrap-styled/lib/Fa';
import '!!style-loader!css-loader!../../../node_modules/font-awesome/css/font-awesome.css'; // eslint-disable-line import/no-webpack-loader-syntax
import ToolbarButton from '../ToolbarButton';

export function PathlineRenderer({ children }) {
  return (
    <div>
      {children}
      <ToolbarButton
        onClick={() => copy(children)}
        title="Copy to clipboard"
      >
        <Fa copy />
      </ToolbarButton>
    </div>
  );
}

PathlineRenderer.propTypes = {
  children: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default PathlineRenderer;
