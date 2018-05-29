/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import theme from '../theme';
import Main from './Main'
import SideBar from './SideBar';
import Ribbon from '../rsg-components/Ribbon';
import FooterRenderer from '../components/FooterRenderer';
import whiteLogo from './logo-white';
import defaultLogo from './yeutech-badge';

/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
   theme, className, title, children, toc, hasSidebar, logo, logoHref
 }) {
  return (
    <BootstrapProvider theme={theme}>
      {hasSidebar && (
        <div>
          <SideBar logo={{ logo: logo, href: logoHref}} title={title} items={toc} theme={theme} />
        </div>
      )}
      <div>
        <Main hasSidebar>
          {children}
          <FooterRenderer />
        </Main>
        <Ribbon />
      </div>
    </BootstrapProvider>
  );
}

LayoutRenderer.defaultProps = {
  logo: whiteLogo,
  logoHref: null,
  bottomLogo: defaultLogo,
  bottomLogoHref: 'https://www.yeutech.vn',
  bottomLogoText: '',
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

