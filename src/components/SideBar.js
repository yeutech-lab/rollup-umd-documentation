import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import NavigationStyleguide from 'navigation-bar/lib/NavigationStyleguide/NavigationStyleguide';
import Img from 'bootstrap-styled/lib/Img';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import A from 'bootstrap-styled/lib/A';
import Logo from '../rsg-components/Logo';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-sidebar-box-shadow': '8px 0 5px -2px #e2e2e2',
      '$rsg-sidebar-linear-gradient': 'white',
      '$rsg-sidebar-logo-padding': '30px 0 10px 0',
      '$rsg-sidebar-logo-align': 'center',
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
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
  logo: PropTypes.object, // eslint-disable-line react/require-default-props
  title: PropTypes.string, // eslint-disable-line react/require-default-props
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
        {logo.logoHref ? (
          <A
            href={logo.logoHref}
            target="_blank"
            alt="Yeutech Company Limited"
            title="Yeutech Company Limited"
          >
            <Img
              src={`data:image/png;base64,${logo.logo}`}
              height="70px"
              alt={logo ? 'Yeutech Company Limited logo' : 'logo'}
              title={logo ? 'Yeutech Company Limited' : 'Brand logo'}
            />
          </A>
        ) : (
          <Img
            src={`data:image/png;base64,${logo.logo}`}
            height="70px"
            alt={logo ? 'Yeutech Company Limited logo' : 'logo'}
            title={logo ? 'Yeutech Company Limited' : 'Brand logo'}
          />
        )}
        <Logo>{title}</Logo>
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
      }
    }
 `}
`;

SideBar.defaultProps = defaultProps;
SideBar.propTypes = propTypes;

export default SideBar;
