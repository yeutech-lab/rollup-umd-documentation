/* eslint-disable dot-notation */
export function makeTheme(userTheme = { styleguide: {} }) {
  const newTheme = { styleguide: {} };
  const v = newTheme.styleguide;
  const u = userTheme.styleguide || {};
  // Styleguide variable
  v['$rsg-main-margin-left'] = u['$rsg-main-margin-left'] || {
    xs: '0',
    md: '250px',
  };
  // STYLEGUIDE COMPONENTS
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
  v['$rsg-path-line-cursor'] = u['$rsg-path-line-cursor'] || 'pointer';
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
  v['$rsg-name-font-size'] = u['$rsg-name-font-size'] || '13px';
  v['$rsg-name-color'] = u['$rsg-name-color'] || '#b11255';
  v['$rsg-name-deprecated-color'] = u['$rsg-name-deprecated-color'] || '#f47469';
  v['$rsg-name-deprecated-decoration'] = u['$rsg-name-deprecated-decoration'] || 'line-through';
  v['$rsg-text-font-size'] = u['$rsg-name-font-size'] || {
    inherit: 'inherit',
    sm: '0.8em',
    base: '1em',
    text: '1.2em',
  };
  v['$rsg-text-color'] = u['$rsg-text-color'] || '#333';
  v['$rsg-text-color-light'] = u['$rsg-text-color-light'] || '#555556';
  v['$rsg-text-border-top'] = u['$rsg-text-border-top'] || '0';
  v['$rsg-text-border-bottom'] = u['$rsg-text-border-bottom'] || '1px dotted #9e9e9e';
  v['$rsg-text-font-family'] = u['$rsg-text-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-type-font-size'] = u['$rsg-type-font-size'] || '13px';
  v['$rsg-type-color'] = u['$rsg-type-color'] || '#75096a';
  v['$rsg-para-margin'] = u['$rsg-para-margin'] || '0 0 8px 0';
  v['$rsg-para-color'] = u['$rsg-para-color'] || '#333';
  v['$rsg-para-font-family'] = u['$rsg-para-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-para-font-size'] = u['$rsg-para-font-size'] || '16px';
  v['$rsg-para-line-height'] = u['$rsg-para-line-height'] || '1.5';
  v['$rsg-props-description-font-size'] = u['$rsg-props-description-font-size'] || '13px';
  // argument
  v['$rsg-argument-margin'] = u['$rsg-argument-margin'] || '0 0 8px 0';
  // arguments
  v['$rsg-arguments-margin'] = u['$rsg-arguments-margin'] || '0 0 8px 0';
  v['$rsg-arguments-font-size'] = u['$rsg-arguments-font-size'] || 'inherit';
  v['$rsg-arguments-heading-margin'] = u['$rsg-arguments-heading-margin'] || '0 0 4px 0';
  // editor
  v['$rsg-editor-padding'] = u['$rsg-editor-padding'] || '2px 8px 2px 2px';
  v['$rsg-editor-font-family'] = u['$rsg-editor-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-editor-font-size'] = u['$rsg-editor-font-size'] || '13px';
  v['$rsg-editor-color'] = u['$rsg-editor-color'] || '#767676';
  v['$rsg-editor-background-color'] = u['$rsg-editor-background-color'] || '#f5f5f5';
  v['$rsg-editor-global-isolation'] = u['$rsg-editor-global-isolation'] || false;
  v['$rsg-editor-global-font-family'] = u['$rsg-editor-global-font-family'] || 'Consolas, "Liberation Mono", Menlo, monospace';
  v['$rsg-editor-global-height'] = u['$rsg-editor-global-height'] || 'auto';
  v['$rsg-editor-global-padding'] = u['$rsg-editor-global-padding'] || '4px 8px';
  v['$rsg-editor-global-font-size'] = u['$rsg-editor-global-font-size'] || '13px';
  v['$rsg-editor-global-pre-isolation'] = u['$rsg-editor-global-pre-isolation'] || false;
  v['$rsg-editor-global-pre-padding'] = u['$rsg-editor-global-pre-padding'] || '0';
  v['$rsg-editor-global-scroll-isolation'] = u['$rsg-editor-global-scroll-isolation'] || false;
  v['$rsg-editor-global-scroll-height'] = u['$rsg-editor-global-scroll-height'] || 'auto';
  v['$rsg-editor-global-scroll-overflow-y'] = u['$rsg-editor-global-scroll-overflow-y'] || 'hidden';
  v['$rsg-editor-global-scroll-overflow-x'] = u['$rsg-editor-global-scroll-overflow-x'] || 'auto';
  v['$rsg-editor-global-error-isolation'] = u['$rsg-editor-global-error-isolation'] || false;
  v['$rsg-editor-global-error-background'] = u['$rsg-editor-global-error-background'] || 'none';

  // error
  v['$rsg-error-margin'] = u['$rsg-error-margin'] || '8px';
  v['$rsg-error-line-height'] = u['$rsg-error-line-height'] || '1.2';
  v['$rsg-error-font-size'] = u['$rsg-error-font-size'] || '13px';
  v['$rsg-error-stack-color'] = u['$rsg-error-stack-color'] || '#c00';
  v['$rsg-error-stack-white-space'] = u['$rsg-error-stack-white-space'] || 'pre';
  v['$rsg-error-stack-font-family'] = u['$rsg-error-stack-font-family'] || 'Consolas, "Liberation Mono", Menlo, monospace';
  v['$rsg-error-message-color'] = u['$rsg-error-message-color'] || '#c00';
  v['$rsg-error-message-font-family'] = u['$rsg-error-message-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  // example placeholder
  v['$rsg-example-placeholder-padding'] = u['$rsg-example-placeholder-padding'] || '0';
  v['$rsg-example-placeholder-font-size'] = u['$rsg-example-placeholder-font-size'] || '15px';
  v['$rsg-example-placeholder-font-family'] = u['$rsg-example-placeholder-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-example-placeholder-decoration'] = u['$rsg-example-placeholder-decoration'] || 'underline';
  v['$rsg-example-placeholder-color'] = u['$rsg-example-placeholder-color'] || '#767676';
  v['$rsg-example-placeholder-border'] = u['$rsg-example-placeholder-border'] || '0';
  v['$rsg-example-placeholder-cursor'] = u['$rsg-example-placeholder-cursor'] || 'pointer';
  v['$rsg-example-placeholder-background'] = u['$rsg-example-placeholder-background'] || 'transparent';
  v['$rsg-example-placeholder-hover-isolate'] = u['$rsg-example-placeholder-hover-isolate'] || 'false';
  v['$rsg-example-placeholder-hover-color'] = u['$rsg-example-placeholder-hover-color'] || '#ccc';
  // link
  v['$rsg-link-hover-isolate'] = u['$rsg-link-hover-isolate'] || 'false';
  // logo
  v['$rsg-logo-color'] = u['$rsg-logo-color'] || '#fff';
  v['$rsg-logo-margin'] = u['$rsg-logo-margin'] || '0';
  v['$rsg-logo-font-family'] = u['$rsg-logo-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-logo-font-size'] = u['$rsg-logo-font-size'] || '25px';
  v['$rsg-logo-font-weight'] = u['$rsg-logo-font-weight'] || 'normal';
  // message
  v['$rsg-message-margin'] = u['$rsg-message-margin'] || '24px';
  // playground
  v['$rsg-playground-margin'] = u['$rsg-playground-margin'] || '24px';
  v['$rsg-playground-preview-padding'] = u['$rsg-playground-preview-padding'] || '8px';
  v['$rsg-playground-preview-border'] = u['$rsg-playground-preview-border'] || '1px #e8e8e8 solid';
  v['$rsg-playground-preview-border-radius'] = u['$rsg-playground-preview-border-radius'] || '3';
  v['$rsg-playground-preview-width'] = u['$rsg-playground-preview-width'] || '100%';
  v['$rsg-playground-preview-display'] = u['$rsg-playground-preview-display'] || 'inline-block';
  v['$rsg-playground-controls-display'] = u['$rsg-playground-controls-display'] || 'flex';
  v['$rsg-playground-controls-align-items'] = u['$rsg-playground-controls-align-items'] || 'center';
  v['$rsg-playground-toolbar-margin'] = u['$rsg-playground-toolbar-margin'] || '0 0 0 auto';
  // playground-error
  v['$rsg-playground-error-margin'] = u['$rsg-playground-error-margin'] || '0';
  v['$rsg-playground-error-line-height'] = u['$rsg-playground-error-line-height'] || '1.2';
  v['$rsg-playground-error-font-size'] = u['$rsg-playground-error-font-size'] || '13px';
  v['$rsg-playground-error-font-family'] = u['$rsg-playground-error-font-family'] || 'Consolas, "Liberation Mono", Menlo, monospace';
  v['$rsg-playground-error-color'] = u['$rsg-playground-error-color'] || '#c00';
  v['$rsg-playground-error-white-space'] = u['$rsg-playground-error-white-space'] || 'pre';
  // react-component
  v['$rsg-react-component-margin'] = u['$rsg-react-component-margin'] || '0 0 40px 0';
  v['$rsg-react-component-header-margin'] = u['$rsg-react-component-header-margin'] || '0 0 16px 0';
  v['$rsg-react-component-docs-color'] = u['$rsg-react-component-docs-color'] || '#333';
  v['$rsg-react-component-docs-font-size'] = u['$rsg-react-component-docs-font-size'] || '16px';
  v['$rsg-react-component-tabs-margin'] = u['$rsg-react-component-tabs-margin'] || '0 0 16px 0';
  v['$rsg-react-component-tabs-button-margin'] = u['$rsg-react-component-tabs-button-margin'] || '0 0 8px 0';
  // ribbon
  v['$rsg-ribbon-position'] = u['$rsg-ribbon-position'] || 'fixed';
  v['$rsg-ribbon-top'] = u['$rsg-ribbon-top'] || '0';
  v['$rsg-ribbon-right'] = u['$rsg-ribbon-right'] || '0';
  v['$rsg-ribbon-width'] = u['$rsg-ribbon-width'] || '149px';
  v['$rsg-ribbon-height'] = u['$rsg-ribbon-height'] || '149px';
  v['$rsg-ribbon-z-index'] = u['$rsg-ribbon-z-index'] || '999';
  v['$rsg-ribbon-link-font-family'] = u['$rsg-ribbon-link-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-ribbon-link-position'] = u['$rsg-ribbon-link-position'] || 'relative';
  v['$rsg-ribbon-link-right'] = u['$rsg-ribbon-link-right'] || '-37px';
  v['$rsg-ribbon-link-top'] = u['$rsg-ribbon-link-top'] || '-22px';
  v['$rsg-ribbon-link-display'] = u['$rsg-ribbon-link-display'] || 'block';
  v['$rsg-ribbon-link-width'] = u['$rsg-ribbon-link-width'] || '190px';
  v['$rsg-ribbon-link-padding'] = u['$rsg-ribbon-link-padding'] || '4px 8px';
  v['$rsg-ribbon-link-text-align'] = u['$rsg-ribbon-link-text-align'] || 'center';
  v['$rsg-ribbon-link-color'] = u['$rsg-ribbon-link-color'] || '#fff';
  v['$rsg-ribbon-link-font-size'] = u['$rsg-ribbon-link-font-size'] || '15px';
  v['$rsg-ribbon-link-background'] = u['$rsg-ribbon-link-background'] || 'linear-gradient( to right, #B31255, #3A007D)';
  v['$rsg-ribbon-link-decoration'] = u['$rsg-ribbon-link-decoration'] || 'none';
  v['$rsg-ribbon-link-shadow'] = u['$rsg-ribbon-link-shadow'] || '0 -1px 0 rgba(0,0,0,.15)';
  v['$rsg-ribbon-link-transform-origin'] = u['$rsg-ribbon-link-transform-origin'] || '0 0';
  v['$rsg-ribbon-link-transform'] = u['$rsg-ribbon-link-transform'] || 'rotate(45deg)';
  v['$rsg-ribbon-link-cursor'] = u['$rsg-ribbon-link-cursor'] || 'pointer';
  // section
  v['$rsg-section-margin'] = u['$rsg-section-margin'] || '24px';
  // section-heading
  v['$rsg-section-heading-margin'] = u['$rsg-section-heading-margin'] || '2.5em 0 0 0';
  v['$rsg-section-heading-link-decoration'] = u['$rsg-section-heading-link-decoration'] || 'none';
  v['$rsg-section-heading-link-color'] = u['$rsg-section-heading-link-color'] || '#292b2c';
  v['$rsg-section-heading-link-hover-color'] = u['$rsg-section-heading-link-hover-color'] || '#b11255';
  // code
  v['$rsg-code-highlight-font-family'] = u['$rsg-code-font-family'] || 'SF Mono, Monaco, "Inconsolata", "Fira Code", "Fira Mono", "Droid Sans Mono", Consolas, "Roboto Mono", "Source Code Pro", monospace';
  v['$rsg-code-highlight-font-size'] = u['$rsg-code-font-size'] || 'inherit';
  v['$rsg-code-highlight-color'] = u['$rsg-code-color'] || '#b11255';
  v['$rsg-code-highlight-background'] = u['$rsg-code-background'] || 'transparent';
  v['$rsg-code-highlight-white-space'] = u['$rsg-code-white-space'] || 'nowrap';
  v['$rsg-code-font-family'] = u['$rsg-code-font-family'] || 'SF Mono, Monaco, "Inconsolata", "Fira Code", "Fira Mono", "Droid Sans Mono", Consolas, "Roboto Mono", "Source Code Pro", monospace';
  v['$rsg-code-font-size'] = u['$rsg-code-font-size'] || '16px';
  v['$rsg-code-color'] = u['$rsg-code-color'] || '#4D0377';
  v['$rsg-code-background'] = u['$rsg-code-background'] || 'transparent';
  v['$rsg-code-white-space'] = u['$rsg-code-white-space'] || 'nowrap';
  // menu
  // - sidebar
  v['$rsg-sidebar-linear-gradient'] = u['$rsg-sidebar-linear-gradient'] || 'linear-gradient(#3A007D, #B31255)';
  v['$rsg-sidebar-box-shadow'] = u['$rsg-sidebar-box-shadow'] || '8px 0 5px -2px #e2e2e2';
  v['$rsg-sidebar-logo-padding'] = u['$rsg-sidebar-logo-padding'] || '30px 0 0 0';
  v['$rsg-sidebar-logo-align'] = u['$rsg-sidebar-logo-align'] || 'center';
  // - table of content
  v['$rsg-toc-display'] = u['$rsg-toc-display'] || 'block';
  v['$rsg-toc-padding'] = u['$rsg-toc-padding'] || '0';
  v['$rsg-toc-form-background'] = u['$rsg-toc-form-background'] || '#B31255';
  v['$rsg-toc-form-padding'] = u['$rsg-toc-form-padding'] || '20px 0 20px 0';
  v['$rsg-toc-form-width'] = u['$rsg-toc-form-width'] || '80%';
  v['$rsg-toc-form-margin'] = u['$rsg-toc-form-margin'] || '0 auto';
  // table
  v['$rsg-table-width'] = u['$rsg-table-width'] || '100%';
  v['$rsg-table-border-collapse'] = u['$rsg-table-border-collapse'] || 'collapse';
  v['$rsg-table-margin'] = u['$rsg-table-margin'] || '24px';
  v['$rsg-table-head-border-top'] = u['$rsg-table-head-border-top'] || '0';
  v['$rsg-table-head-border-bottom'] = u['$rsg-table-head-border-bottom'] || '1px #e8e8e8 solid';
  v['$rsg-table-cell-heading-color'] = u['$rsg-table-cell-heading-color'] || '#333';
  v['$rsg-table-cell-heading-padding'] = u['$rsg-table-cell-heading-padding'] || '0 8px 4px 0';
  v['$rsg-table-cell-heading-text-align'] = u['$rsg-table-cell-heading-text-align'] || 'left';
  v['$rsg-table-cell-heading-font-family'] = u['$rsg-table-cell-heading-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-table-cell-heading-font-weight'] = u['$rsg-table-cell-heading-font-weight'] || 'bold';
  v['$rsg-table-cell-heading-font-size'] = u['$rsg-table-cell-heading-font-size'] || '13px';
  v['$rsg-table-cell-heading-white-space'] = u['$rsg-table-cell-heading-white-space'] || 'nowrap';
  v['$rsg-table-cell-border-top'] = u['$rsg-table-cell-border-top'] || '0';
  v['$rsg-table-cell-color'] = u['$rsg-table-cell-color'] || '#333';
  v['$rsg-table-cell-padding'] = u['$rsg-table-cell-padding'] || '4px 8px 4px 0';
  v['$rsg-table-cell-vertical-align'] = u['$rsg-table-cell-vertical-align'] || 'top';
  v['$rsg-table-cell-font-family'] = u['$rsg-table-cell-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-table-cell-font-size'] = u['$rsg-table-cell-font-size'] || '13px';
  v['$rsg-table-cell-child-isolation'] = u['$rsg-table-cell-child-isolation'] || 'false';
  v['$rsg-table-cell-child-width'] = u['$rsg-table-cell-child-width'] || '99%';
  v['$rsg-table-cell-child-padding'] = u['$rsg-table-cell-child-padding'] || '0 0 0 0';
  v['$rsg-table-cell-child-p-isolation'] = u['$rsg-table-cell-child-p-isolation'] || 'false';
  v['$rsg-table-cell-child-p-margin'] = u['$rsg-table-cell-child-p-margin'] || '0 0 0 0';
  // markdown
  v['$rsg-markdown-block-quote-margin'] = u['$rsg-markdown-block-quote-margin'] || '16px 32px';
  v['$rsg-markdown-block-quote-padding'] = u['$rsg-markdown-block-quote-padding'] || '0';
  v['$rsg-markdown-block-quote-color'] = u['$rsg-markdown-block-quote-color'] || '#333';
  v['$rsg-markdown-block-quote-font-family'] = u['$rsg-markdown-block-quote-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-markdown-block-quote-font-size'] = u['$rsg-markdown-block-quote-font-size'] || '15px';
  v['$rsg-markdown-block-line-height'] = u['$rsg-markdown-block-line-height'] || '1.5';
  v['$rsg-markdown-block-quote-border'] = u['$rsg-markdown-block-quote-border'] || 'none';
  v['$rsg-markdown-pre-font-family'] = u['$rsg-markdown-pre-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
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
  v['$rsg-markdown-list-li-font-family'] = u['$rsg-markdown-list-li-font-family'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-markdown-list-li-font-size'] = u['$rsg-markdown-list-li-font-size'] || 'inherit';
  v['$rsg-markdown-list-li-line-height'] = u['$rsg-markdown-list-li-line-height'] || '1.5';
  v['$rsg-markdown-list-li-style-type'] = u['$rsg-markdown-list-li-style-type'] || 'inherit';
  // component-list
  v['$rsg-component-list-color'] = u['$rsg-component-list-color'] || '#9e9e9e';
  v['$rsg-component-list-font-size'] = u['$rsg-component-list-font-size'] || '14px';
  v['$rsg-component-list-line-height'] = u['$rsg-component-list-line-height'] || '2.5';
  v['$rsg-component-list-heading-button-outline'] = u['$rsg-component-list-heading-button-outline'] || 'none';
  v['$rsg-component-list-heading-button-border'] = u['$rsg-component-list-heading-button-border'] || 'none';
  v['$rsg-component-list-heading-button-cursor'] = u['$rsg-component-list-heading-button-cursor'] || 'pointer';
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
