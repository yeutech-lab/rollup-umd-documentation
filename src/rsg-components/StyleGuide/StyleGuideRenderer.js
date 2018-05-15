import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Logo from '../Logo'; // eslint-disable-line no-unused-vars
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars
import Ribbon from '../Ribbon'; // eslint-disable-line no-unused-vars

export function StyleGuideRenderer({
  title,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}) {
  return (
    <div>
      <main>
        {children}
        <footer>
          <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
        </footer>
      </main>
      {hasSidebar && (
        <div>
          <div>
            <Logo>{title}</Logo>
          </div>
          {toc}
        </div>
      )}
      <Ribbon />
    </div>
  );
}

StyleGuideRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
};

export default StyleGuideRenderer;
