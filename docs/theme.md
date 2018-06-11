**You will need to override our `<LayoutRenderer />` component and pass it your new theme.**

You can override any style variables thanks to **modular theme** standards.

You can find more information about **modular theme** and discover how to create your own on the first project using **modular theme standards**: [bootstrap-styled](https://bootstrap-styled.yeutech.com/).

> You can also check directly any variable in projects:
>    * bootstrap-styled variables: `bootstrap-styled/lib/theme/makeTheme.js`.
>    * styleguide variables: `$PACKAGE_NAME/lib/theme/styleguidist-bs/index.js`.

### 1. Override variables by creating your `yourCustomTheme.js` file:

```js static
// Import theme utilities
import createMakeTheme, { toMakeTheme } from 'bootstrap-styled-theme/lib';

// Import theme from bootstrap-styled
import { makeTheme as makeThemeBs } from 'bootstrap-styled/lib/theme/makeTheme';

// Import theme from navigation-bar
import { makeTheme as makeThemeNavigationStyleguide } from '@yeutech/navigation-bar/lib/NavigationStyleguide/theme';

// Import theme from $PACKAGE_NAME
import { makeTheme as makeThemeStyleguideBs } from '$PACKAGE_NAME/lib/theme/styleguidist-bs';

// Override original bootstrap-styled variables
const yourBsTheme = makeThemeBs({
  '$btn-primary-color': '#B31255',
  '$headings-font-weight': 'normal',
  '$font-size-h1': '36px',
});

// Override original navigation-bar variables
const yourNavigationBsTheme = makeThemeNavigationStyleguide({
  navigationStyleguide: {
    '$nav-styleguide-bg-color': 'white',
    '$nav-styleguide-border': 'none',
    '$nav-styleguide-width': {
      sm: '100%',
      md: '250px',
    },
  },
});

// Override original styleguidist variables
const yourStyleguideBsTheme = makeThemeStyleguideBs({
  '$rsg-color-primary': '#B31255',
  '$rsg-color-secondary': '#3A007D',
  '$rsg-path-line-font-size': '13px',
});

// Add themes into list
const themeList = [
  toMakeTheme(yourBsTheme),
  toMakeTheme(yourNavigationBsTheme),
  toMakeTheme(yourStyleguideBsTheme),
];

// Merge themes
export const makeTheme = createMakeTheme(themeList);

// export your new theme
export default makeTheme();
```

### 2. Create a new layout component

Pass your new theme to `<BootstrapProvider />` component and keep `<StyleGuideRenderer />` component which will render your documentation:

```js static
// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import <BootstrapProvider /> component from bootstrap-styled
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';

// Import <StyleGuideRenderer /> component from $PACKAGE_NAME
import StyleGuideRenderer from '$PACKAGE_NAME/lib/rsg-bs-components/StyleGuide/StyleGuideRenderer';

// Import your new custom theme
import yourCustomTheme from 'path-to-/yourCustomTheme';

// Create <NewLayoutRenderer /> with correct props.
function NewLayoutRenderer({
   theme, className, title, children, toc, hasSidebar,logoMenu, logoFooter
 }) {
  return (
    <BootstrapProvider theme={theme}>
      <StyleGuideRenderer
        className={className}
        title={title}
        logoMenu={logoMenu}
        logoFooter={logoFooter}
        toc={toc}
        hasSidebar={hasSidebar}
      >
        {children}
      </StyleGuideRenderer>
    </BootstrapProvider>
  );
}

// Assign correct defaultProps to <NewLayoutRenderer /> component.
NewLayoutRenderer.defaultProps = {
  yourCustomTheme,
  title: 'Your module title',
  logoMenu: {
    logo: <div>Your logo</div>,
    href: null,
    alt: 'Your logo's alt description,
  },
  logoFooter: {
    logo: <div>Your footer logo</div>,
    href: 'Your logo link',
    target: '_blank',
    alt: 'Your footer logo's alt description',
  },
};

// Assign correct propTypes to <NewLayoutRenderer /> component.
NewLayoutRenderer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  toc: PropTypes.node.isRequired,
  theme: PropTypes.object,
  hasSidebar: PropTypes.bool,
  logoMenu: PropTypes.object,
  logoFooter: PropTypes.object,
};

// Export your <NewLayoutRenderer /> component.
export default NewLayoutRenderer;
```

### 3. Override StyleguideRenderer component:

In your `styleguide.config.js` add the key `styleguideComponents` with your `<NewLayoutRenderer />` component. 

```js static
const { config } = require('@yeutech/rollup-documentation/lib/styleguide.config.js');

module.exports = {
  ...config,
  styleguideComponents: {
    ...config.styleguideComponents,
    StyleGuideRenderer: 'path-to-your/NewLayoutRenderer',
  }
};
```

> For more information about `styleguideComponents` key, please check **[react-styleguidist documentation](https://react-styleguidist.js.org/docs/configuration.html#styleguidecomponents)**.
