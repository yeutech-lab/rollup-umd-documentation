import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Playground from '../Playground'; // eslint-disable-line no-unused-vars
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars
import ExamplesRenderer from './ExamplesRenderer'; // eslint-disable-line no-unused-vars

export default function Examples({ examples, name }, { codeRevision }) {
  return (
    <ExamplesRenderer>
      {examples.map((example, index) => {
        switch (example.type) {
          case 'code':
            return (
              <Playground
                code={example.content}
                evalInContext={example.evalInContext}
                key={`${codeRevision}/${index}`}
                name={name}
                index={index}
                settings={example.settings}
              />
            );
          case 'markdown':
            return <Markdown text={example.content} key={index} />;
          default:
            return null;
        }
      })}
    </ExamplesRenderer>
  );
}
Examples.propTypes = {
  examples: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
Examples.contextTypes = {
  codeRevision: PropTypes.number.isRequired,
};
