import React from 'react';
import '!!style-loader!css-loader!../../../node_modules/font-awesome/css/font-awesome.css'; // eslint-disable-line import/no-webpack-loader-syntax
import PropTypes from 'prop-types';
import Fa from 'bootstrap-styled/lib/Fa';
import getUrl from 'react-styleguidist/lib/utils/getUrl';
import ToolbarButton from '../ToolbarButton';

const IsolateButton = ({ name, example, isolated }) =>
  isolated ? (
    <ToolbarButton href={getUrl({ anchor: true, slug: '/' })} title="Show all components">
      <Fa angle-double-left />
    </ToolbarButton>
  ) : (
    <ToolbarButton href={getUrl({ name, example, isolated: true })} title="Open isolated">
      <Fa arrows-alt />
    </ToolbarButton>
  );

IsolateButton.propTypes = {
  name: PropTypes.string.isRequired,
  example: PropTypes.number, // eslint-disable-line react/require-default-props
  isolated: PropTypes.bool, // eslint-disable-line react/require-default-props
};

export default IsolateButton;
