import React from 'react';
import PropTypes from 'prop-types';
import H1 from 'bootstrap-styled/lib/H1';
import H2 from 'bootstrap-styled/lib/H2';
import H3 from 'bootstrap-styled/lib/H3';
import H4 from 'bootstrap-styled/lib/H4';
import H5 from 'bootstrap-styled/lib/H5';
import H6 from 'bootstrap-styled/lib/H6';

const typoList = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

function HeadingRenderer({ level, children, ...props }) {
  const Tag = typoList[`H${level}`] || H1;
  return (
    <Tag {...props}>
      {children}
    </Tag>
  );
}

HeadingRenderer.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node, // eslint-disable-line react/require-default-props
};

export default HeadingRenderer;
