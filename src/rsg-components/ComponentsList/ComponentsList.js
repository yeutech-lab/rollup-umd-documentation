import React from 'react';
import PropTypes from 'prop-types';
import getUrl from '../../../styleguide/utils/getUrl';
import ComponentsListRenderer from './ComponentsListRenderer';

function ComponentsList({ items, useIsolatedLinks = false }) {
  const mappedItems = items.map((item) => ({
    ...item,
    href: getUrl({
      name: item.name,
      slug: item.slug,
      anchor: !useIsolatedLinks,
      isolated: useIsolatedLinks,
    }),
  }));
  return <ComponentsListRenderer items={mappedItems} />;
}

ComponentsList.propTypes = {
  items: PropTypes.array.isRequired,
  useIsolatedLinks: PropTypes.bool, // eslint-disable-line react/require-default-props
};

export default ComponentsList;
