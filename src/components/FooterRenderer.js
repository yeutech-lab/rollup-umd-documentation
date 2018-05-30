import React from 'react';
import PropTypes from 'prop-types';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';
import Img from 'bootstrap-styled/lib/Img';
import Footer from 'bootstrap-styled/lib/Footer';
import A from 'bootstrap-styled/lib/A';
import styled from 'styled-components';
import omit from 'lodash.omit';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules/lib';
import defaultLogo from './yeutech-badge';
import whiteLogo from './logo-white';

export const defaultProps = {
  logo: whiteLogo,
  bottomLogo: defaultLogo,
  bottomLogoHref: 'https://www.yeutech.vn',
  bottomLogoText: '',
  theme: {
    styleguide: {
      '$rsg-footer-margin': '40px 0 60px 0',
      '$rsg-footer-float': 'right',
      '$rsg-footer-img-height': {
        xs: '35px',
        md: '43px',
      },
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  logo: PropTypes.node,
  bottomLogo: PropTypes.node,
  bottomLogoHref: PropTypes.string,
  bottomLogoText: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-footer-margin': PropTypes.string,
      '$rsg-footer-float': PropTypes.string,
      '$rsg-footer-img-height': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const FooterRendererUnstyled = (props) => {
  const {
    className,
    logo,
    bottomLogo,
    bottomLogoHref,
    bottomLogoText,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Footer
      className={mapToCssModules(cn(className, 'rsg-footer', cssModule))}
      {...attributes}
    >
      <span>{bottomLogoText}</span>
      <A
        href={bottomLogoHref}
        target="_blank"
        alt="Yeutech Company Limited"
        title="Yeutech Company Limited"
      >
        <Img
          className="rsg-footer-img"
          src={`data:image/png;base64,${bottomLogo}`}
          height="43px"
          alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
          title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
        />
      </A>
    </Footer>
  );
};

FooterRendererUnstyled.defaultProps = defaultProps;
FooterRendererUnstyled.propTypes = propTypes;

export const FooterRenderer = styled(FooterRendererUnstyled)`
  ${(props) => `
    &.rsg-footer {
      margin: ${props.theme.styleguide['$rsg-footer-margin']};
      float: ${props.theme.styleguide['$rsg-footer-float']};
      & .rsg-footer-img {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      height: ${props.theme.styleguide['$rsg-footer-img-height'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      height: ${props.theme.styleguide['$rsg-footer-img-height'].md};
    `
  )}
      }
    }
  `}
`;

FooterRenderer.defaultProps = defaultProps;
FooterRenderer.propTypes = propTypes;

export default FooterRenderer;
