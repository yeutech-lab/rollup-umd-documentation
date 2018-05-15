import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import RibbonRenderer from './RibbonRenderer'; // eslint-disable-line no-unused-vars

export default function Ribbon(props, { config }) {
  const { ribbon } = config;
  return ribbon ? <RibbonRenderer {...ribbon} /> : null;
}

Ribbon.contextTypes = {
  config: PropTypes.object,
};
