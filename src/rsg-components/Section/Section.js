import React from 'react';
import PropTypes from 'prop-types';
import { DisplayModes } from 'react-styleguidist/lib/consts';
import Examples from '../Examples';
import Components from '../Components';
import Sections from '../Sections';
import SectionRenderer from './SectionRenderer';

export default function Section({ section, depth }, { displayMode }) {
  const {
    name,
    slug,
    filepath,
    content,
    components,
    sections,
    description,
  } = section;

  const contentJsx = content && <Examples examples={content} name={name} />;
  const componentsJsx = components && <Components components={components} depth={depth + 1} />;
  const sectionsJsx = sections && <Sections sections={sections} depth={depth + 1} />;

  return (
    <SectionRenderer
      description={description}
      name={name}
      slug={slug}
      filepath={filepath}
      content={contentJsx}
      components={componentsJsx}
      sections={sectionsJsx}
      isolated={displayMode !== DisplayModes.all}
      depth={depth}
    />
  );
}

Section.propTypes = {
  section: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
};

Section.contextTypes = {
  displayMode: PropTypes.string,
};
