import React from 'react';
import PropTypes from 'prop-types';
import P from 'bootstrap-styled/lib/P';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-para-margin': '0 0 1.2em 0',
      '$rsg-para-color': '#494949',
      '$rsg-para-font-size': '1em',
      '$rsg-para-line-height': '1.5',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  classes: PropTypes.object,
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired,
  semantic: PropTypes.oneOf(['p']),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-para-margin': PropTypes.string,
      '$rsg-para-color': PropTypes.string,
      '$rsg-para-font-size': PropTypes.string,
      '$rsg-para-line-height': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const ParaRendererUnstyled = (props) => {
  const {
    className,
    children,
    semantic,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  const Tag = (semantic && P) || 'div';

  return (
    <Tag
      className={mapToCssModules(cn(className, 'para-renderer'), cssModule)}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

ParaRendererUnstyled.defaultProps = defaultProps;
ParaRendererUnstyled.propTypes = propTypes;

const ParaRenderer = styled(ParaRendererUnstyled)` 
  ${(props) => `
    &.para-renderer {
      margin: ${props.theme.styleguide['$rsg-para-margin']};
      color: ${props.theme.styleguide['$rsg-para-color']};
      font-size: ${props.theme.styleguide['$rsg-para-font-size']};
      line-height: ${props.theme.styleguide['$rsg-para-line-height']};
    }
 `}
`;

export default ParaRenderer;
