import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import ReactComponent from '../ReactComponent'; // eslint-disable-line no-unused-vars
import ComponentsRenderer from './ComponentsRenderer'; // eslint-disable-line no-unused-vars

export default function Components({ components, depth }) {
  return (
    <ComponentsRenderer>
      {components.map((component) => (
        <ReactComponent key={component.filepath} component={component} depth={depth} />
      ))}
    </ComponentsRenderer>
  );
}

Components.propTypes = {
  components: PropTypes.array.isRequired,
  depth: PropTypes.number.isRequired,
};
