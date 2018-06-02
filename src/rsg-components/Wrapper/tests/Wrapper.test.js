/* eslint-disable */
/**
 * Testing our Wrapper component
 */
import { shallow } from 'enzyme';
import React from 'react';
import Wrapper from '../Wrapper';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Wrapper {...props}>
    {children}
  </Wrapper>
);

describe('<Wrapper />', () => {
  let onError;
  beforeAll(() => {
    onError = jest.fn();
  });

  it('should render an Wrapper with children', () => {
    const renderedComponent = renderComponent({
      onError: () => {},
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
