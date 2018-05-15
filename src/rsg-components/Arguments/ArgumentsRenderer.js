import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Argument from '../Argument'; // eslint-disable-line no-unused-vars
import Heading from '../Heading'; // eslint-disable-line no-unused-vars

export function ArgumentsRenderer({
  args,
  heading,
}) {
  if (args.length === 0) {
    return null;
  }

  return (
    <div>
      {heading && (
        <div>
          <Heading level={5}>Arguments</Heading>
        </div>
      )}
      {args.map((arg) => <Argument key={arg.name} {...arg} />)}
    </div>
  );
}

ArgumentsRenderer.propTypes = {
  args: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.object,
    description: PropTypes.string,
  })).isRequired,
  heading: PropTypes.bool,
};

export default ArgumentsRenderer;
