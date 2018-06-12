import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import Fa from 'bootstrap-styled/lib/Fa';
import { hover } from 'bootstrap-styled-mixins/lib/hover';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Ribbon from 'rsg-components/Ribbon';
import SideBar from '../../components/SideBar';
import FooterRenderer from '../../components/FooterRenderer';

export const defaultProps = {
  hasSidebar: true,
  theme: {
    styleguide: {
      '$rsg-styleguide-background-color': '#fff',
      '$rsg-styleguide-has-sidebar-padding-left': {
        xs: '0',
        sm: '0',
        md: '30px',
        lg: '240px',
      },
      '$rsg-styleguide-content-max-width': '1000px',
      '$rsg-styleguide-content-padding': {
        xs: '16px',
        md: '16px 95px 16px 32px',
      },
      '$rsg-styleguide-content-sidebar-open-transition': 'transform ease-out 500ms',
      '$rsg-styleguide-content-sidebar-open-padding': {
        xs: '20px 30px 0 30px',
        md: '20px 20px 0 250px',
        lg: '20px 70px 0 70px',
      },
      '$rsg-styleguide-content-sidebar-close-transition': 'transform ease-out 500ms',
      '$rsg-styleguide-content-sidebar-close-padding': {
        xs: '0',
        md: '20px 50px 0 50px',
        lg: '20px 70px 0 70px',
      },
      '$rsg-styleguide-content-margin': '0 auto',
      '$rsg-styleguide-content-display': 'block',
      '$rsg-styleguide-sidebar-z-index': '4000',
      '$rsg-styleguide-sidebar-transform': 'translateX(0)',
      '$rsg-styleguide-sidebar-open-transition': 'transform ease-out 500ms',
      '$rsg-styleguide-sidebar-open-transform': {
        md: 'translateX(0px)',
        lg: 'translateX(0px)',
      },
      '$rsg-styleguide-sidebar-close-transition': 'transform ease-out 500ms',
      '$rsg-styleguide-sidebar-close-transform': {
        md: 'translateX(-250px)',
        lg: 'translateX(0px)',
      },
      '$rsg-styleguide-sidebar-button-transform': 'rotate(0deg)',
      '$rsg-styleguide-sidebar-button-padding': '10px 0 0 0',
      '$rsg-styleguide-sidebar-button-color': '#B31255',
      '$rsg-styleguide-sidebar-button-box-shadow': 'none',
      '$rsg-styleguide-sidebar-button-position': 'fixed',
      '$rsg-styleguide-sidebar-button-transition': 'all 500ms',
      '$rsg-styleguide-sidebar-button-hover-color': '#3A007D',
      '$rsg-styleguide-sidebar-button-outline': '0',
      '$rsg-styleguide-sidebar-button-visibility': {
        xs: 'hidden',
        md: 'visible',
        lg: 'hidden',
      },
      '$rsg-styleguide-sidebar-open-button-transition': 'transform 500ms',
      '$rsg-styleguide-sidebar-open-button-transform': 'translateX(230px) rotate(90deg)',
      '$rsg-styleguide-sidebar-close-button-transition': 'transform 500ms',
      '$rsg-styleguide-sidebar-close-button-z-index': '-500',
      '$rsg-styleguide-sidebar-close-button-transform': {
        sm: 'translateX(-20px)',
        md: 'translateX(0px)',
        lg: 'ranslateX(-10px)',
      },
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
  /** Specified node element will be passed as children of `<StyleGuideRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Table of content element to be rendered. */
  toc: PropTypes.node.isRequired,
  /** Toggle sidebar style. */
  hasSidebar: PropTypes.bool,
  /** Logo attributes in order to render menu logo. */
  logoMenu: PropTypes.shape({
    logo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Logo attributes in order to render footer logo. */
  logoFooter: PropTypes.shape({
    logo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    height: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-styleguide-background-color': PropTypes.string,
      '$rsg-styleguide-has-sidebar-padding-left': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-content-max-width': PropTypes.string,
      '$rsg-styleguide-content-padding': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-styleguide-content-sidebar-open-transition': PropTypes.string,
      '$rsg-styleguide-content-sidebar-open-padding': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-content-sidebar-close-transition': PropTypes.string,
      '$rsg-styleguide-content-sidebar-close-padding': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-styleguide-content-margin': PropTypes.string,
      '$rsg-styleguide-content-display': PropTypes.string,

      '$rsg-styleguide-sidebar-z-index': PropTypes.string,
      '$rsg-styleguide-sidebar-transform': PropTypes.string,
      '$rsg-styleguide-sidebar-open-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-open-transform': PropTypes.shape({
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-close-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-close-transform': PropTypes.shape({
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-button-transform': PropTypes.string,
      '$rsg-styleguide-sidebar-button-padding': PropTypes.string,
      '$rsg-styleguide-sidebar-button-color': PropTypes.string,
      '$rsg-styleguide-sidebar-button-box-shadow': PropTypes.string,
      '$rsg-styleguide-sidebar-button-position': PropTypes.string,
      '$rsg-styleguide-sidebar-button-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-button-hover-color': PropTypes.string,
      '$rsg-styleguide-sidebar-button-outline': PropTypes.string,
      '$rsg-styleguide-sidebar-button-visibility': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-open-button-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-open-button-transform': PropTypes.string,
      '$rsg-styleguide-sidebar-close-button-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-close-button-z-index': PropTypes.string,
      '$rsg-styleguide-sidebar-close-button-transform': PropTypes.shape({
        sm: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

class StyleGuideRendererUnstyled extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    isOpenSidebar: false,
  };

  shouldComponentUpdate(nextState) {
    return (this.state.isOpenSidebar !== nextState.isOpenSidebar);
  }

  toggleSideBar = () => {
    this.setState({
      isOpenSidebar: !this.state.isOpenSidebar,
    });
  };

  render() {
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
    } = omit(this.props, ['theme']);
    const { isOpenSidebar } = this.state;
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
            <div
              className={`sidebar-button ${isOpenSidebar ? 'sidebar-open' : 'sidebar-close'}`}
              role="button"
              tabIndex="0"
              onClick={() => this.toggleSideBar()}
              onKeyPress={() => this.toggleSideBar()}
            >
              <Fa
                size="lg"
                bars
              />
            </div>
            <SideBar className={`sidebar ${isOpenSidebar ? 'sidebar-open' : 'sidebar-close'}`} logo={logoMenu} title={title} items={toc} />
            <Ribbon />
          </div>
        )}
        <main className={`content ${isOpenSidebar ? 'sidebar-open' : 'sidebar-close'}`} >
          {children}
          {hasSidebar && (
            <FooterRenderer logo={logoFooter} />
          )}
        </main>
      </div>
    );
  }
}

const StyleGuideRenderer = styled(StyleGuideRendererUnstyled)` 
  ${(props) => `
    &.rsg-styleguide {
      @media print{
         .no-print {
             display: none;
         }
      }
      background-color: ${props.theme.styleguide['$rsg-styleguide-background-color']};
      .content {
        max-width: ${props.theme.styleguide['$rsg-styleguide-content-max-width']};
        margin: ${props.theme.styleguide['$rsg-styleguide-content-margin']};
        display: ${props.theme.styleguide['$rsg-styleguide-content-display']};
        transition: transform ease-out 500ms;
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding: 0 10px;
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      width: 60%;
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      width: 100%;
      padding: 0 60px 0 60px;
    `
  )}
      }
    }
    .content.sidebar-open {
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: translateX(120px);
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: translateX(0);
    `
  )}
    }
    .content.sidebar-close {
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: translateX(0px);
    `
  )} 
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
    'sm',
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
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      padding-left: ${props.theme.styleguide['$rsg-styleguide-has-sidebar-padding-left'].lg};
    `
  )}
    }
    & .sidebar {
    z-index: ${props.theme.styleguide['$rsg-styleguide-sidebar-z-index']};
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-transform']};
    `
  )}
    }
    & .sidebar.sidebar-open {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-transition']};
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-transform'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-transform'].lg};
    `
  )}
    }
    & .sidebar.sidebar-close {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-transition']};
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-transform'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-transform'].lg};
    `
  )}
    }
    & .sidebar-button {
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-transform']};
      padding: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-padding']};
      color: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-color']};
      box-shadow: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-box-shadow']};
      position: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-position']};
      transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-transition']};
  ${hover(`
    color: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-hover-color']};
  `)} 
      &:focus, &:active {
        outline: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-outline']};
      }
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-visibility'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-visibility'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-visibility'].lg};
    `
  )}
    }
    & .sidebar-button.sidebar-open {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-button-transition']};
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-button-transform']};
    `
  )}
    }
    & .sidebar-button.sidebar-close {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transition']};
 ${bp.down(
    'sm',
    props.theme['$grid-breakpoints'],
    `
      z-index: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-z-index']};
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transform'].sm};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transform'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transform'].lg};
    `
  )}
    }
 `}
`;

StyleGuideRenderer.defaultProps = defaultProps;
StyleGuideRenderer.propTypes = propTypes;

export default StyleGuideRenderer;
