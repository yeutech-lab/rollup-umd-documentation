import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Group from 'react-group'; // eslint-disable-line no-unused-vars
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars
import Name from '../Name'; // eslint-disable-line no-unused-vars
import Type from '../Type'; // eslint-disable-line no-unused-vars

export function ArgumentRenderer({
  name,
  type,
  description,
  returns,
  block,
  ...props
}) {
  return (
    <Group {...props}>
      {returns && 'Returns'}
      {name && (
        <span>
          <Name>{name}</Name>
          {type && ':'}
        </span>
      )}
      {type && <Type>{type.name}</Type>}
      {type && description && ' — '}
      {description && <Markdown text={`${description}`} inline />}
    </Group>
  );
}

ArgumentRenderer.propTypes = {
  name: PropTypes.string,
  type: PropTypes.object,
  description: PropTypes.string,
  returns: PropTypes.bool,
  block: PropTypes.bool,
};

export default ArgumentRenderer;
