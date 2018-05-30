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
      '$rsg-code-font-family': 'SF Mono, Monaco, "Inconsolata", "Fira Code", "Fira Mono", "Droid Sans Mono", Consolas, "Roboto Mono", "Source Code Pro", monospace',
      '$rsg-code-font-size': 'inherit',
      '$rsg-code-color': '#B31255',
      '$rsg-code-background': 'transparent',
      '$rsg-code-white-space': 'inherit',
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
      '$rsg-code-font-family': PropTypes.string,
      '$rsg-code-font-size': PropTypes.string,
      '$rsg-code-color': PropTypes.string,
      '$rsg-code-background': PropTypes.string,
      '$rsg-code-white-space': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const CodeRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  const isHighlighted = className && className.indexOf('lang-') !== -1;

  if (isHighlighted) {
    return (
      <Code
        className={className}
        dangerouslySetInnerHTML={{ __html: children }}
      />);
  }
  return (
    <Code
      className={mapToCssModules(cn(className, 'code-renderer'), cssModule)}
      {...attributes}
    >
      {children}
    </Code>
  );
};

CodeRendererUnstyled.defaultProps = defaultProps;
CodeRendererUnstyled.propTypes = propTypes;

const CodeRenderer = styled(CodeRendererUnstyled)` 
  ${(props) => `
    &.code-renderer {
      font-family: ${props.theme.styleguide['$rsg-code-font-family']};
      font-size: ${props.theme.styleguide['$rsg-code-font-size']};
      color: ${props.theme.styleguide['$rsg-code-color']};
      background: ${props.theme.styleguide['$rsg-code-background']};
      white-space: ${props.theme.styleguide['$rsg-code-white-space']};
    }
 `}
`;

CodeRenderer.defaultProps = defaultProps;
CodeRenderer.propTypes = propTypes;

export default CodeRenderer;
