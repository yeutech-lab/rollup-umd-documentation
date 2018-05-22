/* eslint-disable dot-notation */
export function makeTheme(userTheme = { styleguide: {} }) {
  const newTheme = { styleguide: {} };
  const v = newTheme.styleguide;
  const u = userTheme.styleguide || {};
  // Styleguide variable
  v['$rsg-main-margin-left'] = u['$rsg-main-margin-left'] || {
    xs: '0',
    md: '300px',
  };
  v['$rsg-section-heading-link-color'] = u['$rsg-section-heading-link-color'] || '#292b2c';
  v['$rsg-section-heading-link-hover-color'] = u['$rsg-section-heading-link-hover-color'] || '#d9534f';
  v['$rsg-toc-display'] = u['$rsg-toc-display'] || 'block';
  v['$rsg-toc-padding'] = u['$rsg-toc-padding'] || '0';
  v['$rsg-toc-color'] = u['$rsg-toc-color'] || '#fff';
  v['$rsg-toc-hover-color'] = u['$rsg-toc-hover-color'] || '#ce4953';
  newTheme.styleguide = v;
  return { ...userTheme, ...newTheme };
}
/* eslint-enable dot-notation */
export default makeTheme();
