import React from 'react';
import PropTypes from 'prop-types';
import Button from 'bootstrap-styled/lib/Button';
import A from 'bootstrap-styled/lib/A';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-toolbar-link-a-color': '#383535',
      '$rsg-toolbar-link-a-hover-color': '#CE4953',
      '$rsg-toolbar-link-margin': '16px 0 0 0',
      '$rsg-toolbar-button-margin': '0 0 0 5px',
      '$rsg-toolbar-button-padding': '0',
      '$rsg-toolbar-button-a-color': '#9e9e9e',
      '$rsg-toolbar-button-a-hover-color': '#CE4953',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-toolbar-link-a-color': PropTypes.string,
      '$rsg-toolbar-link-a-hover-color': PropTypes.string,
      '$rsg-toolbar-link-margin': PropTypes.string,
      '$rsg-toolbar-button-a-color': PropTypes.string,
      '$rsg-toolbar-button-a-hover-color': PropTypes.string,
      '$rsg-toolbar-button-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const ToolbarButtonRendererUnstyled = (props) => {
  const {
    className,
    onClick,
    href,
    title,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'toolbar'), cssModule)}
      {...attributes}
    >
      {href !== undefined ? (
        <div className="toolbar-link">
          <A className="toolbar-link-a" href={href} title={title} aria-label={title}>
            {children}
          </A>
        </div>
      ) : (
        <div className="toolbar-button">
          <Button tag={A} className="toolbar-button-a" onClick={onClick} title={title} aria-label={title}>
            {children}
          </Button>
        </div>
      )}
    </div>
  );
};

ToolbarButtonRendererUnstyled.defaultProps = defaultProps;
ToolbarButtonRendererUnstyled.propTypes = propTypes;

const ToolbarButtonRenderer = styled(ToolbarButtonRendererUnstyled)` 
  ${(props) => `
    &.toolbar {
      .toolbar-link {
        margin: ${props.theme.styleguide['$rsg-toolbar-link-margin']};
        .toolbar-link-a {
          color: ${props.theme.styleguide['$rsg-toolbar-link-a-color']};
          &:hover {
            color: ${props.theme.styleguide['$rsg-toolbar-link-a-hover-color']};
          }
        }
      }
      .toolbar-button {
        margin: ${props.theme.styleguide['$rsg-toolbar-button-margin']};
        .toolbar-button-a {
          padding: ${props.theme.styleguide['$rsg-toolbar-button-padding']} !important;
          color: ${props.theme.styleguide['$rsg-toolbar-button-a-color']};
          &:hover {
            color: ${props.theme.styleguide['$rsg-toolbar-button-a-hover-color']};
          }
        }
      }
    }
 `}
`;

ToolbarButtonRenderer.defaultProps = defaultProps;
ToolbarButtonRenderer.propTypes = propTypes;

export default ToolbarButtonRenderer;
