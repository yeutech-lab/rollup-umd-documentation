import React from 'react';
import PropTypes from 'prop-types';
import Section from 'bootstrap-styled/lib/Section';
import SectionHeading from '../SectionHeading';
import Markdown from '../Markdown';

export function SectionRenderer(allProps) {
  const {
    name,
    slug,
    content,
    components,
    sections,
    depth,
    description,
  } = allProps;

  return (
    <Section>
      {name && (
        <SectionHeading depth={depth} id={slug} slotName="sectionToolbar" slotProps={allProps}>
          {name}
        </SectionHeading>
      )}
      {description && <Markdown text={description} />}
      {content}
      {sections}
      {components}
    </Section>
  );
}
/* eslint-disable react/require-default-props, react/no-unused-prop-types */
SectionRenderer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  filepath: PropTypes.string,
  content: PropTypes.node,
  components: PropTypes.node,
  sections: PropTypes.node,
  isolated: PropTypes.bool,
  depth: PropTypes.number.isRequired,
};
/* eslint-enable react/require-default-props, react/no-unused-prop-types */
export default SectionRenderer;
