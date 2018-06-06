import React from 'react';
import PropTypes from 'prop-types';
import Table from 'bootstrap-styled/lib/Table';
import Thead from 'bootstrap-styled/lib/Table/Thead';
import Tr from 'bootstrap-styled/lib/Table/Tr';
import Th from 'bootstrap-styled/lib/Table/Th';
import Tbody from 'bootstrap-styled/lib/Table/Tbody';
import Td from 'bootstrap-styled/lib/Table/Td';
import Strong from 'bootstrap-styled/lib/Strong';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-table-overflow': 'auto',
      '$rsg-table-width': '100%',
      '$rsg-table-border-collapse': 'collapse',
      '$rsg-table-margin': '24px 0 0 0',
      '$rsg-table-head-border-top': '0',
      '$rsg-table-head-border-bottom': '1px #e8e8e8 solid',
      '$rsg-table-cell-heading-color': '#333',
      '$rsg-table-cell-heading-padding': '0 8px 4px 0',
      '$rsg-table-cell-heading-text-align': 'left',
      '$rsg-table-cell-heading-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-table-cell-heading-font-weight': 'bold',
      '$rsg-table-cell-heading-font-size': '13px',
      '$rsg-table-cell-heading-white-space': 'nowrap',
      '$rsg-table-cell-border-top': '0',
      '$rsg-table-cell-color': '#333',
      '$rsg-table-cell-padding': {
        xs: '4px 8px 4px 0',
        md: '4px 56px 4px 0',
      },
      '$rsg-table-cell-vertical-align': 'top',
      '$rsg-table-cell-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-table-cell-font-size': '13px',
      '$rsg-table-cell-child-isolation': 'false',
      '$rsg-table-cell-child-width': '99%',
      '$rsg-table-cell-child-padding': '0 0 0 0',
      '$rsg-table-cell-child-p-isolation': 'false',
      '$rsg-table-cell-child-p-margin': '0 0 0 0',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Columns to be rendered. */
  columns: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  })).isRequired,
  /** Rows to be rendered. */
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Set function passed to `<Tr />` component. */
  getRowKey: PropTypes.func.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-table-overflow': PropTypes.string,
      '$rsg-table-width': PropTypes.string,
      '$rsg-table-border-collapse': PropTypes.string,
      '$rsg-table-margin': PropTypes.string,
      '$rsg-table-head-border-top': PropTypes.string,
      '$rsg-table-head-border-bottom': PropTypes.string,
      '$rsg-table-cell-heading-color': PropTypes.string,
      '$rsg-table-cell-heading-padding': PropTypes.string,
      '$rsg-table-cell-heading-text-align': PropTypes.string,
      '$rsg-table-cell-heading-font-family': PropTypes.string,
      '$rsg-table-cell-heading-font-weight': PropTypes.string,
      '$rsg-table-cell-heading-font-size': PropTypes.string,
      '$rsg-table-cell-heading-white-space': PropTypes.string,
      '$rsg-table-cell-border-top': PropTypes.string,
      '$rsg-table-cell-color': PropTypes.string,
      '$rsg-table-cell-padding': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
      '$rsg-table-cell-vertical-align': PropTypes.string,
      '$rsg-table-cell-font-family': PropTypes.string,
      '$rsg-table-cell-font-size': PropTypes.string,
      '$rsg-table-cell-child-isolation': PropTypes.string,
      '$rsg-table-cell-child-width': PropTypes.string,
      '$rsg-table-cell-child-padding': PropTypes.string,
      '$rsg-table-cell-child-p-isolation': PropTypes.string,
      '$rsg-table-cell-child-p-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const TableRendererUnstyled = (props) => {
  const {
    className,
    columns,
    rows,
    getRowKey,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  /* eslint-disable react/no-array-index-key */
  return (
    <Table
      className={mapToCssModules(cn(className, 'rsg-table'), cssModule)}
      {...attributes}
    >
      <Thead className="rsg-table-head">
        <Tr>
          {columns.map(({ caption }) => (
            <Th key={caption} className="rsg-table-cell-heading">
              <Strong>{caption}</Strong>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => (
          <Tr key={getRowKey(row)}>
            {columns.map(({ render }, index) => (
              <Td key={`rsg-table-cell-${index}`} className="rsg-table-cell">
                {render(row)}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
  /* eslint-enable react/no-array-index-key */
};

TableRendererUnstyled.defaultProps = defaultProps;
TableRendererUnstyled.propTypes = propTypes;


const TableRenderer = styled(TableRendererUnstyled)`
  ${(props) => `
    &.rsg-table {
      overflow: ${props.theme.styleguide['$rsg-table-overflow']};
      width: ${props.theme.styleguide['$rsg-table-width']};
      border-collapse: ${props.theme.styleguide['$rsg-table-border-collapse']} !important;
      margin: ${props.theme.styleguide['$rsg-table-margin']};
      .rsg-table-head {
        border-top: ${props.theme.styleguide['$rsg-table-head-border-top']};
        border-bottom: ${props.theme.styleguide['$rsg-table-head-border-bottom']};
        & .rsg-table-cell-heading {
          color: ${props.theme.styleguide['$rsg-table-cell-heading-color']};
          padding: ${props.theme.styleguide['$rsg-table-cell-heading-padding']};
          text-align: ${props.theme.styleguide['$rsg-table-cell-heading-text-align']};
          font-weight: ${props.theme.styleguide['$rsg-table-cell-heading-font-weight']};
          font-family: ${props.theme.styleguide['$rsg-table-cell-heading-font-family']};
          font-size: ${props.theme.styleguide['$rsg-table-cell-heading-font-size']};
          white-space: ${props.theme.styleguide['$rsg-table-cell-heading-white-space']};
        }
      }
      & .rsg-table-cell {
        border-top: ${props.theme.styleguide['$rsg-table-cell-border-top']};
        color: ${props.theme.styleguide['$rsg-table-cell-color']};
        
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding: ${props.theme.styleguide['$rsg-table-cell-padding'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      padding: ${props.theme.styleguide['$rsg-table-cell-padding'].md};
    `
  )}
        vertical-align: ${props.theme.styleguide['$rsg-table-cell-vertical-align']};
        font-family: ${props.theme.styleguide['$rsg-table-cell-font-family']};
        font-size: ${props.theme.styleguide['$rsg-table-cell-font-size']};
        &:last-child {
          isolation: ${props.theme.styleguide['$rsg-table-cell-child-isolation']};
          width: ${props.theme.styleguide['$rsg-table-cell-child-width']};
          padding: ${props.theme.styleguide['$rsg-table-cell-child-padding']};
        }
        & p:last-child {
          isolation: ${props.theme.styleguide['$rsg-table-cell-child-p-isolation']} !important;
          margin: ${props.theme.styleguide['$rsg-table-cell-child-p-margin']};
        }
      }
    }
 `}
`;

TableRenderer.defaultProps = defaultProps;
TableRenderer.propTypes = propTypes;

export default TableRenderer;
