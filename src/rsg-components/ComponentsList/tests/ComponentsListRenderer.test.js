/**
 * Testing our link component
 */
import React from 'react';
import { shallow } from 'enzyme';
// import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import ComponentListRenderer from '../index';

jest.mock('../../../../node_modules/react-styleguidist/lib/utils/getUrl', () => ({ getUrl: jest.fn() }));
// import getUrl from '../../../../node_modules/react-styleguidist/lib/utils/getUrl';


const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(<ComponentListRenderer {...props}>{children}</ComponentListRenderer>);

// const renderComponentUsingTheme = (props = {}) => mount(<BootstrapProvider><ComponentListRenderer {...props}>{children}</ComponentListRenderer></BootstrapProvider>);

describe('<ComponentListRenderer />', () => {
  // let onClick;
  // let mappedItems;
  // beforeAll(() => {
  //   onClick = jest.fn();
  // });
  //
  // beforeEach(() => {
  //   mappedItems = [{
  //     href: getUrl,
  //   },];
  //   onClick = jest.fn();
  // });

  it.skip('should render an <ComponentListRenderer> tag without a theme', () => {
    const renderedComponent = renderComponent({
      // items: mappedItems,
    });
    expect(renderedComponent.find('ComponentListRendererUnstyled').length).toBe(1);
  });
});
