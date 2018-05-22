import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import Nav from 'bootstrap-styled/lib/Nav';
import Form from 'bootstrap-styled/lib/Form';
import Input from 'bootstrap-styled/lib/Input';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-toc-display': 'block',
      '$rsg-toc-padding': '0',
      '$rsg-toc-color': '#fff',
      '$rsg-toc-hover-color': '#ce4953',
    },
  },
};

export const propTypes = {
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-toc-display': PropTypes.string,
      '$rsg-toc-padding': PropTypes.string,
      '$rsg-toc-color': PropTypes.string,
      '$rsg-toc-hover-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const TableOfContentsRendererUnstyled = (props) => {
  const {
    className,
    children,
    searchTerm,
    onSearchTermChange,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-toc'), cssModule)}
      {...attributes}
    >
      <Form>
        <Input
          size="sm"
          value={searchTerm}
          placeholder="Filter by name"
          aria-label="Filter by name"
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
      </Form>
      <Nav className="rsg-toc-nav">
        {children}
      </Nav>
    </div>
  );
};

TableOfContentsRendererUnstyled.defaultProps = defaultProps;
TableOfContentsRendererUnstyled.propTypes = propTypes;

const TableOfContentsRenderer = styled(TableOfContentsRendererUnstyled)`
  ${(props) => `
    &.rsg-toc {
      .rsg-toc-nav {
        display: ${props.theme.styleguide['$rsg-toc-display']};
        padding: ${props.theme.styleguide['$rsg-toc-padding']};
      }
    }
  `}
`;

TableOfContentsRenderer.defaultProps = defaultProps;
TableOfContentsRenderer.propTypes = propTypes;

export default TableOfContentsRenderer;
