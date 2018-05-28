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
  // STYLEGUIDE COMPONENTS
  // section-heading
  v['$rsg-section-heading-margin'] = u['$rsg-section-heading-margin'] || '2.5em 0 0 0';
  v['$rsg-section-heading-link-decoration'] = u['$rsg-section-heading-link-decoration'] || 'none';
  v['$rsg-section-heading-link-color'] = u['$rsg-section-heading-link-color'] || '#292b2c';
  v['$rsg-section-heading-link-hover-color'] = u['$rsg-section-heading-link-hover-color'] || '#d9534f';
  // toolbar
  v['$rsg-toolbar-link-a-color'] = u['$rsg-toolbar-link-a-color'] || v['$rsg-section-heading-link-color'];
  v['$rsg-toolbar-link-a-hover-color'] = u['$rsg-toolbar-link-a-hover-color'] || v['$rsg-section-heading-link-hover-color'];
  v['$rsg-toolbar-link-margin'] = u['$rsg-toolbar-link-margin'] || '16px 0 0 0';
  v['$rsg-toolbar-button-a-color'] = u['$rsg-toolbar-button-a-color'] || v['$rsg-path-line-color'];
  v['$rsg-toolbar-button-a-hover-color'] = u['$rsg-toolbar-button-a-hover-color'] || v['$rsg-section-heading-link-hover-color'];
  v['$rsg-toolbar-button-margin'] = u['$rsg-toolbar-button-margin'] || '0 0 0 5px';
  v['$rsg-toolbar-button-padding'] = u['$rsg-toolbar-button-padding'] || '0';
  // path-line
  v['$rsg-path-line-color'] = u['$rsg-path-line-color'] || '#9e9e9e';
  v['$rsg-path-line-font-size'] = u['$rsg-path-line-font-size'] || '0.8em';
  v['$rsg-path-line-margin'] = u['$rsg-path-line-margin'] || '0 0 1.5em 0';
  // table of content
  v['$rsg-toc-display'] = u['$rsg-toc-display'] || 'block';
  v['$rsg-toc-padding'] = u['$rsg-toc-padding'] || '0';
  v['$rsg-toc-form-background'] = u['$rsg-toc-form-background'] || '#B31255';
  v['$rsg-toc-form-padding'] = u['$rsg-toc-form-padding'] || '0 0 20px 0';
  v['$rsg-toc-form-width'] = u['$rsg-toc-form-width'] || '80%';
  v['$rsg-toc-form-margin'] = u['$rsg-toc-form-margin'] || '0 auto';
  // tab-button
  v['$rsg-tab-button-margin'] = u['$rsg-tab-button-margin'] || '1em 0 1em 0';
  v['$rsg-tab-button-border'] = u['$rsg-tab-button-border'] || 'none';
  v['$rsg-tab-button-cursor'] = u['$rsg-tab-button-cursor'] || 'pointer';
  v['$rsg-tab-button-color'] = u['$rsg-tab-button-color'] || '#9e9e9e';
  v['$rsg-tab-button-hover-color'] = u['$rsg-tab-button-hover-color'] || '#fc971b';
  v['$rsg-tab-button-active-color'] = u['$rsg-tab-button-active-color'] || v['$rsg-tab-button-hover-color'];
  v['$rsg-tab-button-active-border-bottom'] = u['$rsg-tab-button-active-border-bottom'] || '4px solid #fc971b';
  v['$rsg-tab-button-active-box-shadow'] = u['$rsg-tab-button-active-box-shadow'] || 'none';
  // Props table
  v['$rsg-name-font-size'] = u['$rsg-name-font-size'] || '0.8em';
  v['$rsg-name-color'] = u['$rsg-name-color'] || '#2eb71f';
  v['$rsg-name-deprecated-color'] = u['$rsg-name-deprecated-color'] || '#f47469';
  v['$rsg-name-deprecated-decoration'] = u['$rsg-name-deprecated-decoration'] || 'line-through';
  v['$rsg-text-font-size'] = u['$rsg-name-font-size'] || {
    inherit: 'inherit',
    sm: '0.8em',
    base: '1em',
    text: '1.2em',
  };
  v['$rsg-text-color'] = u['$rsg-text-color'] || '#9e9e9e';
  v['$rsg-text-color-light'] = u['$rsg-text-color-light'] || '#8eba89';
  v['$rsg-text-border-bottom'] = u['$rsg-text-border-bottom'] || '1px dotted #9e9e9e';
  v['$rsg-type-color'] = u['$rsg-type-color'] || '#c153ba';
  v['$rsg-type-font-size'] = u['$rsg-type-font-size'] || '0.9em';

  v['$rsg-para-margin'] = u['$rsg-para-margin'] || '0 0 1.2em 0';
  v['$rsg-para-color'] = u['$rsg-para-color'] || '#494949';
  v['$rsg-para-font-size'] = u['$rsg-para-font-size'] || {
    sm: '0.8em',
    md: '1em',
  };
  v['$rsg-para-line-height'] = u['$rsg-para-line-height'] || '1.5';
  v['$rsg-props-description-font-size'] = u['$rsg-props-description-font-size'] || '0.8em';
  // code
  v['$rsg-code-font-family'] = u['$rsg-code-font-family'] || 'SF Mono, Monaco, Inconsolata, Fira Code, Fira Mono, Droid Sans Mono, Consolas, Roboto Mono, Source Code Pro, monospace;';
  v['$rsg-code-font-size'] = u['$rsg-code-font-size'] || 'inherit';
  v['$rsg-code-color'] = u['$rsg-code-color'] || '#d9534f';
  v['$rsg-code-background'] = u['$rsg-code-background'] || 'transparent';
  v['$rsg-code-white-space'] = u['$rsg-code-white-space'] || 'nowrap';
  // sidebar
  v['$rsg-sidebar-box-shadow'] = u['$rsg-sidebar-box-shadow'] || '8px 0 5px -2px #e2e2e2';
  v['$rsg-sidebar-linear-gradient'] = u['$rsg-sidebar-linear-gradient'] || 'linear-gradient(#3A007D, #B31255)';
  v['$rsg-sidebar-logo-padding'] = u['$rsg-sidebar-logo-padding'] || '30px 0 10px 0';
  v['$rsg-sidebar-logo-align'] = u['$rsg-sidebar-logo-align'] || 'center';
  // markdown
  v['$rsg-markdown-block-quote-margin'] = u['$rsg-markdown-block-quote-margin'] || '16px 32px';
  v['$rsg-markdown-block-quote-padding'] = u['$rsg-markdown-block-quote-padding'] || '0';
  v['$rsg-markdown-block-quote-color'] = u['$rsg-markdown-block-quote-color'] || '#333';
  v['$rsg-markdown-block-quote-font-family'] = u['$rsg-markdown-block-quote-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;';
  v['$rsg-markdown-block-quote-font-size'] = u['$rsg-markdown-block-quote-font-size'] || '15px';
  v['$rsg-markdown-block-line-height'] = u['$rsg-markdown-block-line-height'] || '1.5';
  v['$rsg-markdown-block-quote-border'] = u['$rsg-markdown-block-quote-border'] || 'none';
  v['$rsg-markdown-pre-font-family'] = u['$rsg-markdown-pre-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;';
  v['$rsg-markdown-pre-font-size'] = u['$rsg-markdown-pre-font-size'] || '13px';
  v['$rsg-markdown-pre-line-height'] = u['$rsg-markdown-pre-line-height'] || '1.5';
  v['$rsg-markdown-pre-color'] = u['$rsg-markdown-pre-color'] || '#333';
  v['$rsg-markdown-pre-white-space'] = u['$rsg-markdown-pre-white-space'] || 'pre';
  v['$rsg-markdown-pre-background-color'] = u['$rsg-markdown-pre-background-color'] || '#f5f5f5';
  v['$rsg-markdown-pre-padding'] = u['$rsg-markdown-pre-padding'] || '8px 16px';
  v['$rsg-markdown-pre-border'] = u['$rsg-markdown-pre-border'] || '1px #e8e8e8 solid';
  v['$rsg-markdown-pre-border-radius'] = u['$rsg-markdown-pre-border-radius'] || '3px';
  v['$rsg-markdown-pre-margin'] = u['$rsg-markdown-pre-margin'] || '0 0 16px 0';
  v['$rsg-markdown-list-margin'] = u['$rsg-markdown-list-margin'] || '0 0 16px 0';
  v['$rsg-markdown-list-padding'] = u['$rsg-markdown-list-padding'] || '0 0 0 24px';
  v['$rsg-markdown-list-font-size'] = u['$rsg-markdown-list-font-size'] || 'inherit';
  v['$rsg-markdown-list-ordered-style-type'] = u['$rsg-markdown-list-ordered-style-type'] || 'decimal';
  v['$rsg-markdown-list-li-color'] = u['$rsg-markdown-list-li-color'] || '#333';
  v['$rsg-markdown-list-li-font-family'] = u['$rsg-markdown-list-li-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;';
  v['$rsg-markdown-list-li-font-size'] = u['$rsg-markdown-list-li-font-size'] || 'inherit';
  v['$rsg-markdown-list-li-line-height'] = u['$rsg-markdown-list-li-line-height'] || '1.5';
  v['$rsg-markdown-list-li-style-type'] = u['$rsg-markdown-list-li-style-type'] || 'inherit';
  // component-list
  v['$rsg-component-list-color'] = u['$rsg-component-list-color'] || '#9e9e9e';
  v['$rsg-component-list-font-size'] = u['$rsg-component-list-font-size'] || '14px';
  v['$rsg-component-list-line-height'] = u['$rsg-component-list-line-height'] || '2.5';
  v['$rsg-component-list-heading-margin'] = u['$rsg-component-list-heading-margin'] || '15px 0 0 0';
  v['$rsg-component-list-heading-border-bottom'] = u['$rsg-component-list-heading-border-bottom'] || '1px solid #d8d8d8';
  v['$rsg-component-list-heading-color'] = u['$rsg-component-list-heading-color'] || '#d9534f';
  v['$rsg-component-list-heading-hover-color'] = u['$rsg-component-list-heading-hover-color'] || '#9e9e9e';
  v['$rsg-component-list-heading-font-size'] = u['$rsg-component-list-heading-font-size'] || '16px';
  v['$rsg-component-list-heading-font-weight'] = u['$rsg-component-list-heading-font-weight'] || '600';
  v['$rsg-component-list-icon-margin'] = u['$rsg-component-list-icon-margin'] || '15px 15px 0 0';
  v['$rsg-component-list-icon-color'] = u['$rsg-component-list-icon-color'] || v['$rsg-component-list-heading-color'];


  newTheme.styleguide = v;
  return { ...userTheme, ...newTheme };
}
/* eslint-enable dot-notation */
export default makeTheme();
