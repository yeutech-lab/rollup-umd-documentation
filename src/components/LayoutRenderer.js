/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import Provider from 'react-redux/lib/components/Provider';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { Route, Switch, hashHistory } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
require('!!../../loaders/style-loader!../../loaders/css-loader!../../node_modules/font-awesome/css/font-awesome.css'); // eslint-disable-line import/no-webpack-loader-syntax
import theme from '../theme';
import StyleGuideRenderer from '../rsg-bs-components/StyleGuide/StyleGuideRenderer';
import NavigationStyleguide from './NavigationStyleguide';
import Link from './Link';
import whiteLogo from '../static/badge-yeutech';
import defaultLogo from '../static/badge-yeutech';
// import { jsonExtension } from '../styleguide.config.js'

// Router
const history = createHistory();
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

// navigation rollup

// console.log(jsonExtension);
/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
   theme, className, title, children, toc, hasSidebar, logo, logoHref, bottomLogoHref
 }) {
  return (
    <BootstrapProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <NavigationStyleguide>
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/documentation">/documentation</Link></li>
              </ul>
            </NavigationStyleguide>
            <Route exact path="/" component={() => (
              <div>home</div>
            )}/>
            <Route exact path="/documentation" component={() => (
              <StyleGuideRenderer
                className={className}
                title={title}
                homepageUrl={bottomLogoHref}
                toc={toc}
                hasSidebar={hasSidebar}
                logo={logo}
                logohref={logoHref}
              >
                {children}
              </StyleGuideRenderer>
            )}/>
          </div>
        </ConnectedRouter>
      </Provider>
    </BootstrapProvider>
  );
}

LayoutRenderer.defaultProps = {
  title: 'rollup-documentation',
  logo: whiteLogo,
  logoHref: null,
  bottomLogo: defaultLogo,
  bottomLogoHref: 'https://www.yeutech.vn',
  bottomLogoText: '',
  className: null,
  children: <div>Children Example</div>,
  toc: <div>Table of contents Example</div>,
  theme,
};

LayoutRenderer.propTypes = {
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** The documentation title */
  title: PropTypes.string.isRequired,
  /** TBD */
  toc: PropTypes.node.isRequired,
  /** theme to be used by BootstrapProvider */
  theme : PropTypes.object,
  /** define if the sidebar should be displayed */
  hasSidebar: PropTypes.bool,
  /** define the logo used by the layout */
  logo: PropTypes.string,
  /** logo link */
  logoHref: PropTypes.string,
  /** define the bottom logo used by the layout */
  bottomLogo: PropTypes.string,
  /** bottom logo link */
  bottomLogoHref: PropTypes.string,
  /** text prefix of bottom logo */
  bottomLogoText: PropTypes.string,
};

export default LayoutRenderer;

