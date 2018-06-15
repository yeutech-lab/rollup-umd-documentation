import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import NavigationStyleguide from '@yeutech/navigation-bar/lib/NavigationStyleguide/NavigationStyleguide';
import Img from 'bootstrap-styled/lib/Img';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Logo from '../rsg-bs-components/Logo';
import LogoYeutech from '../static/logo-yeutech.svg';
import config from '../../styleguide/config';

export const defaultProps = {
  className: null,
  logo: {
    logo: <LogoYeutech />,
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
      '$rsg-sidebar-logo-svg-height': '35px',
      '$rsg-sidebar-logo-svg-margin': '0 0 0 -8px',
    },
  },
};

/* eslint-disable react/no-unused-prop-types */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-sidebar-box-shadow': PropTypes.string,
      '$rsg-sidebar-linear-gradient': PropTypes.string,
      '$rsg-sidebar-logo-padding': PropTypes.string,
      '$rsg-sidebar-logo-align': PropTypes.string,
      '$rsg-sidebar-logo-title-line-height': PropTypes.string,
      '$rsg-sidebar-logo-svg-height': PropTypes.string,
      '$rsg-sidebar-logo-svg-margin': PropTypes.string,
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
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Set title to be rendered. */
  title: PropTypes.string.isRequired,
  /** Table of content elements to be rendered. */
  items: PropTypes.node.isRequired,
};
/* eslint-enable react/no-unused-prop-types */
const SideBarUnstyled = (props) => {
  const {
    className,
    cssModule,
    logo,
    title,
    items,
    ...attributes
  } = omit(props, ['theme']);

  const hasLayoutDefault = config.layout === 'default';
  const hasLayoutRouter = config.layout === 'router';

  const SidebarHeader = () => (
    <div className="navigation-logo">
      {hasLayoutDefault && (
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
      )}
      <Logo className="navigation-logo-title">{title}</Logo>
    </div>
  );

  const SidebarDefault = () => (
    <NavigationStyleguide
      className={mapToCssModules(cn(
        className,
        'navigation',
        { 'layout-default': hasLayoutDefault },
      ), cssModule)}
      {...attributes}
    >
      <SidebarHeader />
      {items}
    </NavigationStyleguide>
  );

  const SidebarRouter = () => (
    <div
      className={mapToCssModules(cn(
        className,
        'navigation',
        { 'layout-routeur': hasLayoutRouter },
      ), cssModule)}
      {...attributes}
    >
      <SidebarHeader />
      {items}
    </div>
  );
  return hasLayoutDefault ? <SidebarDefault /> : <SidebarRouter />;
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
        .logo-img {
          & svg {
            height: ${props.theme.styleguide['$rsg-sidebar-logo-svg-height']};
            margin: ${props.theme.styleguide['$rsg-sidebar-logo-svg-margin']};
          }
        }
        .navigation-logo-title {
          line-height: ${props.theme.styleguide['$rsg-sidebar-logo-title-line-height']};
        }
      }
    }
    &.navigation.layout-routeur {
      .navigation-logo {
        position: relative;
        width: 100%;
        height: 100px;
        background: ${props.theme.styleguide['$rsg-sidebar-linear-gradient']} !important;
        padding: ${props.theme.styleguide['$rsg-sidebar-logo-padding']};
        text-align: ${props.theme.styleguide['$rsg-sidebar-logo-align']};
        .logo-img {
          & svg {
            height: ${props.theme.styleguide['$rsg-sidebar-logo-svg-height']};
            margin: ${props.theme.styleguide['$rsg-sidebar-logo-svg-margin']};
          }
        }
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
