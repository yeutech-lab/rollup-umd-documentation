import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Strong from 'bootstrap-styled/lib/Strong';

export const defaultProps = {
  size: 'inherit',
  color: 'base',
  underlined: false,
  theme: {
    styleguide: {
      '$rsg-text-font-size': {
        inherit: 'inherit',
        sm: '0.8em',
        base: '1em',
        text: '1.2em',
      },
      '$rsg-text-color': '#333',
      '$rsg-text-color-light': '#555556',
      '$rsg-text-border-bottom': '1px dotted #CCCCCC',
      '$rsg-text-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  semantic: PropTypes.oneOf(['em', 'strong']), // eslint-disable-line react/require-default-props
  size: PropTypes.oneOf(['inherit', 'small', 'base', 'text']),
  color: PropTypes.oneOf(['base', 'light']),
  underlined: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-text-font-size': PropTypes.object,
      '$rsg-text-color': PropTypes.string,
      '$rsg-text-color-light': PropTypes.string,
      '$rsg-text-border-bottom': PropTypes.string,
      '$rsg-text-font-family': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const TextRendererUnstyled = (props) => {
  const {
    className,
    children,
    semantic,
    size,
    color,
    underlined,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  const Tag = (semantic && semantic === 'strong' ? Strong : 'em') || 'span';

  return (
    <Tag
      className={mapToCssModules(cn(className, {
        [`size-${size}`]: !!size,
        [`color-${color}`]: !!color,
        underlined: !!underlined,
      }, 'text-renderer'), cssModule)}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

TextRendererUnstyled.defaultProps = defaultProps;
TextRendererUnstyled.propTypes = propTypes;

const TextRenderer = styled(TextRendererUnstyled)` 
  ${(props) => `
    &.text-renderer {
      font-family: ${props.theme.styleguide['$rsg-text-font-family']};
    }
    &.text-renderer.size-inherit {
      font-size: ${props.theme.styleguide['$rsg-text-font-size'].inherit};
    }
    &.text-renderer.size-small {
      font-size: ${props.theme.styleguide['$rsg-text-font-size'].sm};
    }
    &.text-renderer.size-base {
      font-size: ${props.theme.styleguide['$rsg-text-font-size'].base};
    }
    &.text-renderer.size-text {
      font-size: ${props.theme.styleguide['$rsg-text-font-size'].text};
    }
    &.text-renderer.underlined {
      border-bottom: ${props.theme.styleguide['$rsg-text-border-bottom']};
    }
    &.text-renderer.color-base {
      color: ${props.theme.styleguide['$rsg-text-color']};
    }
    &.text-renderer.color-light {
      color: ${props.theme.styleguide['$rsg-text-color-light']};
    }
 `}
`;

TextRenderer.defaultProps = defaultProps;
TextRenderer.propTypes = propTypes;

export default TextRenderer;
