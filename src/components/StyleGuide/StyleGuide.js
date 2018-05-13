import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableOfContents from 'react-styleguidist/lib/rsg-components/TableOfContents';
import StyleGuideRenderer from 'react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer';
import Sections from 'react-styleguidist/lib/rsg-components/Sections';
import Welcome from 'react-styleguidist/lib/rsg-components/Welcome';
import Error from 'react-styleguidist/lib/rsg-components/Error';
import { HOMEPAGE } from 'react-styleguidist/scripts/consts';
import { DisplayModes } from 'react-styleguidist/lib/consts';

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
	  /** Define if component should rerender (1) or not (0) */
		codeRevision: PropTypes.number.isRequired,
    /** Config from styleguide.config.js file */
		config: PropTypes.object.isRequired,
    /** File from rsg-components/slots/index.js */
		slots: PropTypes.object.isRequired,
    /** Array of section to show defined in styleguide.ext.json */
		sections: PropTypes.array.isRequired,
		welcomeScreen: PropTypes.bool,
		patterns: PropTypes.array,
		displayMode: PropTypes.string,
		allSections: PropTypes.array.isRequired,
		pagePerSection: PropTypes.bool,
	};

	static childContextTypes = {
	  /* @codeRevision:  */
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
        fee={console.log(config.title)}
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
