import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Table from 'bootstrap-styled/lib/Table'; // eslint-disable-line no-unused-vars
import Thead from 'bootstrap-styled/lib/Table/Thead'; // eslint-disable-line no-unused-vars
import Tr from 'bootstrap-styled/lib/Table/Tr'; // eslint-disable-line no-unused-vars
import Th from 'bootstrap-styled/lib/Table/Th'; // eslint-disable-line no-unused-vars
import Tbody from 'bootstrap-styled/lib/Table/Tbody'; // eslint-disable-line no-unused-vars
import Td from 'bootstrap-styled/lib/Table/Td'; // eslint-disable-line no-unused-vars

export function TableRenderer({ columns, rows, getRowKey }) {
  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map(({ caption }) => (
            <Th key={caption}>
              {caption}
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

TableRenderer.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowKey: PropTypes.func.isRequired,
};

export default TableRenderer;
