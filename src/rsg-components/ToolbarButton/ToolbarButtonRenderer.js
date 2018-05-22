import React from 'react';
import PropTypes from 'prop-types';
import Button from 'bootstrap-styled/lib/Button';
import A from 'bootstrap-styled/lib/A';

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
  href: PropTypes.string, // eslint-disable-line react/require-default-props
  onClick: PropTypes.func, // eslint-disable-line react/require-default-props
  title: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node, // eslint-disable-line react/require-default-props
};

export default ToolbarButtonRenderer;
