import React from 'react';
import PropTypes from 'prop-types';
import Section from 'bootstrap-styled/lib/Section';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import SectionHeading from '../SectionHeading';
import Markdown from '../Markdown';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-section-margin': '60px 0 0 0',
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
  description: PropTypes.string,
  slug: PropTypes.string,
  filepath: PropTypes.string,
  content: PropTypes.node,
  components: PropTypes.node,
  sections: PropTypes.node,
  isolated: PropTypes.bool,
  depth: PropTypes.number.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-section-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const SectionRendererUnstyled = (props) => {
  const {
    className,
    name,
    slug,
    content,
    components,
    sections,
    depth,
    isolated,
    description,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Section
      className={mapToCssModules(cn(className, 'rsg-section', (isolated && 'isolated')), cssModule)}
      {...attributes}
    >
      {name && (
        <SectionHeading depth={depth} id={slug} slotName="sectionToolbar" slotProps={props}>
          {name}
        </SectionHeading>
      )}
      {description && <Markdown text={description} />}
      {content}
      {sections}

      {components}
    </Section>
  );
};

SectionRendererUnstyled.defaultProps = defaultProps;
SectionRendererUnstyled.propTypes = propTypes;

const SectionRenderer = styled(SectionRendererUnstyled)` 
  ${(props) => `
    &.rsg-section {
      margin: ${props.theme.styleguide['$rsg-section-margin']};
    }
    &.rsg-section.isolated {
      margin-left: 0 !important;
    }
 `}
`;

SectionRenderer.defaultProps = defaultProps;
SectionRenderer.propTypes = propTypes;

export default SectionRenderer;
