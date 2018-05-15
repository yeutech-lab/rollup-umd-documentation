import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import H1 from 'bootstrap-styled/lib/H1'; // eslint-disable-line no-unused-vars
import H2 from 'bootstrap-styled/lib/H2'; // eslint-disable-line no-unused-vars
import H3 from 'bootstrap-styled/lib/H3'; // eslint-disable-line no-unused-vars
import H4 from 'bootstrap-styled/lib/H4'; // eslint-disable-line no-unused-vars
import H5 from 'bootstrap-styled/lib/H5'; // eslint-disable-line no-unused-vars
import H6 from 'bootstrap-styled/lib/H6'; // eslint-disable-line no-unused-vars

const typoList = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

function HeadingRenderer({ level, children, ...props }) {
  const Tag = typoList[`H${level}`] || H1; // eslint-disable-line no-unused-vars
  return (
    <Tag {...props}>
      {children}
    </Tag>
  );
}

HeadingRenderer.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
};

export default HeadingRenderer;
