import React from 'react';
import PropTypes from 'prop-types';
import getUrl from 'react-styleguidist/lib/utils/getUrl';
import ComponentsListRenderer from './ComponentsListRenderer';

function ComponentsList({ items, useIsolatedLinks = false, isOpenCollapse }) {
  const mappedItems = items.map((item) => ({
    ...item,
    href: getUrl({
      name: item.name,
      slug: item.slug,
      anchor: !useIsolatedLinks,
      isolated: useIsolatedLinks,
    }),
  }));
  return <ComponentsListRenderer items={mappedItems} isOpenCollapse={isOpenCollapse} />;
}

ComponentsList.propTypes = {
  items: PropTypes.array.isRequired,
  useIsolatedLinks: PropTypes.bool, // eslint-disable-line react/require-default-props
  isOpenCollapse: PropTypes.bool.isRequired,
};

export default ComponentsList;

