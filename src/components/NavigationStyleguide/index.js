/**
 * Navigation Styleguide
 *
 * Navigation component for react-styleguidist project and rollup-documentation
 */

import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'bootstrap-styled/lib/Nav';
import NavItem from 'bootstrap-styled/lib/Nav/NavItem';
import NavLink from 'bootstrap-styled/lib/Nav/NavLink';
import Img from 'bootstrap-styled/lib/Img';
import A from 'bootstrap-styled/lib/A';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import Link from '../Link';

export const defaultProps = {
  theme: {
    navigationTop: {
      '$nav-top-height': '50px',
    },
  },
  social: [
    {
      name: 'yeutech',
      description: 'Yeutech',
      logo: null,
      href: 'https://www.yeutech.com',
      alt: 'Link to Yeutech website.',
      target: '_blank',
    },
  ],
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  /**
   * @ignore
   */
  theme: PropTypes.shape({
    navigationStyleguide: PropTypes.shape({
      '$nav-top-height': PropTypes.string,
    }),
  }),
  /** Logo to use in navigation menu */
  logo: PropTypes.object.isRequired,
  /** List used to display routes links. */
  routes: PropTypes.array.isRequired,
  /** List used to display social media links. */
  social: PropTypes.array,
  /** The documentation title */
  title: PropTypes.string.isRequired,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  /**
   * @ignore
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

class NavigationStyleguideUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    routeList: [],
    mainLinks: [],
    subLinks: [],
    socialLinks: [],
  }
  componentWillMount() {
    this.updateRoutes(this.props.routes, () => {
      const newState = {};
      this.state.routeList.forEach(({ name }) => {
        newState[`${name}-is-active`] = false;
      });
      this.setState(newState);
    });
  }
  componentDidMount() {
    this.createMainLinks(this.props.routes);
    this.createSubLinks(this.props.routes);
    this.createSocialLinks(this.props.social);
  }
  shouldComponentUpdate(nextState) {
    return (JSON.stringify(this.state) !== JSON.stringify(nextState));
  }

  onActiveMainLink = (name) => {
    const newState = {};
    newState[`${name}-is-active`] = true;
    this.setState(newState);
  };

  onDisableMainLink = () => {
    this.updateRoutes(this.props.routes, () => {
      const newState = {};
      this.state.routeList.forEach(({ name }) => {
        newState[`${name}-is-active`] = false;
      });
      this.setState(newState);
    });
  }
  updateRoutes(routes, cb) {
    this.setState({
      routeList: routes.filter((route) => route.name),
    }, cb);
  }
  createMainLinks(routesList) {
    this.setState({
      mainLinks: routesList.map((route) => {
        if (route.components) {
          return (
            <Nav key={route.name} className="main-routes">
              <NavItem className="main-route">
                <NavLink
                  onMouseEnter={() => this.onActiveMainLink(route.name)}
                  onClick={() => this.onDisableMainLink()}
                  tag={Link}
                  to={route.path}
                >
                  {route.description}
                </NavLink>
              </NavItem>
            </Nav>
          );
        }
        return null;
      }),
    });
  }
  createSubLinks(routes) {
    this.setState({
      subLinks: routes.map((route) => {
        if (route.childRoutes) {
          return (
            <div key={route.name} className="sub-navigation">
              {route.childRoutes.map((childRoute) => (
                <Nav className="sub-routes">
                  <NavItem className="sub-route">
                    <NavLink
                      tag={Link}
                      to={childRoute.path}
                    >
                      {childRoute.description}
                    </NavLink>
                  </NavItem>
                </Nav>
              ))}
            </div>
          );
        }
        return null;
      }),
    });
  }
  createSocialLinks(array) {
    this.setState({
      socialLinks: array.map((link) => (
        <A key={link.name} href={link.href} alt={link.alt} target={link.target}>{link.description}</A>
      )),
    });
  }
  render() {
    const {
      className,
      cssModule,
      routes,
      logo,
      ...attributes
    } = omit(this.props, ['theme', 'social']);

    return (
      <div
        className={mapToCssModules(cn(className, 'navigation-top'), cssModule)}
        {...attributes}
      >
        <div className="navigation-top-header">
          <div className="logo-img">
            {typeof logo.logo === 'string' ? (
              <Img
                className="logo-img"
                src={`data:image/png;base64,${logo.logo}`}
                alt={logo.text || 'logo'}
              />
            ) : (
              logo.logo
            )}
          </div>
          <div className="main-navigation">
            {this.state.mainLinks}
          </div>
          <div className="social-links">
            {this.state.socialLinks}
          </div>
        </div>
        <div onMouseLeave={() => this.onDisableMainLink()}>
          {routes.map((route) => (
            this.state[`${route.name}-is-active`] === true && route.childRoutes && this.state.subLinks
          ))}
        </div>
      </div>
    );
  }
}

/**
 * A navigation component. Wrap `<NavigationStyleguide />` around any html node or element as the menu links.
 */
const NavigationStyleguide = styled(NavigationStyleguideUnstyled)` 
    &.navigation-top {
      top: 0;
      left: 0;
      .navigation-top-header {
        padding: 10px 0 0 0;
        border-bottom: 1px solid #CCCCCC;
        display: inline-block;
        height: 70px;
        width: 100%;
        .logo-img {
          display: inline-block;
          width: 20%
          & svg {
            height: 25px;
            position: absolute;
            top: 20px;
          }
        }
        .main-navigation {
          width: 50%;
          background: #fff;
          display: table;
          margin: 0 auto;
          padding: 4px 0 15px 0;
          display: inline-block;
          top: 0
          .main-routes {
            list-style: none;
            display: inline-block;
            .main-route {
              display: inline-block;
              .main-link {
                display: cell;
                padding: 0 10px;
              }
            }
          }
        }
        .social-links {
          width: 30%
          display: inline-block;
          & a {
            font-size: 13px;
            display: cell;
            padding: 0 10px;
          }
        }
      }
      
      .sub-navigation {
        z-index: 9000;
        left: 0
        position: absolute;
        height: 50px;
        width: 100%;
        background: #CCCCCC;
        display: table;
        margin: 0 auto;
        display: inline-block;
        padding: 5px 0 0 20%;
        .sub-routes {
          display: inline-block;
          .sub-route {
            display: inline-block;
          }
        }
      }
    }
    & a {
      color: #636363;
    }
  }
`;
/* eslint-enable-line indent */
NavigationStyleguide.defaultProps = defaultProps;
NavigationStyleguide.propTypes = propTypes;

/** @component */
export default NavigationStyleguide;
