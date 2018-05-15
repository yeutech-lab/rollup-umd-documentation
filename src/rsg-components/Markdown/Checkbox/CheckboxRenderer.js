import React from 'react'; // eslint-disable-line no-unused-vars
import Input from 'bootstrap-styled/lib/Input'; // eslint-disable-line no-unused-vars

export function CheckboxRenderer({ ...rest }) {
  return <Input {...rest} type="checkbox" />;
}

export default CheckboxRenderer;
