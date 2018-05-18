import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import A from 'bootstrap-styled/lib/A'; // eslint-disable-line no-unused-vars
import Heading from '../Heading'; // eslint-disable-line no-unused-vars

function SectionHeadingRenderer({
  children,
  toolbar,
  id,
  href,
  depth,
  deprecated, // eslint-disable-line no-unused-vars
}) {
  const headingLevel = Math.min(6, depth);

  return (
    <div>
      <Heading level={headingLevel} id={id}>
        <A href={href} color="gray-dark">
          {children}
        </A>
      </Heading>
      <div>{toolbar}</div>
    </div>
  );
}

SectionHeadingRenderer.propTypes = {
  children: PropTypes.node,
  toolbar: PropTypes.node,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool,
};

export default SectionHeadingRenderer;
