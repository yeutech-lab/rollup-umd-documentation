/**
 * BOOTSTRAP THEME STYLEGUIDE - HEADING TAG
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
export const makeTheme = (userTheme = {}) => {
  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  const v = {};
  const u = userTheme;

  v['$rsg-heading-margin'] = u['$rsg-heading-margin'] || 0;
  v['$rsg-heading-color'] = u['$rsg-heading-color'] || '#f44842';
  v['$rsg-heading-fontFamily'] = u['$rsg-heading-fontFamily'] || [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Roboto"',
    '"Oxygen"',
    '"Ubuntu"',
    '"Cantarell"',
    '"Fira Sans"',
    '"Droid Sans"',
    '"Helvetica Neue"',
    'sans-serif',
  ];
  v['$rsg-heading-fontWeight'] = u['$rsg-heading-fontWeight'] || 'normal';
  v['$rsg-heading-h1-font-size'] = u['$rsg-heading-h1-font-size'] || 55;
  v['$rsg-heading-h2-font-size'] = u['$rsg-heading-h2-font-size'] || 45;
  v['$rsg-heading-h3-font-size'] = u['$rsg-heading-h3-font-size'] || 30;
  v['$rsg-heading-h4-font-size'] = u['$rsg-heading-h4-font-size'] || 20;
  v['$rsg-heading-h5-font-size'] = u['$rsg-heading-h5-font-size'] || 18;
  v['$rsg-heading-h6-font-size'] = u['$rsg-heading-h6-font-size'] || 16;

  return Object.assign({}, u, v);
};

export default makeTheme();
