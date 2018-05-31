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

    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Set title used in `<SideBar />` component. */
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  /** Specified node element will be passed as children of `<StyleGuideRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Table of content element to be rendered. */
  toc: PropTypes.node.isRequired,
  /** Toggle sidebar style. */
  hasSidebar: PropTypes.bool, // eslint-disable-line react/require-default-props
  /** Content element to be rendered. */
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
        { 'has-sidebar': hasSidebar }
      ), cssModule)}
      {...attributes}
    >
      {hasSidebar && (
        <div>
          <SideBar logo={{ logo, href: logohref }} title={title} items={toc} />
          <Ribbon />
        </div>
      )}
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