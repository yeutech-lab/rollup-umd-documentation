import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Ol from 'bootstrap-styled/lib/Ol';
import Ul from 'bootstrap-styled/lib/Ul';

export function ListRenderer({ ordered, children }) {
  const Tag = ordered ? Ol : Ul;

  return (
    <Tag>
      {Children.map(children, (li) => cloneElement(li))}
    </Tag>
  );
}
ListRenderer.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
ListRenderer.defaultProps = {
  ordered: false,
};

export default ListRenderer;
