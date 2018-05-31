import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOMEPAGE } from 'react-styleguidist/scripts/consts';
import { DisplayModes } from 'react-styleguidist/lib/consts';
import StyleGuideRenderer from './StyleGuideRenderer';
import TableOfContents from '../TableOfContents';
import Sections from '../Sections';
import Welcome from '../Welcome';
import Error from '../Error';

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
  /* eslint-disable react/require-default-props */
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
  /* eslint-enable react/require-default-props */
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
