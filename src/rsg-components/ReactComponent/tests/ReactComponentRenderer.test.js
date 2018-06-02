/* eslint-disable */
/**
 * Testing our ReactComponentRenderer component
 */
import { mount } from 'enzyme';
import React from 'react';
import ReactComponentRenderer from '../ReactComponentRenderer';

const renderComponent = (props = {}) => mount(
  <ReactComponentRenderer {...props} />
);

describe('<ReactComponentRenderer />', () => {
  let name;
  let heading;
  beforeAll(() => {
    name = 'heading';
    heading = <h1>Heading</h1>;
  });
  it('should render an ComponentListRenderer with h1 tag', () => {
    const renderedComponent = renderComponent({
      name,
      heading,
    });
    expect(renderedComponent.find('h1').length).toEqual(1);
  });
  it('should render an ComponentListRenderer with div containing id equal to heading-container', () => {
    const renderedComponent = renderComponent({
      name,
      heading,
    });
    expect(renderedComponent.find('div').props().id).toEqual('heading-container');
  });
});
