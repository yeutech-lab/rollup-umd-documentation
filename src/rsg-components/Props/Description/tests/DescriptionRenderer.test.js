/* eslint-disable */
/**
 * Testing our DescriptionRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import DescriptionRenderer from '../DescriptionRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <DescriptionRenderer {...props}>
    {children}
  </DescriptionRenderer>
);

describe('<DescriptionRenderer />', () => {
  it('should render an DescriptionRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
