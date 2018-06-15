import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Ribbon from 'rsg-components/Ribbon';
import SideBar from '../../components/SideBar';
import FooterRenderer from '../../components/FooterRenderer';
import config from '../../../styleguide/config';


export const defaultProps = {
  hasSidebar: true,
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
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** The documentation title */
  title: PropTypes.string.isRequired,
  /** TBD */
  toc: PropTypes.node.isRequired,
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
    children,
    toc,
    hasSidebar,
    logoMenu,
    logoFooter,
    cssModule,
    ...attributes
  } = omit(props, ['theme', 'homepageUrl']);

  const hasLayoutDefault = config.layout === 'default';
  const hasLayoutRouter = config.layout === 'router';

  return (
    <div
      className={mapToCssModules(cn(
        className,
        'rsg-styleguide',
        { 'has-sidebar': hasSidebar },
        { 'layout-default': hasLayoutDefault },
        { 'layout-router': hasLayoutRouter },
      ), cssModule)}
      {...attributes}
    >
      {hasSidebar && (
        <div>
          <SideBar logo={logoMenu} title={title} items={toc} />
          {hasLayoutDefault && (
            <Ribbon />
          )}
        </div>
      )}
      <main className="content">
        {children}
        {hasSidebar && (
          <div>
            <FooterRenderer logo={logoFooter} />
          </div>
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
      }
    }
    &.has-sidebar.layout-default {
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
    &.has-sidebar.layout-router {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding-left: 0;
    `
  )}
    }
    &.layout-router {
      .content {
        padding-left: 250px;
      }
    }
 `}
`;

StyleGuideRenderer.defaultProps = defaultProps;
StyleGuideRenderer.propTypes = propTypes;

export default StyleGuideRenderer;
