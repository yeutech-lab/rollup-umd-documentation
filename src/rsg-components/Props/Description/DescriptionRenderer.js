import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-props-description-font-size': '13px',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-props-description-font-size': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const DescriptionRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'props-description-renderer'), cssModule)}
      {...attributes}
    >
      {children}
    </div>
  );
};

DescriptionRendererUnstyled.defaultProps = defaultProps;
DescriptionRendererUnstyled.propTypes = propTypes;

const DescriptionRenderer = styled(DescriptionRendererUnstyled)` 
  ${(props) => `
    &.props-description-renderer {
      font-size: ${props.theme.styleguide['$rsg-props-description-font-size']};
    }
 `}
`;

DescriptionRenderer.defaultProps = defaultProps;
DescriptionRenderer.propTypes = propTypes;

export default DescriptionRenderer;
