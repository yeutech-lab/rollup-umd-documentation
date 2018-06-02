/* eslint-disable */
/**
 * Testing our Markdown component
 */
import { shallow } from 'enzyme';
import React from 'react';
import Markdown from '../Markdown';

const renderComponent = (props = {}) => shallow(
  <Markdown {...props} />
);

describe('<Markdown />', () => {
  it('should render an Markdown', () => {
    const renderedComponent = renderComponent({
      text: 'Markdown content',
    });
    expect(renderedComponent.length).toBe(1);
  });
});
