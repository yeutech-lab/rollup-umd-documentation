import React from 'react';
import PropTypes from 'prop-types';
import Group from 'react-group';
import Markdown from '../Markdown';
import Name from '../Name';
import Type from '../Type';

export function ArgumentRenderer({
  name,
  type,
  description,
  returns,
  block, // eslint-disable-line no-unused-vars
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
/* eslint-disable react/require-default-props */
ArgumentRenderer.propTypes = {
  name: PropTypes.string,
  type: PropTypes.object,
  description: PropTypes.string,
  returns: PropTypes.bool,
  block: PropTypes.bool,
};
/* eslint-disable react/require-default-props */
export default ArgumentRenderer;
