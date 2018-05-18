/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
// import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import cn from 'classnames';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import NavigationStyleguide from 'navigation-bar/lib/NavigationStyleguide/NavigationStyleguide';
import Img from 'bootstrap-styled/lib/Img';
import Footer from 'bootstrap-styled/lib/Footer';
import A from 'bootstrap-styled/lib/A';
import styled from 'styled-components';
import theme from '../theme';
import defaultLogo from './logo';
import Logo from '../rsg-components/Logo';

export const Main = styled.main`
  margin-left: 300px;
`;

/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
   theme, className, title, children, toc, hasSidebar, logo, bottomLogo, bottomLogoText, logoHref, bottomLogoHref
 }) {
  return (
    <BootstrapProvider theme={theme}>
      {hasSidebar && (
        <NavigationStyleguide>
          {logoHref ? (
            <A
              href={logoHref}
              target="_blank"
              alt="Yeutech Company Limited"
              title="Yeutech Company Limited"
            >
              <Img
                src={`data:image/png;base64,${logo}`}
                height="70px"
                alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
              />
            </A>
          ) : (
            <Img
              src={`data:image/png;base64,${logo}`}
              height="70px"
              alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
              title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
            />
          )}
          <Logo>{title}</Logo>
          {toc}
        </NavigationStyleguide>
      )}
      <div className={cn(className)}>
        <Main>
          {children}
          <Footer>
            <span>{bottomLogoText}</span>
            <A
              href={bottomLogoHref}
              target="_blank"
              alt="Yeutech Company Limited"
              title="Yeutech Company Limited"
            >
              <Img
                src={`data:image/png;base64,${bottomLogo}`}
                height="55px"
                alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
              />
            </A>
          </Footer>
        </Main>
      </div>
    </BootstrapProvider>
  );
}

LayoutRenderer.defaultProps = {
  logo: defaultLogo,
  logoHref: null,
  bottomLogo: defaultLogo,
  bottomLogoHref: 'https://www.yeutech.vn',
  bottomLogoText: 'Module provided by',
  className: null,
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

