/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';

import cn from 'classnames';
import theme from 'bootstrap-styled/lib/theme';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';

import defaultLogo from './logo';

const styles = ({
  color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth,
}) => ({
  root: {
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']],
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
    textAlign: 'right',
  },
});

/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @param classes: className used by styleguide
 * @param className: className to be passed
 * @param title: title to be used for the view
 * @param children: generally the whole documentation
 * @param toc
 * @param hasSidebar: define if the sidebar should be visible
 * @param logo: If you need to change the logo, just wrap that component and pass a new logo
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
   classes, className, title, children, toc, hasSidebar, logo
 }) {
  return (
    <BootstrapProvider theme={theme}>
      <div className={cn(className, classes.root, hasSidebar && classes.hasSidebar)}>
        <main className={classes.content}>
          {children}
          <footer className={classes.footer}>
            <span>Module provided by</span>
            <a
              href="https://www.yeutech.vn"
              target="_blank"
              alt="Yeutech Company Limited"
              title="Yeutech Company Limited"
            >
              <img
                src={`data:image/png;base64,${logo}`}
                height="55px"
                alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
              />
            </a>
          </footer>
        </main>
        {hasSidebar && (
          <div className={classes.sidebar}>
            <div className={classes.logo}>
              <img
                src={`data:image/png;base64,${logo}`}
                height="70px"
                alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
              />
              <Logo>{title}</Logo>
            </div>
            {toc}
          </div>
        )}
      </div>
    </BootstrapProvider>
  );
}

LayoutRenderer.defaultProps = {
  logo: defaultLogo,
  className: null,
};

LayoutRenderer.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** if you want pass extra class */
  className: PropTypes.string,
  /** the page title */
  title: PropTypes.string.isRequired,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** @ignore */ // TODO: see what is toc
  toc: PropTypes.node.isRequired,
  /** define if the sidebar should be displayed */
  hasSidebar: PropTypes.bool,
  /** define the logo used by the layout */
  logo: PropTypes.string,
};

export default Styled(styles)(LayoutRenderer);
