import createMakeTheme, { toMakeTheme } from 'bootstrap-styled-theme/lib';
import makeThemeBs from 'bootstrap-styled/lib/theme/makeTheme';
import { makeTheme as makeThemeNavigationStyleguide } from 'navigation-bar/lib/NavigationStyleguide/theme';
import { makeTheme as makeThemeStyleguideBs } from './styleguidist-bs';

const newMakeThemeNavigationStyleguide = toMakeTheme(makeThemeNavigationStyleguide().navigationStyleguide);

const makeThemeNavigationStyleguideBs = newMakeThemeNavigationStyleguide({
  navigationStyleguide: {
    ...makeThemeNavigationStyleguide().navigationStyleguide,
    '$nav-styleguide-color': '#fff !important',
    '$nav-styleguide-width-md': '200px',
  },
});

const themeList = [
  makeThemeBs,
  toMakeTheme(makeThemeNavigationStyleguideBs),
  makeThemeStyleguideBs,
];

export const makeTheme = createMakeTheme(themeList);

export default makeTheme();

