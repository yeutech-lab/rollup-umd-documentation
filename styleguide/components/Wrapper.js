/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Wrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  render() {
    return <div {...this.props} />;
  }
}
