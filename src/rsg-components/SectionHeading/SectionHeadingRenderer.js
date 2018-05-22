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
      '$rsg-section-heading-link-color': '#383535',
      '$rsg-section-heading-link-hover-color': '#CE4953',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  toolbar: PropTypes.node, // eslint-disable-line react/require-default-props
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-section-heading-link-color': PropTypes.string,
      '$rsg-section-heading-link-hover-color': PropTypes.string,
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
      className={mapToCssModules(cn(className, 'section-heading d-flex justify-content-between'), cssModule)}
      {...attributes}
    >
      <Heading level={headingLevel} id={id}>
        <A className="section-heading-link" href={href}>
          {children}
        </A>
      </Heading>
      <div>{toolbar}</div>
    </div>
  );
};

SectionHeadingRendererUnstyled.defaultProps = defaultProps;
SectionHeadingRendererUnstyled.propTypes = propTypes;

const SectionHeadingRenderer = styled(SectionHeadingRendererUnstyled)` 
  ${(props) => `
    &.section-heading {
      .section-heading-link {
        color: ${props.theme.styleguide['$rsg-section-heading-link-color']};
        &:hover {
          color: ${props.theme.styleguide['$rsg-section-heading-link-hover-color']};
        }
      }
    }
 `}
`;

SectionHeadingRenderer.defaultProps = defaultProps;
SectionHeadingRenderer.propTypes = propTypes;

export default SectionHeadingRenderer;
