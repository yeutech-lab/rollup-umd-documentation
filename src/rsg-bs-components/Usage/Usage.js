import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import Props from 'rsg-components/Props';
import Methods from 'rsg-components/Methods';

export default function Usage({ props: { props, methods } }) {
  const propsNode = !isEmpty(props) && <Props props={props} />;
  const methodsNode = !isEmpty(methods) && <Methods methods={methods} />;

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
