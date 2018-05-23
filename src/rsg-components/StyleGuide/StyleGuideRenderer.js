import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Markdown from '../Markdown';
import Ribbon from '../Ribbon';

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
  hasSidebar: PropTypes.bool, // eslint-disable-line react/require-default-props
};

export default StyleGuideRenderer;
