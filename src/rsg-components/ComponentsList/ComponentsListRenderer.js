import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'bootstrap-styled/lib/Collapse';
import Ul from 'bootstrap-styled/lib/Ul';
import Li from 'bootstrap-styled/lib/Li';
import Fa from 'bootstrap-styled/lib/Fa';
import '!!style-loader!css-loader!../../../node_modules/font-awesome/css/font-awesome.css'; // eslint-disable-line import/no-webpack-loader-syntax
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
      '$rsg-component-list-line-height': '2.5',
      '$rsg-component-list-heading-margin': '15px 0 0 0',
      '$rsg-component-list-heading-border-bottom': '1px solid #d8d8d8',
      '$rsg-component-list-heading-color': '#d9534f',
      '$rsg-component-list-heading-hover-color': '#9e9e9e',
      '$rsg-component-list-heading-font-size': '16px',
      '$rsg-component-list-heading-font-weight': '500',
      '$rsg-component-list-icon-margin': '15px 15px 0 0',
      '$rsg-component-list-icon-color': '#d9534f',
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
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-component-list-color': PropTypes.string,
      '$rsg-component-list-font-size': PropTypes.string,
      '$rsg-component-list-line-height': PropTypes.string,
      '$rsg-component-list-heading-margin': PropTypes.string,
      '$rsg-component-list-heading-border-bottom': PropTypes.string,
      '$rsg-component-list-heading-color': PropTypes.string,
      '$rsg-component-list-heading-hover-color': PropTypes.string,
      '$rsg-component-list-heading-font-size': PropTypes.string,
      '$rsg-component-list-heading-font-weight': PropTypes.string,
      '$rsg-component-list-icon-margin': PropTypes.string,
      '$rsg-component-list-icon-color': PropTypes.string,

    }),
  }),
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
  }

  componentWillMount() {
    const newState = {};
    this.state.itemList.map(({ heading, name, level }) => {
      if (heading) {
        newState[`${name}-is-open`] = false;
        newState[`${name}-index`] = level;
        this.setState({ ...newState });
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
          level,
          collapse,
        }) => (
          <Li
            key={href}
            className={`list-${level}`}
          >
            {heading ? (
              <div
                role="button"
                tabIndex="0"
                onClick={() => this.onClick(name)}
                onKeyPress={() => this.onClick(name)}
                className="d-flex justify-content-between"
              >
                <Link
                  className={`level-${level}`}
                  href={href}
                >
                  {name}
                </Link>
                {this.state[`${name}-is-open`] ? (
                  <Fa
                    className="rsg-component-list-icon"
                    size="lg"
                    angle-up
                  />
                ) : (
                  <Fa
                    className="rsg-component-list-icon"
                    size="lg"
                    angle-down
                  />
                )}
              </div>
            ) : (
              <Link
                className={`level-${level}`}
                href={href}
              >
                {name}
              </Link>
            )}
            {collapse ? (
              <Collapse isOpen={this.state[`${name}-is-open`]}>
                {content}
              </Collapse>
            ) : (
              content
            )}
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
        .list-0 {
          margin: ${props.theme.styleguide['$rsg-component-list-heading-margin']};
          border-bottom: ${props.theme.styleguide['$rsg-component-list-heading-border-bottom']};
        }
      & .level-0 {
        color: ${props.theme.styleguide['$rsg-component-list-heading-color']} !important;
        &:hover {
          color: ${props.theme.styleguide['$rsg-component-list-heading-hover-color']} !important;
        }
        font-size: ${props.theme.styleguide['$rsg-component-list-heading-font-size']} !important;
        font-weight: ${props.theme.styleguide['$rsg-component-list-heading-font-weight']} !important;
      }
      & .rsg-component-list-icon {
        margin: ${props.theme.styleguide['$rsg-component-list-icon-margin']};
        color: ${props.theme.styleguide['$rsg-component-list-icon-color']} !important;
      }
    }
 `}
`;

ComponentsListRenderer.defaultProps = defaultProps;
ComponentsListRenderer.propTypes = propTypes;

export default ComponentsListRenderer;
