/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import Ribbon from 'react-styleguidist/lib/rsg-components/Ribbon';
import theme from 'bootstrap-styled/lib/theme';
import NavigationBar from 'navigation-bar';
import { theme as navTheme } from 'navigation-bar';
import PageWrapper from 'navigation-bar/lib/NavigationBar';

import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import A from 'bootstrap-styled/lib/A';
import Img from 'bootstrap-styled/lib/Img';
import Nav from 'bootstrap-styled/lib/Nav';
import ListGroup from 'bootstrap-styled/lib/ListGroup';
import Button from 'bootstrap-styled/lib/Button';
import NavLink from 'bootstrap-styled/lib/Nav/NavLink';

import defaultLogo from './logo';


/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
   theme, classes, className, title, children, toc, hasSidebar, logo, bottomLogo, bottomLogoText, logoHref, bottomLogoHref
 }) {
  const layoutTheme = {
    ...theme,
    ...navTheme,
  }
  return (
    <BootstrapProvider theme={layoutTheme}>
      <div>
        <main style={{ marginLeft: '240px'}}>
          {children}
          <footer>
            <span>{bottomLogoText}</span>
            <a
              href={bottomLogoHref}
              target="_blank"
              alt="Yeutech Company Limited"
              title="Yeutech Company Limited"
            >
              <img
                src={`data:image/png;base64,${bottomLogo}`}
                height="55px"
                alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
              />
            </a>
          </footer>
        </main>
        {hasSidebar && (
          <NavigationBar
            fixed="top"
            className="flex-lg-column flex-row"
            button={{
              component: Button,
              className: 'd-lg-none mr-lg-5 mr-3 my-auto btn-primary',
            }}
            offsetNav={{
              right: false,
              show: 'lg',
              bgColor: 'inverse',
              top: '70',
            }}
          >
            {logoHref ? (
              <a
                href={logoHref}
                target="_blank"
                alt="Yeutech Company Limited"
                title="Yeutech Company Limited"
              >
                <img
                  src={`data:image/png;base64,${logo}`}
                  height="70px"
                  alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                  title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
                />
              </a>
            ) : (
              <img
                src={`data:image/png;base64,${logo}`}
                height="70px"
                alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
              />
            )}
            <Logo color="white">{title}</Logo>
            <ListGroup>
              {toc}
            </ListGroup>
          </NavigationBar>
        )}
        <Ribbon />
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
