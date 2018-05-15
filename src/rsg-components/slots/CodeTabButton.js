import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import TabButton from '../TabButton'; // eslint-disable-line no-unused-vars

const CodeTabButton = (props) => <TabButton {...props}>View Code</TabButton>;

CodeTabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default CodeTabButton;
