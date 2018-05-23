/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Ul from 'bootstrap-styled/lib/Ul';
import Li from 'bootstrap-styled/lib/Li';
import Link from '../Link';

export function ComponentsListRenderer({ items }) {
  items = items.filter(item => item.name);

  if (!items.length) {
    return null;
  }

  return (
    <Ul>
      {items.map(({ heading, name, href, content }) => (
        <Li
          key={href}
        >
          <Link href={href}>
            {name}
          </Link>
          {content}
        </Li>
      ))}
    </Ul>
  );
}

ComponentsListRenderer.propTypes = {
  items: PropTypes.array.isRequired,
  useIsolatedLinks: PropTypes.bool,
};

export default ComponentsListRenderer;
/* eslint-disable */
