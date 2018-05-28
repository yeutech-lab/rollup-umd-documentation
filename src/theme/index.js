import createMakeTheme, { toMakeTheme } from 'bootstrap-styled-theme/lib';
import { makeTheme as makeThemeBs } from 'bootstrap-styled/lib/theme/makeTheme'; // todo: fix error build when using import 'bootstrap-styled/lib/theme'
import { makeTheme as makeThemeNavigationStyleguide } from 'navigation-bar/lib/NavigationStyleguide/theme';
import { makeTheme as makeThemeStyleguideBs } from './styleguidist-bs';

const themeBsYeutech = makeThemeBs({
  '$btn-primary-color': '#D85052',
  '$btn-primary-bg': '#1C00ff00',
  '$btn-primary-border': '#1C00ff00',
  '$btn-box-shadow': '#1C00ff00 !important',
});

const themeNavigationYeutech = makeThemeNavigationStyleguide({
  navigationStyleguide: {
    '$nav-styleguide-bg-color': 'white',
    '$nav-styleguide-border': 'none',
  },
});

const themeList = [
  toMakeTheme(themeBsYeutech),
  toMakeTheme(themeNavigationYeutech),
  makeThemeStyleguideBs,
];

export const makeTheme = createMakeTheme(themeList);

export default makeTheme();

