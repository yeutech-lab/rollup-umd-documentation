/**
 * Navigation Styleguide
 *
 * Navigation component for react-styleguidist project and rollup-documentation
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';

export const defaultProps = {
  theme: {
    navigationTop: {
      '$nav-top-height': '50px',
    },
  },
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
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  /**
   * @ignore
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const NavigationStyleguideUnstyled = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'navigation-top'), cssModule)}
      {...attributes}
    />
  );
};

NavigationStyleguideUnstyled.defaultProps = defaultProps;
NavigationStyleguideUnstyled.propTypes = propTypes;

/**
 * A navigation component. Wrap `<NavigationStyleguide />` around any html node or element as the menu links.
 */
const NavigationStyleguide = styled(NavigationStyleguideUnstyled)` 
  &.navigation-top {
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    background: #00acfc;
    text-align: center;
    display: table;
    margin: 0 auto;
    padding: 15px 0 15px 0;
  }
  &.navigation-top li {
    display: inline;
    padding: 0 15px 0 0;
  }
  &.navigation-top ul {
    list-style-type: none;
  }
  & a {
    color: white;
  }
`;
/* eslint-enable-line indent */
NavigationStyleguide.defaultProps = defaultProps;
NavigationStyleguide.propTypes = propTypes;

/** @component */
export default NavigationStyleguide;
