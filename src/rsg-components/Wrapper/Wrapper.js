import { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onError: PropTypes.func.isRequired,
  };

  componentDidCatch(error) {
    this.props.onError(error);
  }

  render() {
    return this.props.children;
  }
}
