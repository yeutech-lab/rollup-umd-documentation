import React from 'react';
import PropTypes from 'prop-types';
import H1 from 'bootstrap-styled/lib/H1';
import H2 from 'bootstrap-styled/lib/H2';
import H3 from 'bootstrap-styled/lib/H3';
import H4 from 'bootstrap-styled/lib/H4';
import H5 from 'bootstrap-styled/lib/H5';
import H6 from 'bootstrap-styled/lib/H6';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

const typoList = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-heading-margin': '20px 0 0 0',
      '$rsg-heading-color': '#333',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<HeadingRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Level used to style heading. Can be: */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-heading-margin': PropTypes.string,
      '$rsg-heading-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const HeadingRendererUnstyled = (props) => {
  const {
    className,
    children,
    level,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  const Tag = typoList[`H${level}`] || H1;
  return (
    <Tag
      className={mapToCssModules(cn(className, 'rsg-heading'), cssModule)}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

HeadingRendererUnstyled.defaultProps = defaultProps;
HeadingRendererUnstyled.propTypes = propTypes;

const HeadingRenderer = styled(HeadingRendererUnstyled)` 
  ${(props) => `
    &.rsg-heading {
      margin: ${props.theme.styleguide['$rsg-heading-margin']};
      color: ${props.theme.styleguide['$rsg-heading-color']};
    }
 `}
`;

HeadingRenderer.defaultProps = defaultProps;
HeadingRenderer.propTypes = propTypes;

export default HeadingRenderer;
