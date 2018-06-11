/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
require('!!../../loaders/style-loader!../../loaders/css-loader!font-awesome/css/font-awesome.css'); // eslint-disable-line import/no-webpack-loader-syntax
import theme from '../theme';
import StyleGuideRenderer from '../rsg-bs-components/StyleGuide/StyleGuideRenderer';
import badgeYeutech from '../static/badge-yeutech';
import LogoYeutech from '../static/logo-yeutech.svg';

/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
   theme, className, title, children, toc, hasSidebar
 }) {
  return (
    <BootstrapProvider theme={theme}>
      <StyleGuideRenderer
        className={className}
        title={title}
        logoMenu={{
          logo: <LogoYeutech />,
          href: null,
          alt: 'Yeutech Company Limited logo',
        }}
        logoFooter={{
          logo: badgeYeutech,
          href: 'https://www.yeutech.vn',
          target: '_blank',
          alt: 'Yeutech Company Limited logo',
        }}
        toc={toc}
        hasSidebar={hasSidebar}
      >
        {children}
      </StyleGuideRenderer>
    </BootstrapProvider>
  );
}

LayoutRenderer.defaultProps = {
  title: 'rollup-documentation',
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
};

export default LayoutRenderer;

