/* eslint-disable */
/*
 *
 * LayoutRenderer
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
require('!!../../loaders/style-loader!../../loaders/css-loader!font-awesome/css/font-awesome.css'); // eslint-disable-line import/no-webpack-loader-syntax
import theme from '../theme';
import badgeYeutech from '../static/badge-yeutech';
import LogoYeutech from '../static/logo-yeutech.svg';
import LogoYeutechColored from '../static/logo-yeutech-colored.svg';
import LayoutDefault from './Layouts/LayoutDefault';
import LayoutRouter from './Layouts/LayoutRouter';
import config from '../../styleguide/config';

/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
  theme,
  className,
  title,
  children,
  toc,
  hasSidebar,
  logoMenu,
  logoFooter,
}) {
  const layoutDefault = () => (
    <LayoutDefault
      className={className}
      title={title}
      logoMenu={logoMenu}
      logoFooter={logoFooter}
      toc={toc}
      hasSidebar={hasSidebar}
      children={children}
    />
  );
  const layoutRouter= () => (
    <LayoutRouter
      social={config.socialLinks}
      routes={config.routes}
      className={className}
      title={title}
      logo={logoMenu}
      toc={toc}
      hasSidebar={hasSidebar}
      children={children}
    />
  );
  return (
    <BootstrapProvider theme={theme}>
      {config.layout === 'default' && layoutDefault()}
      {config.layout === 'router' && layoutRouter()}
    </BootstrapProvider>
  );
}

LayoutRenderer.defaultProps = {
  title: 'rollup-documentation',
  className: null,
  theme,
  logoMenu: {
    logo: config.layout === 'default' ? <LogoYeutech /> : <LogoYeutechColored />,
    href: null,
    alt: 'Yeutech Company Limited logo',
  },
  logoFooter: {
    logo: badgeYeutech,
    href: null,
    alt: 'Yeutech Company Limited logo',
  }
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
  theme: PropTypes.object,
  /** define if the sidebar should be displayed */
  hasSidebar: PropTypes.bool,
  /** Logo to use in sidebar menu */
  /** @ignore */
  logoMenu: PropTypes.shape({
    logo: PropTypes.node,
    href: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Logo to use in footer */
  /** @ignore */
  logoFooter: PropTypes.shape({
    logo: PropTypes.node,
    href: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export default LayoutRenderer;
