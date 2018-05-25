import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'bootstrap-styled/lib/Collapse';
import Ul from 'bootstrap-styled/lib/Ul';
import Li from 'bootstrap-styled/lib/Li';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import omit from 'lodash.omit';
import Link from '../Link';

export const defaultProps = {
  items: [], // eslint-disable-line react/default-props-match-prop-types
  theme: {
    styleguide: {
      '$rsg-component-list-color': '#9e9e9e',
      '$rsg-component-list-font-size': '14px',
      '$rsg-component-list-line-height': '2',
      '$rsg-component-list-heading-color': '#d9534f',
      '$rsg-component-list-heading-font-size': '16px',
      '$rsg-component-list-heading-font-weight': '500',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  items: PropTypes.array.isRequired,
  useIsolatedLinks: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types, react/require-default-props
  theme: {
    styleguide: {
      '$rsg-component-list-color': PropTypes.string,
      '$rsg-component-list-font-size': PropTypes.string,
      '$rsg-component-list-line-height': PropTypes.string,
      '$rsg-component-list-heading-color': PropTypes.string,
      '$rsg-component-list-heading-font-size': PropTypes.string,
      '$rsg-component-list-heading-font-weight': PropTypes.string,
    },
  },
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

class ComponentsListRendererUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  state = {
    itemList: this.props.items.filter((item) => item.name),
    itemIndex: 0,
  }

  componentWillMount() {
    const newState = {};
    this.state.itemList.map(({ heading, name }) => {
      if (heading) {
        newState[`${name}-is-open`] = false;
        newState[`${name}-index`] = this.state.itemIndex;
        this.setState({ ...newState });
        this.setState({ itemIndex: this.state.itemIndex + 1 });
      }
      return null;
    });
  }
  onClick = (name) => {
    this.setState({
      [`${name}-is-open`]: !this.state[`${name}-is-open`],
    });
  };

  render() {
    const {
      className,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);
    const {
      itemList,
    } = this.state;
    if (!itemList.length) {
      return null;
    }
    return (
      <Ul
        className={mapToCssModules(cn(className, 'rsg-component-list'), cssModule)}
        {...attributes}
      >
        {itemList.map(({
          heading,
          name,
          href,
          content,
        }) => (
          <Li key={href}>
            <Link
              className={`index-${this.state.itemIndex}`}
              href={href}
              onClick={() => heading && this.onClick(name)}
            >
              {name}
            </Link>
            <Collapse isOpen={this.state[`${name}-is-open`]}>
              {content}
            </Collapse>
          </Li>
        ))}
      </Ul>
    );
  }
}

const ComponentsListRenderer = styled(ComponentsListRendererUnstyled)` 
  ${(props) => `
    &.rsg-component-list {
        color: ${props.theme.styleguide['$rsg-component-list-color']}; !important;
        font-size: ${props.theme.styleguide['$rsg-component-list-font-size']} !important;
        line-height: ${props.theme.styleguide['$rsg-component-list-line-height']};
      & .index-1 {
        color: ${props.theme.styleguide['$rsg-component-list-heading-color']} !important;
        font-size: ${props.theme.styleguide['$rsg-component-list-heading-font-size']} !important;
        font-weight: ${props.theme.styleguide['$rsg-component-list-heading-font-weight']} !important;
      }
    }
 `}
`;

ComponentsListRenderer.defaultProps = defaultProps;
ComponentsListRenderer.propTypes = propTypes;

export default ComponentsListRenderer;
