import createMakeTheme, { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as makeThemeBs } from '@bootstrap-styled/v4/lib/theme/makeTheme';
import { makeTheme as makeThemeNavigationStyleguide } from '@bootstrap-styled/navigation-bar/lib/NavigationStyleguide/theme';
import { makeTheme as makeThemeStyleguideBs } from './styleguidist-bs';

const themeBsYeutech = makeThemeBs({
  '$btn-primary-color': '#B31255',
  '$btn-primary-bg': '#1C00ff00',
  '$btn-primary-border': '#1C00ff00',
  '$btn-box-shadow': '#1C00ff00 !important',
  '$headings-font-family': '"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  '$headings-font-weight': 'normal',
  '$font-size-h1': '36px',
  '$font-size-h2': '30px',
  '$font-size-h3': '24px',
  '$font-size-h4': '20px',
  '$font-size-h5': '18px',
  '$font-size-h6': '16px',
  '$headings-line-height': '2',
  '$headings-color': 'inherit',
  '$link-color': '#3A007D',
  '$link-decoration': 'none',
  '$link-hover-color': '#B31255',
  '$link-hover-decoration': 'none',
  '$code-color': '#333',
  '$table-cell-padding': '0',
  '$table-border-width': '0',
});

const themeNavigationYeutech = makeThemeNavigationStyleguide({
  navigationStyleguide: {
    '$nav-styleguide-bg-color': 'white',
    '$nav-styleguide-border': 'none',
    '$nav-styleguide-width': {
      sm: '100%',
      md: '250px',
    },
  },
});

const themeList = [
  toMakeTheme(themeBsYeutech),
  toMakeTheme(themeNavigationYeutech),
  makeThemeStyleguideBs,
];

export const makeTheme = createMakeTheme(themeList);

export default makeTheme();

