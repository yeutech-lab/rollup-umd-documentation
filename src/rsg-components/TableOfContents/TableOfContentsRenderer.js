import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Nav from 'bootstrap-styled/lib/Nav'; // eslint-disable-line no-unused-vars

export function TableOfContentsRenderer({ children, searchTerm, onSearchTermChange }) {
  return (
    <div>
      <div>
        <div>
          <input
            value={searchTerm}
            placeholder="Filter by name"
            aria-label="Filter by name"
            onChange={(event) => onSearchTermChange(event.target.value)}
          />
        </div>
        <Nav>{children}</Nav>
      </div>
    </div>
  );
}

TableOfContentsRenderer.propTypes = {
  children: PropTypes.node,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};

export default TableOfContentsRenderer;
