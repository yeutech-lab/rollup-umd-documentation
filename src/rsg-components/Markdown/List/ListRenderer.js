import React, { Children, cloneElement } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Ol from 'bootstrap-styled/lib/Ol'; // eslint-disable-line no-unused-vars
import Ul from 'bootstrap-styled/lib/Ul'; // eslint-disable-line no-unused-vars

export function ListRenderer({ ordered, children }) {
  const Tag = ordered ? Ol : Ul; // eslint-disable-line no-unused-vars

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
