import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Section from 'bootstrap-styled/lib/Section'; // eslint-disable-line no-unused-vars
import SectionHeading from '../SectionHeading'; // eslint-disable-line no-unused-vars
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars

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

export default SectionRenderer;
