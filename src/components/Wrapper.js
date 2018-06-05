import React from 'react';
import PropTypes from 'prop-types';
const withRedux = require('./Wrappers/withRedux');
const withIntl = require('./Wrappers/withIntl');

const propTypes = {
  /** If passed, redux will be configured */
  reducer: PropTypes.func,
  /** If passed, react-intl.js will be configured */
  messages: PropTypes.object,
  /** Example will be passed as Wrapper children automatically. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const defaultProps = {
  reducer: null,
  messages: null,
};

export default class Wrapper extends React.PureComponent {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    hocList: [],
  };

  componentWillMount() {
    const { reducer, messages } = this.props;
    const hocList = [];
    if (reducer) {
      hocList.push(withRedux(reducer));
    }
    if (messages) {
      if (!reducer) {
        throw new Error('Wrapper: react-intl.js can\'t work with a reducer.');
      }
      const { locale } = reducer();
      if (!locale) {
        throw new Error('Wrapper: react-intl.js must have a locale set in redux store.');
      }
      hocList.push(withIntl(locale, messages));
    }
    this.setState({
      hocList,
    });
  }

  render() {
    const { children } = this.props;
    if (this.state.hocList.length === 0) {
      return <div>{children}</div>;
    }
    let Component = null;
    let cursor;
    // eslint-disable-next-line no-cond-assign
    while (cursor = this.state.hocList.shift()) {
      Component = cursor(Component || 'div');
    }
    return <Component>{children}</Component>;
  }
}

