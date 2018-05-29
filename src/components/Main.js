import React from 'react';
import PropTypes from 'prop-types';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import styled from 'styled-components';
import omit from 'lodash.omit';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules/lib';
import ContentWrapper from './ContentWrapper';

export const defaultProps = {
  hasSidebar: true,
  theme: {
    styleguide: {
      '$rsg-main-has-sidebar-padding-left': {
        xs: '0',
        md: '250px',
      },
      '$rsg-main-content-padding': {
        xs: '16px',
        md: '16px 32px',
      },
      '$rsg-main-content-max-width': '1000px',
      '$rsg-main-content-margin': '0 auto',
      '$rsg-main-content-display': 'block',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-main-has-sidebar-padding-left': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-main-content-padding': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-main-content-max-width': PropTypes.string,
      '$rsg-main-content-margin': PropTypes.string,
      '$rsg-main-content-display': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const MainUnstyled = (props) => {
  const {
    className,
    children,
    hasSidebar,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <ContentWrapper
      className={mapToCssModules(cn(className, 'rsg-main', (hasSidebar && 'has-sidebar'), cssModule))}
      {...attributes}
    >
      <div className="rsg-content">
        {children}
      </div>
    </ContentWrapper>
  );
};

MainUnstyled.defaultProps = defaultProps;
MainUnstyled.propTypes = propTypes;

export const Main = styled(MainUnstyled)`
  ${(props) => `
    &.rsg-main.has-sidebar {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      margin-left: 0;
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      margin-left: 250px;
    `
  )}
    }
    &.rsg-content {
      max-width: ${props.theme.styleguide['$rsg-content-max-width']};
      margin: ${props.theme.styleguide['$rsg-content-margin']};
      display: ${props.theme.styleguide['$rsg-content-display']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding: 16px;
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      padding: 16px 32px;
    `
  )}
    }
  `}
`;

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;

// export const Main = styled(MainUnstyled)`
//   ${(props) => `
//     ${bp.up(
//       'xs',
//       props.theme['$grid-breakpoints'],
//       `
//         margin-left: ${props.theme.styleguide['$rsg-main-margin-left'].xs};
//       `
//     )}
//     ${bp.up(
//       'md',
//       props.theme['$grid-breakpoints'],
//       `
//         margin-left: ${props.theme.styleguide['$rsg-main-margin-left'].md};
//       `
//     )}
//   `}
// `;
