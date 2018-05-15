import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import filterSectionsByName from 'react-styleguidist/lib/utils/filterSectionsByName';
import ComponentsList from '../ComponentsList'; // eslint-disable-line no-unused-vars
import TableOfContentsRenderer from './TableOfContentsRenderer'; // eslint-disable-line no-unused-vars

export default class TableOfContents extends Component {
  static propTypes = {
    sections: PropTypes.array.isRequired,
    useIsolatedLinks: PropTypes.bool,
  };
  state = {
    searchTerm: '',
  };

  renderLevel(sections, useIsolatedLinks = false) {
    const items = sections.map((section) => {
      const children = [...(section.sections || []), ...(section.components || [])];
      return Object.assign({}, section, {
        heading: !!section.name && children.length > 0,
        content: children.length > 0 && this.renderLevel(children, useIsolatedLinks),
      });
    });
    return <ComponentsList items={items} useIsolatedLinks={useIsolatedLinks} />;
  }

  renderSections() {
    const { searchTerm } = this.state;
    const { sections, useIsolatedLinks } = this.props;
    // If there is only one section, we treat it as a root section
    // In this case the name of the section won't be rendered and it won't get left padding
    const firstLevel = sections.length === 1 ? sections[0].components : sections;
    const filtered = filterSectionsByName(firstLevel, searchTerm);

    return this.renderLevel(filtered, useIsolatedLinks);
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <TableOfContentsRenderer
        searchTerm={searchTerm}
        onSearchTermChange={(searchTerm) => this.setState({ searchTerm })} // eslint-disable-line no-shadow
      >
        {this.renderSections()}
      </TableOfContentsRenderer>
    );
  }
}
