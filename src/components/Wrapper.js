import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is just a div, but you can wrap your example with everything you need in the scope. For example, if you want a particular store for every test,
 * You could add redux Provider or styled-components ThemeProvider to have an example scope for each tests.
 * Note that if you want a global scope for all your examples, you should use the LayoutRenderer.
 * @param props
 */
const Wrapper = (props) => <div {...props} />;

Wrapper.propTypes = {
  /** Example will be passed as Wrapper children automatically. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
