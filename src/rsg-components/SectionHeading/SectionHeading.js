import React from 'react';
import PropTypes from 'prop-types';
import getUrl from 'react-styleguidist/lib/utils/getUrl';
import Slot from '../Slot';
import SectionHeadingRenderer from './SectionHeadingRenderer';

export default function SectionHeading({
  slotName,
  slotProps,
  children,
  id,
  ...rest
}) {
  const href = getUrl({ slug: id, anchor: true });
  return (
    <SectionHeadingRenderer
      toolbar={<Slot name={slotName} props={slotProps} />}
      id={id}
      href={href}
      {...rest}
    >
      {children}
    </SectionHeadingRenderer>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  id: PropTypes.string.isRequired,
  slotName: PropTypes.string.isRequired,
  slotProps: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
};
