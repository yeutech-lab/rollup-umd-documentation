import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import NavigationStyleguide from '@yeutech/navigation-bar/lib/NavigationStyleguide/NavigationStyleguide';
import Img from 'bootstrap-styled/lib/Img';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Logo from '../rsg-components/Logo';
import LogoYeutech from '../static/logo-yeutech.svg';

export const defaultProps = {
  logo: {
    logo: <LogoYeutech />,
    height: '43px',
    href: 'https://www.yeutech.vn',
    target: '_blank',
    text: 'Yeutech Company Limited',
    alt: 'Yeutech Company Limited logo',
  },
  theme: {
    styleguide: {
      '$rsg-sidebar-box-shadow': '8px 0 5px -2px #e2e2e2',
      '$rsg-sidebar-linear-gradient': 'linear-gradient(#3A007D, #B31255)',
      '$rsg-sidebar-logo-padding': '30px 20px 0 20px',
      '$rsg-sidebar-logo-align': 'center',
      '$rsg-sidebar-logo-title-line-height': '1',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-sidebar-box-shadow': PropTypes.string,
      '$rsg-sidebar-linear-gradient': PropTypes.string,
      '$rsg-sidebar-logo-padding': PropTypes.string,
      '$rsg-sidebar-logo-align': PropTypes.string,
      '$rsg-sidebar-logo-title-line-height': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
  /** Logo attributes in order to render logo. */
  logo: PropTypes.shape({
    logo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    height: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Set title to be rendered. */
  title: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Table of content elements to be rendered. */
  items: PropTypes.node, // eslint-disable-line react/require-default-props
};

const SideBarUnstyled = (props) => {
  const {
    className,
    cssModule,
    logo,
    title,
    items,
    ...attributes
  } = omit(props, ['theme']);
  return (
    <NavigationStyleguide
      className={mapToCssModules(cn(className, 'navigation'), cssModule)}
      {...attributes}
    >
      <div className="navigation-logo">
        {typeof logo.logo === 'string' ? (
          <Img
            className="rsg-footer-img"
            src={`data:image/png;base64,${logo.logo}`}
            height={logo.height || ''}
            alt={logo.text || 'logo'}
          />
        ) : (
          logo.logo
        )}
        <Logo className="navigation-logo-title">{title}</Logo>
      </div>
      {items}
    </NavigationStyleguide>
  );
};

SideBarUnstyled.defaultProps = defaultProps;
SideBarUnstyled.propTypes = propTypes;

const SideBar = styled(SideBarUnstyled)` 
  ${(props) => `
    &.navigation {
      box-shadow: ${props.theme.styleguide['$rsg-sidebar-box-shadow']};
      .navigation-logo {
        background: ${props.theme.styleguide['$rsg-sidebar-linear-gradient']} !important;
        padding: ${props.theme.styleguide['$rsg-sidebar-logo-padding']};
        text-align: ${props.theme.styleguide['$rsg-sidebar-logo-align']};
        .navigation-logo-title {
          line-height: ${props.theme.styleguide['$rsg-sidebar-logo-title-line-height']};
        }
      }
    }
 `}
`;

SideBar.defaultProps = defaultProps;
SideBar.propTypes = propTypes;

export default SideBar;
