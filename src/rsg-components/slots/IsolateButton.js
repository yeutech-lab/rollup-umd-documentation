import React from 'react'; // eslint-disable-line no-unused-vars
import '!!style-loader!css-loader!../../../node_modules/font-awesome/css/font-awesome.css'; // eslint-disable-line import/no-webpack-loader-syntax
import PropTypes from 'prop-types';
import Fa from 'bootstrap-styled/lib/Fa'; // eslint-disable-line no-unused-vars
import getUrl from 'react-styleguidist/lib/utils/getUrl';
import ToolbarButton from '../ToolbarButton'; // eslint-disable-line no-unused-vars

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
  example: PropTypes.number,
  isolated: PropTypes.bool,
};

export default IsolateButton;
