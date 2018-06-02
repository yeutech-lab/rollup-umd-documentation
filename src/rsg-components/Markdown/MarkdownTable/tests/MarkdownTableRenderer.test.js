/* eslint-disable */
/**
 * Testing our MarkdownTableRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import MarkdownTableRenderer from '../MarkdownTableRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <MarkdownTableRenderer {...props}>
    {children}
  </MarkdownTableRenderer>
);

describe('<MarkdownTableRenderer />', () => {
  it('should render an MarkdownTableRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
