import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { DOCS_COMPONENTS } from 'react-styleguidist/scripts/consts';
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars

export function WelcomeRenderer({ patterns }) {
  return (
    <div>
      <Markdown
        text={`
# Welcome to React Styleguidist!

**We couldn’t find any components** using these patterns:

${patterns.map((p) => `- \`${p}\``).join('\n')}

Create **styleguide.config.js** file in your project root directory like this:

    module.exports = {
      components: 'src/components/**/*.js'
    };

Read more in the [locating components guide](${DOCS_COMPONENTS}).
        `}
      />
    </div>
  );
}

WelcomeRenderer.propTypes = {
  patterns: PropTypes.array.isRequired,
};

export default WelcomeRenderer;
