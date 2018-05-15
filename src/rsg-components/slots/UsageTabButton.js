import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import TabButton from '../TabButton'; // eslint-disable-line no-unused-vars

const UsageTabButton = (props) => {
  const component = props.props;
  const showButton = component.props || (component.methods && component.methods.length > 0);
  return showButton ? <TabButton {...props}>Props & methods</TabButton> : null;
};

UsageTabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.shape({
    props: PropTypes.array,
    methods: PropTypes.array,
  }).isRequired,
  active: PropTypes.bool,
};

export default UsageTabButton;
