import React from 'react';
import PropTypes from 'prop-types';
import Code from 'bootstrap-styled/lib/Code';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-type-font-size': '13px',
      '$rsg-type-color': '#75096a',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-type-font-size': PropTypes.string,
      '$rsg-type-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const TypeRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <span
      className={mapToCssModules(cn(className, 'type-renderer'), cssModule)}
      {...attributes}
    >
      <Code className="type-renderer-code">{children}</Code>
    </span>
  );
};

TypeRendererUnstyled.defaultProps = defaultProps;
TypeRendererUnstyled.propTypes = propTypes;

const TypeRenderer = styled(TypeRendererUnstyled)` 
  ${(props) => `
    &.type-renderer {
      .type-renderer-code {
        font-size: ${props.theme.styleguide['$rsg-type-font-size']} !important;
        color: ${props.theme.styleguide['$rsg-type-color']} !important;
      }
    }
 `}
`;

TypeRenderer.defaultProps = defaultProps;
TypeRenderer.propTypes = propTypes;

export default TypeRenderer;
