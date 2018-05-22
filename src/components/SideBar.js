import React from 'react';
import PropTypes from 'prop-types';
import NavigationStyleguide from 'navigation-bar/lib/NavigationStyleguide/NavigationStyleguide';
import Img from 'bootstrap-styled/lib/Img';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import A from 'bootstrap-styled/lib/A';
import Logo from '../rsg-components/Logo';

export const defaultProps = {
  className: null,
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
  logo: PropTypes.object, // eslint-disable-line react/require-default-props
  title: PropTypes.string, // eslint-disable-line react/require-default-props
  items: PropTypes.node, // eslint-disable-line react/require-default-props
};

const SideBar = (props) => {
  const {
    className,
    cssModule,
    logo,
    title,
    items,
    ...attributes
  } = props;
  return (
    <NavigationStyleguide
      className={mapToCssModules(cn(className, 'navigation'), cssModule)}
      {...attributes}
    >
      <div className="text-center">
        {logo.logoHref ? (
          <A
            href={logo.logoHref}
            target="_blank"
            alt="Yeutech Company Limited"
            title="Yeutech Company Limited"
          >
            <Img
              src={`data:image/png;base64,${logo.logo}`}
              height="70px"
              alt={logo ? 'Yeutech Company Limited logo' : 'logo'}
              title={logo ? 'Yeutech Company Limited' : 'Brand logo'}
            />
          </A>
        ) : (
          <Img
            src={`data:image/png;base64,${logo.logo}`}
            height="70px"
            alt={logo ? 'Yeutech Company Limited logo' : 'logo'}
            title={logo ? 'Yeutech Company Limited' : 'Brand logo'}
          />
        )}
        <Logo>{title}</Logo>
      </div>
      {items}
    </NavigationStyleguide>
  );
};

SideBar.defaultProps = defaultProps;
SideBar.propTypes = propTypes;

export default SideBar;
