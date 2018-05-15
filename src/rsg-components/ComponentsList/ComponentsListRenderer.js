/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

export function ComponentsListRenderer({ items }) {
  items = items.filter(item => item.name);

  if (!items.length) {
    return null;
  }

  return (
    <ul>
      {items.map(({ heading, name, href, content }) => (
        <li
          key={href}
        >
          <Link href={href}>
            {name}
          </Link>
          {content}
        </li>
      ))}
    </ul>
  );
}

ComponentsListRenderer.propTypes = {
  items: PropTypes.array.isRequired,
  useIsolatedLinks: PropTypes.bool,
};

export default ComponentsListRenderer;
/* eslint-disable */
