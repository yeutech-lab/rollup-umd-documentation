import React from 'react';
import PropTypes from 'prop-types';
import Pathline from '../Pathline';

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
/* eslint-disable react/require-default-props, react/no-unused-prop-types */
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
/* eslint-enable react/require-default-props, react/no-unused-prop-types */
export default ReactComponentRenderer;
