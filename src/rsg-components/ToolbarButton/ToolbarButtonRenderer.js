import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Button from 'bootstrap-styled/lib/Button'; // eslint-disable-line no-unused-vars
import A from 'bootstrap-styled/lib/A'; // eslint-disable-line no-unused-vars

export function ToolbarButtonRenderer({
  onClick,
  href,
  title,
  children,
}) {
  if (href !== undefined) {
    return (
      <A href={href} title={title} aria-label={title}>
        {children}
      </A>
    );
  }

  return (
    <Button onClick={onClick} title={title} aria-label={title}>
      {children}
    </Button>
  );
}

ToolbarButtonRenderer.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ToolbarButtonRenderer;
