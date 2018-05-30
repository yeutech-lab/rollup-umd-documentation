import React from 'react';
import PropTypes from 'prop-types';
import Header from 'bootstrap-styled/lib/Header';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Pathline from '../Pathline';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-react-component-margin': '0 0 40px 0',
      '$rsg-react-component-header-margin': '0 0 16px 0',
      '$rsg-react-component-docs-color': '#333',
      '$rsg-react-component-docs-font-size': '16px',
      '$rsg-react-component-tabs-margin': '0 0 16px 0',
      '$rsg-react-component-tabs-button-margin': '0 0 8px 0',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Name used in id. */
  name: PropTypes.string.isRequired,
  /** Heading element to be rendered. */
  heading: PropTypes.node.isRequired,
  /** Component directory file path. */
  filepath: PropTypes.string,
  /** Component directory path line. */
  pathLine: PropTypes.string,
  /** Tab buttons elements to be rendered. */
  tabButtons: PropTypes.node,
  /** Tab body element to be rendered. */
  tabBody: PropTypes.node,
  /** Description element to be rendered. */
  description: PropTypes.node,
  /** Documentation element to be rendered. */
  docs: PropTypes.node,
  /** Examples elements to be rendered. */
  examples: PropTypes.node,
  /** Toggle isolated style. */
  isolated: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-react-component-margin': PropTypes.string,
      '$rsg-react-component-header-margin': PropTypes.string,
      '$rsg-react-component-docs-color': PropTypes.string,
      '$rsg-react-component-docs-font-size': PropTypes.string,
      '$rsg-react-component-tabs-margin': PropTypes.string,
      '$rsg-react-component-tabs-button-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const ReactComponentRendererUnstyled = (props) => {
  const {
    className,
    name,
    heading,
    pathLine,
    description,
    docs,
    examples,
    tabButtons,
    tabBody,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      id={`${name}-container`}
      className={mapToCssModules(cn(className, 'rsg-react-component'), cssModule)}
      {...attributes}
    >
      <Header className="rsg-react-component-header">
        {heading}
        {pathLine && <Pathline>{pathLine}</Pathline>}
      </Header>
      {(description || docs) && (
        <div className="rsg-react-component-docs">
          {description}
          {docs}
        </div>
      )}
      {tabButtons && (
        <div className="rsg-react-component-tabs">
          <div className="rsg-react-component-tabs-button">{tabButtons}</div>
          {tabBody}
        </div>
      )}
      {examples}
    </div>
  );
};

ReactComponentRendererUnstyled.defaultProps = defaultProps;
ReactComponentRendererUnstyled.propTypes = propTypes;

const ReactComponentRenderer = styled(ReactComponentRendererUnstyled)` 
  ${(props) => `
    &.rsg-react-component {
      margin: ${props.theme.styleguide['$rsg-react-component-margin']};
      .rsg-react-component-header {
        margin: ${props.theme.styleguide['$rsg-react-component-header-margin']};
      }
      .rsg-react-component-docs {
        color: ${props.theme.styleguide['$rsg-react-component-docs-color']};
        font-size: ${props.theme.styleguide['$rsg-react-component-docs-font-size']};
      }
      .rsg-react-component-tabs {
        margin: ${props.theme.styleguide['$rsg-react-component-tabs-margin']};
        .rsg-react-component-tab-buttons {
          margin: ${props.theme.styleguide['$rsg-react-component-tabs-button-margin']};
        }
      }
    }
 `}
`;

ReactComponentRenderer.defaultProps = defaultProps;
ReactComponentRenderer.propTypes = propTypes;

export default ReactComponentRenderer;
