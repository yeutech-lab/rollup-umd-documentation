/* eslint-disable dot-notation */
export function makeTheme(userTheme = {}) {
  const v = {};
  const u = userTheme;
  // - font
  v['$font-size-h1'] = '2.5rem';
  // - color
  v['$red'] = u['$red'] || '#d9534f';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  // COMPONENT
  // - heading
  v['$headings-color'] = u['$headings-color'] || `${v['$gray-dark']} !important`;
  // - link color and decoration
  v['$link-color'] = u['$link-color'] || v['$red'];
  v['$link-decoration'] = u['$link-decoration'] || 'none';
  v['$link-hover-color'] = u['$link-hover-color'] || v['$gray-dark'];
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'none';
  return { ...u, ...v };
}
/* eslint-enable dot-notation */
export default makeTheme();
