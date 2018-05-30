import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import SideBar from '../../components/SideBar';
import FooterRenderer from '../../components/FooterRenderer';
import Ribbon from '../Ribbon';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-styleguide-background-color': '#fff',
      '$rsg-styleguide-has-sidebar-padding-left': {
        xs: '0',
        md: '250px',
      },
      '$rsg-styleguide-content-max-width': '1000px',
      '$rsg-styleguide-content-padding': {
        xs: '16px',
        md: '16px 95px 16px 32px',
      },
      '$rsg-styleguide-content-margin': '0 auto',
      '$rsg-styleguide-content-display': 'block',
      '$rsg-styleguide-sidebar-background-color': '#f5f5f5',
      '$rsg-styleguide-sidebar-border': '#e8e8e8 solid',
      '$rsg-styleguide-sidebar-border-width': {
        xs: '1px 0 0 0',
        md: '0 1px 0 0',
      },
      '$rsg-styleguide-sidebar-position': {
        xs: 'static',
        md: 'fixed',
      },
      '$rsg-styleguide-sidebar-top': '0',
      '$rsg-styleguide-sidebar-left': '0',
      '$rsg-styleguide-sidebar-bottom': '0',
      '$rsg-styleguide-sidebar-width': {
        xs: 'auto',
        md: '250px',
      },
      '$rsg-styleguide-sidebar-overflow': 'auto',
      '$rsg-styleguide-sidebar-padding-bottom': '4px',
      '$rsg-styleguide-logo-padding': '16px',
      '$rsg-styleguide-logo-border-bottom': '1 #e8e8e8 solid',
      '$rsg-styleguide-footer-display': 'block',
      '$rsg-styleguide-footer-color': '#767676',
      '$rsg-styleguide-footer-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-styleguide-footer-font-size': '13px',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool, // eslint-disable-line react/require-default-props
  logo: PropTypes.node,
  logohref: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-styleguide-background-color': PropTypes.string,
      '$rsg-styleguide-has-sidebar-padding-left': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-styleguide-content-max-width': PropTypes.string,
      '$rsg-styleguide-content-padding': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-styleguide-content-margin': PropTypes.string,
      '$rsg-styleguide-content-display': PropTypes.string,
      '$rsg-styleguide-sidebar-background-color': PropTypes.string,
      '$rsg-styleguide-sidebar-border': PropTypes.string,
      '$rsg-styleguide-sidebar-border-width': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-position': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-top': PropTypes.string,
      '$rsg-styleguide-sidebar-left': PropTypes.string,
      '$rsg-styleguide-sidebar-bottom': PropTypes.string,
      '$rsg-styleguide-sidebar-width': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-overflow': PropTypes.string,
      '$rsg-styleguide-sidebar-padding-bottom': PropTypes.string,
      '$rsg-styleguide-logo-padding': PropTypes.string,
      '$rsg-styleguide-logo-border-bottom': PropTypes.string,
      '$rsg-styleguide-footer-display': PropTypes.string,
      '$rsg-styleguide-footer-color': PropTypes.string,
      '$rsg-styleguide-footer-font-family': PropTypes.string,
      '$rsg-styleguide-footer-font-size': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const StyleGuideRendererUnstyled = (props) => {
  const {
    className,
    title,
    homepageUrl,
    children,
    toc,
    hasSidebar,
    logo,
    logohref,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(
        className,
        'rsg-styleguide',
        (hasSidebar && 'has-sidebar')
      ), cssModule)}
      {...attributes}
    >
      {hasSidebar && (
        <SideBar logo={{ logo, href: logohref }} title={title} items={toc} />
      )}
      <Ribbon />
      <main className="content">
        {children}
        {hasSidebar && (
          <FooterRenderer />
        )}
      </main>

    </div>
  );
};

StyleGuideRendererUnstyled.defaultProps = defaultProps;
StyleGuideRendererUnstyled.propTypes = propTypes;

const StyleGuideRenderer = styled(StyleGuideRendererUnstyled)` 
  ${(props) => `
    &.rsg-styleguide {
      background-color: ${props.theme.styleguide['$rsg-styleguide-background-color']};
      .content {
        max-width: ${props.theme.styleguide['$rsg-styleguide-content-max-width']};
        margin: ${props.theme.styleguide['$rsg-styleguide-content-margin']};
        display: ${props.theme.styleguide['$rsg-styleguide-content-display']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding: ${props.theme.styleguide['$rsg-styleguide-content-padding'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      padding: ${props.theme.styleguide['$rsg-styleguide-content-padding'].md};
    `
  )}
        .footer {
          footer-display: ${props.theme.styleguide['$rsg-styleguide-footer-display']};
          color: ${props.theme.styleguide['$rsg-styleguide-footer-color']};
          font-family: ${props.theme.styleguide['$rsg-styleguide-footer-font-family']};
          font-size: ${props.theme.styleguide['$rsg-styleguide-footer-font-size']};
        }
      }
      .sidebar {
        background-color: ${props.theme.styleguide['$rsg-styleguide-sidebar-background-color']};
        border: ${props.theme.styleguide['$rsg-styleguide-sidebar-border']};
        border-width: ${props.theme.styleguide['$rsg-styleguide-sidebar-border-width']};
        top: ${props.theme.styleguide['$rsg-styleguide-sidebar-top']};
        left: ${props.theme.styleguide['$rsg-styleguide-sidebar-left']};
        bottom: ${props.theme.styleguide['$rsg-styleguide-sidebar-bottom']};
        overflow: ${props.theme.styleguide['$rsg-styleguide-sidebar-overflow']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      position: ${props.theme.styleguide['$rsg-styleguide-sidebar-position'].xs};
      width: ${props.theme.styleguide['$rsg-styleguide-sidebar-width'].xs};
      border-width: ${props.theme.styleguide['$rsg-styleguide-sidebar-border-width'].xs};
      padding-bottom: ${props.theme.styleguide['$rsg-styleguide-sidebar-padding-bottom']};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      position: ${props.theme.styleguide['$rsg-styleguide-sidebar-position'].md};
      width: ${props.theme.styleguide['$rsg-styleguide-sidebar-width'].md};
      border-width: ${props.theme.styleguide['$rsg-styleguide-sidebar-border-width'].md};
    `
  )}
        .logo {
          padding: ${props.theme.styleguide['$rsg-styleguide-logo-padding']};
          border-bottom: ${props.theme.styleguide['$rsg-styleguide-logo-border-bottom']};
        }
      }
    }
    &.has-sidebar {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding-left: ${props.theme.styleguide['$rsg-styleguide-has-sidebar-padding-left'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      padding-left: ${props.theme.styleguide['$rsg-styleguide-has-sidebar-padding-left'].md};
    `
  )}
    }
 `}
`;

StyleGuideRenderer.defaultProps = defaultProps;
StyleGuideRenderer.propTypes = propTypes;

export default StyleGuideRenderer;
