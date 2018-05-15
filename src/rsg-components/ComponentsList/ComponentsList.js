import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import getUrl from 'react-styleguidist/lib/utils/getUrl';
import ComponentsListRenderer from './ComponentsListRenderer'; // eslint-disable-line no-unused-vars

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
  useIsolatedLinks: PropTypes.bool,
};

export default ComponentsList;
