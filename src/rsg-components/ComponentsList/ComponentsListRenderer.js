import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Ul from 'bootstrap-styled/lib/Ul'; // eslint-disable-line no-unused-vars
import Li from 'bootstrap-styled/lib/Li'; // eslint-disable-line no-unused-vars
import Link from '../Link'; // eslint-disable-line no-unused-vars

export function ComponentsListRenderer({ itemsNode }) {
  const items = itemsNode.filter((item) => item.name);

  if (!items.length) {
    return null;
  }

  return (
    <Ul>
      {items.map(({
        heading, // eslint-disable-line no-unused-vars
        name,
        href,
        content,
      }) => (
        <Li key={href}>
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
