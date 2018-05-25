import createMakeTheme, { toMakeTheme } from 'bootstrap-styled-theme/lib';
import { makeTheme as makeThemeBs } from 'bootstrap-styled/lib/theme/makeTheme'; // todo: fix error build when using import 'bootstrap-styled/lib/theme'
import { makeTheme as makeThemeNavigationStyleguide } from 'navigation-bar/lib/NavigationStyleguide/theme';
import { makeTheme as makeThemeStyleguideBs } from './styleguidist-bs';

const themeBsYeutech = makeThemeBs({
  '$btn-primary-color': '#b11255',
  '$btn-primary-bg': '#1C00ff00',
  '$btn-primary-border': '#1C00ff00',
  '$btn-box-shadow': '#1C00ff00 !important',
  '$font-size-h1': '2.5rem',
  '$font-size-h2': '2rem',
  '$font-size-h3': '1.75rem',
  '$font-size-h4': '1.5rem',
  '$font-size-h5': '1.25rem',
  '$font-size-h6': '1rem',
  '$headings-font-family': 'inherit',
  '$headings-font-weight': '500',
  '$headings-line-height': '2',
  '$headings-color': 'inherit',
  '$link-color': '#b11255',
  '$link-decoration': 'none',
  '$link-hover-color': '#4D0377',
  '$link-hover-decoration': 'none',
  '$code-color': '#333',
});

const themeNavigationYeutech = makeThemeNavigationStyleguide({
  navigationStyleguide: {
    '$nav-styleguide-color': '#fff !important',
    '$nav-styleguide-hover-color': '#d9534f !important',
  },
});

const themeList = [
  toMakeTheme(themeBsYeutech),
  toMakeTheme(themeNavigationYeutech),
  makeThemeStyleguideBs,
];

export const makeTheme = createMakeTheme(themeList);

export default makeTheme();

