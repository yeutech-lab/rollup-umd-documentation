/**
 * Testing our link component
 */
import React from 'react';
import {
  // shallow,
  mount,
} from 'enzyme';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import '!!style-loader!css-loader!../../../node_modules/font-awesome/css/font-awesome.css'; // eslint-disable-line import/no-webpack-loader-syntax
import ComponentsListRenderer, { defaultProps } from '../ComponentsListRenderer';

describe('<ComponentsListRenderer />', () => {
  const { theme } = defaultProps;
  let props;
  let mappedItems;
  // let onClick = jest.fn();

  beforeEach(() => {
    props = Object.assign(defaultProps, {
      items: [{ href: 'blank#!/Button' }],
      useIsolatedLinks: false,
    });
  });

  it('should render an ComponentListRenderer with theme', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <ComponentsListRenderer
          items={mappedItems}
          {...props}
        />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Styled(ComponentsListRendererUnstyled)').length).toEqual(1);
  });
  it('should render a ComponentsListRenderer with items', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <ComponentsListRenderer
          items={mappedItems}
          {...props}
        />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('ComponentsListRendererUnstyled').props().items).toEqual([{ href: 'blank#!/Button' }]);
  });
  // it('should render an ComponentsListRenderer with an onClick that triggers collapse', () => {
  //   const renderedComponent = mount(
  //     <BootstrapProvider theme={theme} injectGlobal={false}>
  //       <ComponentsListRenderer
  //         items={mappedItems}
  //         {...props}
  //       />
  //     </BootstrapProvider>
  //   );
  //   const divButton = renderedComponent.find('Styled(ComponentsListRendererUnstyled)');
  //   expect(renderedComponent.find('Collapse').props().isOpen).toBe(false);
  //   divButton.simulate('click');
  //   expect(renderedComponent.find('Collapse').props().isOpen).toBe(true);
  // });
});
