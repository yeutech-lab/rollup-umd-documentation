import createMakeTheme, { toMakeTheme } from 'bootstrap-styled-theme/lib';
import { makeTheme as makeThemeBs } from 'bootstrap-styled/lib/theme/makeTheme'; // todo: fix error build when using import 'bootstrap-styled/lib/theme'
import { makeTheme as makeThemeNavigationStyleguide } from 'navigation-bar/lib/NavigationStyleguide/theme';
import { makeTheme as makeThemeStyleguideBs } from './styleguidist-bs';

const themeStyleguide = makeThemeNavigationStyleguide({
  navigationStyleguide: {
    '$nav-styleguide-bg-color': '#D85052',
    '$nav-styleguide-color': '#fff !important',
    '$nav-styleguide-hover-color': '#911515 !important',
  },
});

const themeList = [
  makeThemeBs,
  toMakeTheme(themeStyleguide),
  makeThemeStyleguideBs,
];

export const makeTheme = createMakeTheme(themeList);

export default makeTheme();

