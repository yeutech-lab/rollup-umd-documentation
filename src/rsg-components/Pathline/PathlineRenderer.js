import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import Fa from 'bootstrap-styled/lib/Fa';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import '!!style-loader!css-loader!../../../node_modules/font-awesome/css/font-awesome.css'; // eslint-disable-line import/no-webpack-loader-syntax
import ToolbarButton from '../ToolbarButton';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-path-line-color': '#9e9e9e',
      '$rsg-path-line-font-size': '0.8em',
      '$rsg-path-line-margin': '0 0 1.5em 0',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-path-line-color': PropTypes.string,
      '$rsg-path-line-font-size': PropTypes.string,
      '$rsg-path-line-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const PathlineRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    children,
    ...attributes
  } = omit(props, ['theme']);
  return (
    <div
      className={mapToCssModules(cn(className, 'path-line d-flex justify-content-start'), cssModule)}
      {...attributes}
    >
      {children}
      <ToolbarButton
        onClick={() => copy(children)}
        title="Copy to clipboard"
      >
        <Fa copy />
      </ToolbarButton>
    </div>
  );
};

PathlineRendererUnstyled.defaultProps = defaultProps;
PathlineRendererUnstyled.propTypes = propTypes;


const PathlineRenderer = styled(PathlineRendererUnstyled)` 
  ${(props) => `
    &.path-line {
      margin: ${props.theme.styleguide['$rsg-path-line-margin']};
      font-size: ${props.theme.styleguide['$rsg-path-line-font-size']};
      color: ${props.theme.styleguide['$rsg-path-line-color']};
    }
 `}
`;

PathlineRenderer.defaultProps = defaultProps;
PathlineRenderer.propTypes = propTypes;

export default PathlineRenderer;
