/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Provider from 'react-redux/lib/components/Provider';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory'
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import StyleGuideRenderer from '../../rsg-bs-components/StyleGuide/StyleGuideRenderer';
import NavigationStyleguide from '../NavigationStyleguide';


// Router
const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  enhancer
);

export const propTypes = {
  /** @ignore */
  className: PropTypes.string,
  /** The documentation title */
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  /** TBD */
  toc: PropTypes.node.isRequired,
  /** define if the sidebar should be displayed */
  hasSidebar: PropTypes.bool.isRequired,
  /** Logo to use in sidebar menu */
  logo: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  social: PropTypes.array,
};

class LayoutRouter extends Component {
  static propTypes = propTypes;

  state = {
    routes: {},
  };

  componentWillMount() {
    this.createRoutes(this.props.routes);
  }

  createRoutes(routesList) {
    const flatList = [];
    function addToFlatList(list) {
      list.forEach((item) => {
        flatList.push(item);
        return item.childRoutes && addToFlatList(item.childRoutes);
      });
    }
    addToFlatList(routesList);
    this.setState({
      routes: flatList.map((item) => {
        if (item.components === 'STYLEGUIDE_SECTION') {
          return <Route key={item.name} exact path={item.path} component={() => this.renderStyleguide()} />
        }
        if (item.components !== 'STYLEGUIDE_SECTION') {
          return <Route key={item.name} exact path={item.path} component={() => item.components} />
        }
        if (item.childRoutes) {
          item.childRoutes.map((childRoute) => {
            return <Route key={childRoute.name} exact path={childRoute.path} component={() => childRoute.components} />;
          })
        }
      }),
    });
  }
  renderStyleguide = () => (
    <StyleGuideRenderer
      className={this.props.className}
      title={this.props.title}
      logoMenu={this.props.logoMenu}
      logoFooter={this.props.logoFooter}
      toc={this.props.toc}
      hasSidebar={this.props.hasSidebar}
    >
      {this.props.children}
    </StyleGuideRenderer>
  );
  render() {
    const {
      routes,
      logo,
      title,
      social,
    } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <NavigationStyleguide
              routes={routes}
              logo={logo}
              title={title}
              social={social}
            />
            {this.state.routes}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default LayoutRouter;
