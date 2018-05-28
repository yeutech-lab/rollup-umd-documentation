import React from 'react';
import PropTypes from 'prop-types';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import styled from 'styled-components';
import omit from 'lodash.omit';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules/lib';
import ContentWrapper from './ContentWrapper';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-main-margin-left': {
        xs: '0',
        md: '300px',
      },
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-main-margin-left': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
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
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <ContentWrapper
      className={mapToCssModules(cn(className, 'rsg-main', cssModule))}
      {...attributes}
    />
  );
};

MainUnstyled.defaultProps = defaultProps;
MainUnstyled.propTypes = propTypes;

export const Main = styled(MainUnstyled)`
  ${(props) => `
    ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      margin-left: ${props.theme.styleguide['$rsg-main-margin-left'].xs};
    `
  )}
    ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      margin-left: ${props.theme.styleguide['$rsg-main-margin-left'].md};
    `
  )}
  `}
`;

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;
