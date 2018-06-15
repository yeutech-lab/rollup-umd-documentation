/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import StyleGuideRenderer from '../../rsg-bs-components/StyleGuide/StyleGuideRenderer';

/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutDefault({
  className, title, children, toc, hasSidebar, logoMenu, logoFooter
}) {
  return (
    <StyleGuideRenderer
      task={console.log('LayoutDefault')}
      className={className}
      title={title}
      logoMenu={logoMenu}
      logoFooter={logoFooter}
      toc={toc}
      hasSidebar={hasSidebar}
    >
      {children}
    </StyleGuideRenderer>
  )
}

LayoutDefault.propTypes = {
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** The documentation title */
  title: PropTypes.string.isRequired,
  /** TBD */
  toc: PropTypes.node.isRequired,
  /** define if the sidebar should be displayed */
  hasSidebar: PropTypes.bool.isRequired,
  /** Logo to use in sidebar menu */
  logoMenu: PropTypes.object.isRequired,
  /** Logo to use in footer */
  logoFooter: PropTypes.object.isRequired,
};

export default LayoutDefault;
