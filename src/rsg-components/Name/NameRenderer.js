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
      '$rsg-name-font-size': '0.8em',
      '$rsg-name-color': '#b11255',
      '$rsg-name-deprecated-color': '#f47469',
      '$rsg-name-deprecated-decoration': 'line-through',
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
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-name-font-size': PropTypes.string,
      '$rsg-name-color': PropTypes.string,
      '$rsg-name-deprecated-color': PropTypes.string,
      '$rsg-name-deprecated-decoration': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const NameRendererUnstyled = (props) => {
  const {
    className,
    children,
    deprecated,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <span
      className={mapToCssModules(cn(className, 'name-renderer'), cssModule)}
      {...attributes}
    >
      <Code className={`name-renderer-code ${deprecated && 'deprecated'}`}>{children}</Code>
    </span>
  );
};

NameRendererUnstyled.defaultProps = defaultProps;
NameRendererUnstyled.propTypes = propTypes;

const NameRenderer = styled(NameRendererUnstyled)` 
  ${(props) => `
    &.name-renderer {
      .name-renderer-code {
        font-size: ${props.theme.styleguide['$rsg-name-font-size']};
        color: ${props.theme.styleguide['$rsg-name-color']};
      }
      .name-renderer-code.deprecated {
        color: ${props.theme.styleguide['$rsg-name-deprecated-color']};
        text-decoration: ${props.theme.styleguide['$rsg-name-deprecated-decoration']};
      }
    }
 `}
`;

NameRenderer.defaultProps = defaultProps;
NameRenderer.propTypes = propTypes;

export default NameRenderer;
