import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const provider = require('../../optionalDependencies/react-redux/components/Provider');
const redux = require('../../optionalDependencies/redux');

let HoC = () => () => (props) => props.children;

if (redux && provider) {
  const { createStore, applyMiddleware, compose } = redux;
  const { default: Provider } = provider;
  HoC = (reducer) => (Component) => {
    class WrapperRedux extends PureComponent {
      static propTypes = {
        children: PropTypes.node.isRequired,
      };

      state = {
        store: null,
      }

      /* eslint-disable no-underscore-dangle, function-paren-newline */
      componentWillMount() {
        const middleware = [];
        const composeEnhancers =
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

        const enhancer = composeEnhancers(applyMiddleware(...middleware),
          // other store enhancers if any
        );

        const store = createStore(reducer, enhancer);
        this.setState({
          store,
        });
      }
      /* eslint-enable no-underscore-dangle, function-paren-newline */

      render() {
        return (
          <Provider store={this.state.store}>
            <Component {...this.props} />
          </Provider>
        );
      }
    }
    return WrapperRedux;
  };
}

module.exports = HoC;
