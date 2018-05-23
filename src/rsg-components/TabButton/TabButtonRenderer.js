import React from 'react';
import PropTypes from 'prop-types';
import Button from 'bootstrap-styled/lib/Button';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-tab-button-margin': '1em 0 1em 0',
      '$rsg-tab-button-border': 'none',
      '$rsg-tab-button-cursor': 'pointer',
      '$rsg-tab-button-color': '#9e9e9e',
      '$rsg-tab-button-hover-color': '#fc971b',
      '$rsg-tab-button-active-color': '#fc971b',
      '$rsg-tab-button-active-border-bottom': '4px solid #fc971b',
      '$rsg-tab-button-active-box-shadow': 'none',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  name: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-tab-button-margin': PropTypes.string,
      '$rsg-tab-button-border': PropTypes.string,
      '$rsg-tab-button-cursor': PropTypes.string,
      '$rsg-tab-button-color': PropTypes.string,
      '$rsg-tab-button-hover-color': PropTypes.string,
      '$rsg-tab-button-active-color': PropTypes.string,
      '$rsg-tab-button-active-border-bottom': PropTypes.string,
      '$rsg-tab-button-active-box-shadow': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const TabButtonRendererUnstyled = (props) => {
  const {
    className,
    name,
    onClick,
    active,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme', 'pathLine', 'hasExamples']);

  return (
    <div
      className={mapToCssModules(cn(className, 'tab'), cssModule)}
      {...attributes}
    >
      <Button className={`tab-button ${active ? 'active' : null}`} name={name} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

TabButtonRendererUnstyled.defaultProps = defaultProps;
TabButtonRendererUnstyled.propTypes = propTypes;


const TabButtonRenderer = styled(TabButtonRendererUnstyled)` 
  ${(props) => `
    &.tab {
      .tab-button {
        margin: ${props.theme.styleguide['$rsg-tab-button-margin']};
        border: ${props.theme.styleguide['$rsg-tab-button-border']} !important;
        cursor: ${props.theme.styleguide['$rsg-tab-button-cursor']} !important;
        box-shadow: ${props.theme.styleguide['$rsg-tab-button-active-box-shadow']} !important;
        color: ${props.theme.styleguide['$rsg-tab-button-color']} !important;
        &:hover {
          color: ${props.theme.styleguide['$rsg-tab-button-hover-color']} !important;
        }
      }
      .tab-button.active {
        color: ${props.theme.styleguide['$rsg-tab-button-active-color']} !important;
        border-bottom: ${props.theme.styleguide['$rsg-tab-button-active-border-bottom']} !important;
        box-shadow: ${props.theme.styleguide['$rsg-tab-button-active-box-shadow']} !important;
      }
    }
 `}
`;

TabButtonRenderer.defaultProps = defaultProps;
TabButtonRenderer.propTypes = propTypes;

export default TabButtonRenderer;
