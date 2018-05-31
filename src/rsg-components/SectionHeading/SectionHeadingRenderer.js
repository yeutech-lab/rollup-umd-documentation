import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from 'bootstrap-styled/lib/A';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import Heading from '../Heading';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-section-heading-display': 'flex',
      '$rsg-section-heading-flex-direction': 'row',
      '$rsg-section-heading-align-items': 'center',
      '$rsg-section-heading-margin-bottom': '8px',
      '$rsg-section-heading-section-name-isolation': 'false',
      '$rsg-section-heading-section-name-text-decoration': 'underline',
      '$rsg-section-heading-section-name-cursor': 'pointer',
      '$rsg-section-heading-section-name-color': '#B31255',
      '$rsg-section-heading-deprecated-text-decoration': 'line-through',
      '$rsg-section-heading-deprecated-cursor': '#767676',
      '$rsg-section-heading-toolbar-margin-left': 'auto',
      '$rsg-section-heading-1-link-color': '#292b2c',
      '$rsg-section-heading-2-link-color': '#767676',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<SectionHeadingRenderer />` component. */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Toolbar element to be rendered. */
  toolbar: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Set id used by `<Heading />` component. */
  id: PropTypes.string.isRequired,
  /** Set anchor link href used by `<A />` component. */
  href: PropTypes.string.isRequired,
  /** Set level used in `<Heading />` component. */
  depth: PropTypes.number.isRequired,
  /** Toggle deprecated style. */
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-section-heading-display': PropTypes.string,
      '$rsg-section-heading-flex-direction': PropTypes.string,
      '$rsg-section-heading-align-items': PropTypes.string,
      '$rsg-section-heading-margin-bottom': PropTypes.string,
      '$rsg-section-heading-section-name-isolation': PropTypes.string,
      '$rsg-section-heading-section-name-text-decoration': PropTypes.string,
      '$rsg-section-heading-section-name-cursor': PropTypes.string,
      '$rsg-section-heading-section-name-color': PropTypes.string,
      '$rsg-section-heading-deprecated-text-decoration': PropTypes.string,
      '$rsg-section-heading-deprecated-cursor': PropTypes.string,
      '$rsg-section-heading-toolbar-margin-left': PropTypes.string,
      '$rsg-section-heading-1-link-color': PropTypes.string,
      '$rsg-section-heading-2-link-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const SectionHeadingRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    children,
    toolbar,
    id,
    href,
    depth,
    deprecated,
    ...attributes
  } = omit(props, ['theme']);

  const headingLevel = Math.min(6, depth);
  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-section-heading'), cssModule)}
      {...attributes}
    >
      <Heading level={headingLevel} id={id}>
        <A className={`section-name level-${headingLevel} ${deprecated ? 'deprecated' : ''}`} href={href}>
          {children}
        </A>
      </Heading>
      <div className="toolbar">{toolbar}</div>
    </div>
  );
};

SectionHeadingRendererUnstyled.defaultProps = defaultProps;
SectionHeadingRendererUnstyled.propTypes = propTypes;

const SectionHeadingRenderer = styled(SectionHeadingRendererUnstyled)` 
  ${(props) => `
    &.rsg-section-heading {
      display: ${props.theme.styleguide['$rsg-section-heading-display']};
      flex-direction: ${props.theme.styleguide['$rsg-section-heading-flex-direction']};
      align-items: ${props.theme.styleguide['$rsg-section-heading-align-items']};
      margin-bottom: ${props.theme.styleguide['$rsg-section-heading-margin-bottom']};
      & .section-name {
        &:hover, &:active {
          isolation: ${props.theme.styleguide['$rsg-section-heading-section-name-isolation']};
          text-decoration: ${props.theme.styleguide['$rsg-section-heading-section-name-text-decoration']};
          cursor: ${props.theme.styleguide['$rsg-section-heading-section-name-cursor']};
          color: ${props.theme.styleguide['$rsg-section-heading-section-name-color']};
        }        
      }
      & .deprecated {
        text-decoration: ${props.theme.styleguide['$rsg-section-heading-deprecated-text-decoration']};
        cursor: ${props.theme.styleguide['$rsg-section-heading-deprecated-cursor']};
      }
      & .toolbar {
        margin-left: ${props.theme.styleguide['$rsg-section-heading-toolbar-margin-left']};
      }
      & .level-1 {
        color: ${props.theme.styleguide['$rsg-section-heading-1-color']};
      }
      & .level-2 {
        color: ${props.theme.styleguide['$rsg-section-heading-2-color']};
      }
    }
 `}
`;

SectionHeadingRenderer.defaultProps = defaultProps;
SectionHeadingRenderer.propTypes = propTypes;

export default SectionHeadingRenderer;
