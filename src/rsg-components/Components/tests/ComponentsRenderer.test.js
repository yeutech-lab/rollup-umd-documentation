/* eslint-disable */
/**
 * Testing our ComponentsRenderer component
 */
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import { shallow } from 'enzyme';
import React from 'react';
import ComponentsRenderer from '../ComponentsRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ComponentsRenderer {...props}>
    {children}
  </ComponentsRenderer>
);

describe('<ComponentsRenderer />', () => {
  it('should render an ComponentsRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
