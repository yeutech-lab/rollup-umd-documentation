import React from 'react';
import PropTypes from 'prop-types';
import Props from 'rsg-components/Props';
import Methods from 'rsg-components/Methods';

export default function Usage({ props: { props, methods } }) {
  const propsNode = props && <Props props={props} />;
  const methodsNode = methods && methods.length > 0 && <Methods methods={methods} />;

  if (!propsNode && !methodsNode) {
    return null;
  }

  return (
    <div className="rsg-usage">
      {propsNode}
      {methodsNode}
    </div>
  );
}

Usage.propTypes = {
  /** Properties to be rendered in properties table. Can be: */
  props: PropTypes.shape({
    props: PropTypes.array,
    methods: PropTypes.array,
  }).isRequired,
};
