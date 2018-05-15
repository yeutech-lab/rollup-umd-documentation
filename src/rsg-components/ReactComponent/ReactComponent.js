import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { DisplayModes } from 'react-styleguidist/lib/consts';
import Examples from '../Examples'; // eslint-disable-line no-unused-vars
import SectionHeading from '../SectionHeading'; // eslint-disable-line no-unused-vars
import JsDoc from '../JsDoc'; // eslint-disable-line no-unused-vars
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars
import Slot from '../Slot'; // eslint-disable-line no-unused-vars
import { DOCS_TAB_USAGE } from '../slots'; // eslint-disable-line no-unused-vars
import ReactComponentRenderer from './ReactComponentRenderer'; // eslint-disable-line no-unused-vars

const ExamplePlaceholder = // eslint-disable-line no-unused-vars
  process.env.STYLEGUIDIST_ENV !== 'production'
    ? require('../ExamplePlaceholder').default
    : () => <div />;

export default class ReactComponent extends Component {
  static propTypes = {
    component: PropTypes.object.isRequired,
    depth: PropTypes.number.isRequired,
  };
  static contextTypes = {
    config: PropTypes.object.isRequired,
    displayMode: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
    const { showUsage } = context.config;

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      activeTab: showUsage ? DOCS_TAB_USAGE : undefined,
    };
  }

  handleTabChange(name) {
    this.setState((state) => ({
      activeTab: state.activeTab !== name ? name : undefined,
    }));
  }

  render() {
    const { activeTab } = this.state;
    const { displayMode } = this.context;
    const { component, depth } = this.props;
    const {
      name,
      slug,
      filepath,
      pathLine,
    } = component;
    const {
      description,
      examples = [],
      tags = {},
    } = component.props;
    if (!name) {
      return null;
    }

    return (
      <ReactComponentRenderer
        name={name}
        slug={slug}
        filepath={filepath}
        pathLine={pathLine}
        docs={<JsDoc {...tags} />}
        description={description && <Markdown text={description} />}
        heading={
          <SectionHeading
            id={slug}
            deprecated={!!tags.deprecated}
            slotName="componentToolbar"
            slotProps={{
              ...component,
              isolated: displayMode !== DisplayModes.all,
            }}
            depth={depth}
          >
            {name}
          </SectionHeading>
        }
        examples={
          examples.length > 0 ? (
            <Examples examples={examples} name={name} />
          ) : (
            <ExamplePlaceholder name={name} />
          )
        }
        tabButtons={
          <Slot
            name="docsTabButtons"
            active={activeTab}
            props={{ ...component, onClick: this.handleTabChange }}
          />
        }
        tabBody={<Slot name="docsTabs" active={activeTab} onlyActive props={component} />}
      />
    );
  }
}
