import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import SectionsRenderer from './SectionsRenderer';

/* eslint-disable react/no-array-index-key */
export default function Sections({ sections, depth }) {
  return (
    <SectionsRenderer>
      {sections.map((section, idx) => <Section key={idx} section={section} depth={depth} />)}
    </SectionsRenderer>
  );
}
/* eslint-enable react/no-array-index-key */
Sections.propTypes = {
  sections: PropTypes.array.isRequired,
  root: PropTypes.bool, // eslint-disable-line react/require-default-props, react/no-unused-prop-types
  depth: PropTypes.number.isRequired,
};
