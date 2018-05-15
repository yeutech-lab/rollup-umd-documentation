import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Input from 'bootstrap-styled/lib/Input'; // eslint-disable-line no-unused-vars
import Nav from 'bootstrap-styled/lib/Nav'; // eslint-disable-line no-unused-vars
import Form from 'bootstrap-styled/lib/Form'; // eslint-disable-line no-unused-vars

export function TableOfContentsRenderer({ children, searchTerm, onSearchTermChange }) {
  return (
    <div>
      <Form>
        <Input
          value={searchTerm}
          placeholder="Filter by name"
          aria-label="Filter by name"
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
      </Form>
      <Nav>{children}</Nav>
    </div>
  );
}

TableOfContentsRenderer.propTypes = {
  children: PropTypes.node,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};

export default TableOfContentsRenderer;
