/**
 * Testing our link component
 */
import React from 'react';
import { shallow } from 'enzyme';
import ComponentsList from '../index';

const renderComponent = (props = {}) => shallow(
  <ComponentsList {...props} />
);

describe('<ComponentsList />', () => {
  it('should render an <ComponentsListRenderer> tag with theme', () => {
    const items = [{}];
    const renderedComponent = renderComponent({
      items,
    });
    expect(renderedComponent.find('Styled(ComponentsListRendererUnstyled)').length).toBe(1);
  });
});
