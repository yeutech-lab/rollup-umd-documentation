/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import theme from '../theme';
import StyleGuideRenderer from '../rsg-components/StyleGuide/StyleGuideRenderer';
import whiteLogo from './logo-white';
import defaultLogo from './yeutech-badge';
import '!!style-loader!css-loader!font-awesome/css/font-awesome.css'; // eslint-disable-line import/no-webpack-loader-syntax

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

