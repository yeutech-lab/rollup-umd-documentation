import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Pathline from '../Pathline'; // eslint-disable-line no-unused-vars

export function ReactComponentRenderer({
  name,
  heading,
  pathLine,
  description,
  docs,
  examples,
  tabButtons,
  tabBody,
}) {
  return (
    <div id={`${name}-container`}>
      <header>
        {heading}
        {pathLine && <Pathline>{pathLine}</Pathline>}
      </header>
      {(description || docs) && (
        <div>
          {description}
          {docs}
        </div>
      )}
      {tabButtons && (
        <div>
          <div>{tabButtons}</div>
          {tabBody}
        </div>
      )}
      {examples}
    </div>
  );
}

ReactComponentRenderer.propTypes = {
  name: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  filepath: PropTypes.string,
  pathLine: PropTypes.string,
  tabButtons: PropTypes.node,
  tabBody: PropTypes.node,
  description: PropTypes.node,
  docs: PropTypes.node,
  examples: PropTypes.node,
  isolated: PropTypes.bool,
};

export default ReactComponentRenderer;
