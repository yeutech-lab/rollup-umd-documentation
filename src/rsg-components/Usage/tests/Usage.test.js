/* eslint-disable */
/**
 * Testing our Usage component
 */
import { mount } from 'enzyme';
import React from 'react';
import Usage from '../Usage';

const renderComponent = (props = {}) => mount(
  <Usage {...props} />
);

describe('<Usage />', () => {
  let properties = {};
  it('should render an Usage with props properties', () => {
    const renderedComponent = renderComponent({
      props: properties,
    });
    expect(renderedComponent.props().props).toEqual({});
  });
});
