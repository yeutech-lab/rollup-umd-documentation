import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import NavigationStyleguide from '@yeutech/navigation-bar/lib/NavigationStyleguide/NavigationStyleguide';
import Img from 'bootstrap-styled/lib/Img';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Logo from '../rsg-bs-components/Logo';
import LogoYeutech from '../static/logo-yeutech.svg';

export const defaultProps = {
  logo: {
    logo: <LogoYeutech />,
    href: 'https://www.yeutech.vn',
    target: '_blank',
    alt: 'Yeutech Company Limited logo',
  },
  theme: {
    styleguide: {
      '$rsg-sidebar-box-shadow': {
        xs: 'none',
        md: '8px 0 5px -2px #e2e2e2',
      },
      '$rsg-sidebar-linear-gradient': 'linear-gradient(#3A007D, #B31255)',
      '$rsg-sidebar-logo-padding': '30px 20px 0 20px',
      '$rsg-sidebar-logo-align': 'center',
      '$rsg-sidebar-logo-title-line-height': '1',
      '$rsg-sidebar-logo-title-word-wrap': 'break-word',
      '$rsg-sidebar-logo-svg-height': '35px',
      '$rsg-sidebar-logo-svg-margin': '0 0 0 -8px',
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
      '$rsg-sidebar-box-shadow': PropTypes.object,
      '$rsg-sidebar-linear-gradient': PropTypes.string,
      '$rsg-sidebar-logo-padding': PropTypes.string,
      '$rsg-sidebar-logo-align': PropTypes.string,
      '$rsg-sidebar-logo-title-line-height': PropTypes.string,
      '$rsg-sidebar-logo-title-word-wrap': PropTypes.string,
      '$rsg-sidebar-logo-svg-height': PropTypes.string,
      '$rsg-sidebar-logo-svg-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-import styled from 'styled-components';
to-css-modules" target="_blank">here</a>.
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
        <div className="logo-img">
          {typeof logo.logo === 'string' ? (
            <Img
              className="logo-img"
              src={`data:image/png;base64,${logo.logo}`}
              alt={logo.alt}
            />
          ) : (
            logo.logo
          )}
          <Logo className="navigation-logo-title">{title}</Logo>
        </div>
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
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      box-shadow: ${props.theme.styleguide['$rsg-sidebar-box-shadow'].xs};
    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
      box-shadow: ${props.theme.styleguide['$rsg-sidebar-box-shadow'].sm};
    `
  )}
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
          word-wrap: ${props.theme.styleguide['$rsg-sidebar-logo-title-word-wrap']};
        }
      }
    }
 `}
`;

SideBar.defaultProps = defaultProps;
SideBar.propTypes = propTypes;

export default SideBar;
