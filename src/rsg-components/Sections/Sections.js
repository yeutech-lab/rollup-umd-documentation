import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Section from '../Section'; // eslint-disable-line no-unused-vars
import SectionsRenderer from './SectionsRenderer'; // eslint-disable-line no-unused-vars

export default function Sections({ sections, depth }) {
  return (
    <SectionsRenderer>
      {sections.map((section, idx) => <Section key={idx} section={section} depth={depth} />)}
    </SectionsRenderer>
  );
}

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
  root: PropTypes.bool,
  depth: PropTypes.number.isRequired,
};
