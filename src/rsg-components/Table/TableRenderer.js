import React from 'react';
import PropTypes from 'prop-types';
import Table from 'bootstrap-styled/lib/Table';
import Thead from 'bootstrap-styled/lib/Table/Thead';
import Tr from 'bootstrap-styled/lib/Table/Tr';
import Th from 'bootstrap-styled/lib/Table/Th';
import Tbody from 'bootstrap-styled/lib/Table/Tbody';
import Td from 'bootstrap-styled/lib/Table/Td';
import Small from 'bootstrap-styled/lib/Small';
import Strong from 'bootstrap-styled/lib/Strong';

/* eslint-disable react/no-array-index-key */
export function TableRenderer({ columns, rows, getRowKey }) {
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          {columns.map(({ caption }) => (
            <Th key={caption}>
              <Small><Strong>{caption}</Strong></Small>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => (
          <Tr key={getRowKey(row)}>
            {columns.map(({ render }, index) => (
              <Td key={index}>
                {render(row)}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
/* eslint-enable react/no-array-index-key */
TableRenderer.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowKey: PropTypes.func.isRequired,
};

export default TableRenderer;
