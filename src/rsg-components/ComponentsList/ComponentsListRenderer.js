import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'bootstrap-styled/lib/Collapse';
import Link from '../Link';

export const defaultProps = {
  items: [], // eslint-disable-line react/default-props-match-prop-types
};

export const propTypes = {
  /**
   * @ignore
   */
  items: PropTypes.array.isRequired,
  useIsolatedLinks: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types, react/require-default-props
};

class ComponentsListRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  state = {
    itemList: this.props.items.filter((item) => item.name),
  }

  componentWillMount() {
    const newState = {};
    this.state.itemList.map(({ heading, name }) => {
      if (heading) {
        newState[`${name}-is-open`] = false;
        this.setState({ ...newState });
      }
      return null; // todo: I want to know how to do when we don't have specific return?
    });
  }
  onClick = (name) => {
    this.setState({
      [`${name}-is-open`]: !this.state[`${name}-is-open`],
    });
  };

  render() {
    const {
      itemList,
    } = this.state;
    if (!itemList.length) {
      return null;
    }
    return (
      <ul>
        {itemList.map(({
          heading,
          name,
          href,
          content,
        }) => (
          <li
            key={href}
          >
            <Link href={href} onClick={() => heading && this.onClick(name)}>
              {name}
            </Link>
            <Collapse isOpen={this.state[`${name}-is-open`]}>
              {content}
            </Collapse>
          </li>
        ))}
      </ul>
    );
  }
}

export default ComponentsListRenderer;
