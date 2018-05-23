import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DOCS_DOCUMENTING } from 'react-styleguidist/scripts/consts';
import TabButton from '../TabButton';
import Markdown from '../Markdown';

export class ExamplePlaceholderRenderer extends Component {
  static propTypes = {
    name: PropTypes.string, // eslint-disable-line react/require-default-props
  };

  constructor() {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      isVisible: false,
    };
  }

  handleOpen() {
    this.setState({ isVisible: true });
  }

  render() {
    const { name } = this.props;
    const { isVisible } = this.state;
    if (isVisible) {
      return (
        <Markdown
          text={`
Create **Readme.md** or **${name}.md** file in the component’s folder like this:

    ${name} example:

    \`\`\`js
    <${name} pizza="\uD83C\uDF55" />
  \`\`\`

You may need to **restart** the style guide server after adding an example file.

Read more in the [documenting components guide](${DOCS_DOCUMENTING}).
          `}
        />
      );
    }

    return (
      <TabButton onClick={this.handleOpen}>
        Add examples to this component
      </TabButton>
    );
  }
}

export default ExamplePlaceholderRenderer;
