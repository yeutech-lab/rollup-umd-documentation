import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { HOMEPAGE, DisplayModes } from 'react-styleguidist/scripts/consts';
import StyleGuideRenderer from './StyleGuideRenderer'; // eslint-disable-line no-unused-vars
import TableOfContents from '../TableOfContents'; // eslint-disable-line no-unused-vars
import Sections from '../Sections'; // eslint-disable-line no-unused-vars
import Welcome from '../Welcome'; // eslint-disable-line no-unused-vars
import Error from '../Error'; // eslint-disable-line no-unused-vars

/**
 * This function will return true, if the sidebar should be visible and false otherwise.
 *
 * These sorted conditions (highest precedence first) define the visibility
 * state of the sidebar.
 *
 * - Sidebar is hidden for isolated example views
 * - Sidebar is always visible when pagePerSection
 * - Sidebar is hidden when showSidebar is set to false
 * - Sidebar is visible when showSidebar is set to true for non-isolated views
 *
 * @param {boolean} displayMode
 * @param {boolean} showSidebar
 * @param {boolean} pagePerSection
 * @returns {boolean}
 */
function hasSidebar(displayMode, showSidebar, pagePerSection = false) {
  return (
    (pagePerSection && displayMode !== DisplayModes.example) ||
    (showSidebar && displayMode === DisplayModes.all)
  );
}

export default class StyleGuide extends Component {
  static propTypes = {
    codeRevision: PropTypes.number.isRequired,
    config: PropTypes.object.isRequired,
    slots: PropTypes.object.isRequired,
    sections: PropTypes.array.isRequired,
    welcomeScreen: PropTypes.bool,
    patterns: PropTypes.array,
    displayMode: PropTypes.string,
    allSections: PropTypes.array.isRequired,
    pagePerSection: PropTypes.bool,
  };

  static childContextTypes = {
    codeRevision: PropTypes.number.isRequired,
    config: PropTypes.object.isRequired,
    slots: PropTypes.object.isRequired,
    displayMode: PropTypes.string,
  };

  static defaultProps = {
    displayMode: DisplayModes.all,
  };

  state = {
    error: false,
    info: null,
  };

  getChildContext() {
    return {
      codeRevision: this.props.codeRevision,
      config: this.props.config,
      slots: this.props.slots,
      displayMode: this.props.displayMode,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }

  render() {
    const {
      config,
      sections,
      welcomeScreen,
      patterns,
      displayMode,
      allSections,
      pagePerSection,
    } = this.props;

    if (this.state.error) {
      return <Error error={this.state.error} info={this.state.info} />;
    }

    if (welcomeScreen) {
      return <Welcome patterns={patterns} />;
    }

    return (
      <StyleGuideRenderer
        title={config.title}
        homepageUrl={HOMEPAGE}
        toc={<TableOfContents sections={allSections} useIsolatedLinks={pagePerSection} />}
        hasSidebar={hasSidebar(displayMode, config.showSidebar, pagePerSection)}
      >
        <Sections sections={sections} depth={1} />
      </StyleGuideRenderer>
    );
  }
}
