import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-editor-padding': '2px 8px 2px 2px',
      '$rsg-editor-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-editor-font-size': '13px',
      '$rsg-editor-color': '#767676',
      '$rsg-editor-background-color': '#f5f5f5',
      '$rsg-editor-global-isolation': false,
      '$rsg-editor-global-font-family': 'Consolas, "Liberation Mono", Menlo, monospace',
      '$rsg-editor-global-height': 'auto',
      '$rsg-editor-global-padding': '4px 8px',
      '$rsg-editor-global-font-size': '13px',
      '$rsg-editor-global-pre-isolation': false,
      '$rsg-editor-global-pre-padding': '0',
      '$rsg-editor-global-scroll-isolation': false,
      '$rsg-editor-global-scroll-height': 'auto',
      '$rsg-editor-global-scroll-overflow-y': 'hidden',
      '$rsg-editor-global-scroll-overflow-x': 'auto',
      '$rsg-editor-global-error-isolation': false,
      '$rsg-editor-global-error-background': 'none',
    },
  },
};/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-editor-padding': PropTypes.string,
      '$rsg-editor-font-family': PropTypes.string,
      '$rsg-editor-font-size': PropTypes.string,
      '$rsg-editor-color': PropTypes.string,
      '$rsg-editor-background-color': PropTypes.string,
      '$rsg-editor-global-isolation': PropTypes.bool,
      '$rsg-editor-global-font-family': PropTypes.string,
      '$rsg-editor-global-height': PropTypes.string,
      '$rsg-editor-global-padding': PropTypes.string,
      '$rsg-editor-global-font-size': PropTypes.string,
      '$rsg-editor-global-pre-isolation': PropTypes.bool,
      '$rsg-editor-global-pre-padding': PropTypes.string,
      '$rsg-editor-global-scroll-isolation': PropTypes.bool,
      '$rsg-editor-global-scroll-height': PropTypes.string,
      '$rsg-editor-global-scroll-overflow-y': PropTypes.string,
      '$rsg-editor-global-scroll-overflow-x': PropTypes.string,
      '$rsg-editor-global-error-isolation': PropTypes.bool,
      '$rsg-editor-global-error-background': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const EditorLoaderRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-editor'), cssModule)}
      {...attributes}
    >
      Loading…
    </div>
  );
};

EditorLoaderRendererUnstyled.defaultProps = defaultProps;
EditorLoaderRendererUnstyled.propTypes = propTypes;


const EditorLoaderRenderer = styled(EditorLoaderRendererUnstyled)`
  ${(props) => `
    &.rsg-editor{
      padding: ${props.theme.styleguide['$rsg-editor-padding']};
      font-family: ${props.theme.styleguide['$rsg-editor-font-family']};
      font-size: ${props.theme.styleguide['$rsg-editor-font-size']};
      color: ${props.theme.styleguide['$rsg-editor-color']};
      background-color: ${props.theme.styleguide['$rsg-editor-background-color']} !important;
    }
 `}
`;

EditorLoaderRenderer.defaultProps = defaultProps;
EditorLoaderRenderer.propTypes = propTypes;

export default EditorLoaderRenderer;
