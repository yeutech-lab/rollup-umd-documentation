/* eslint-disable dot-notation */
export function makeTheme(userTheme = { styleguide: {} }) {
  const newTheme = { styleguide: {} };
  const v = newTheme.styleguide;
  const u = userTheme.styleguide || {};
  // STYLEGUIDE GENERAL VARIABLE
  // space
  v['$rsg-space-factor'] = u['$rsg-space-factor'] || '8';
  v['$rsg-space-factor-unit'] = u['$rsg-space-factor-unit'] || 'px';
  v['$rsg-space'] = u['$rsg-space'] || {
    xxs: `${v['$rsg-space-factor'] / 2}${v['$rsg-space-factor-unit']}`, // 4px
    xs: `${v['$rsg-space-factor']}${v['$rsg-space-factor-unit']}`, // 8px
    sm: `${v['$rsg-space-factor'] * 2}${v['$rsg-space-factor-unit']}`, // 16px
    md: `${v['$rsg-space-factor'] * 3}${v['$rsg-space-factor-unit']}`, // 24px
    lg: `${v['$rsg-space-factor'] * 4}${v['$rsg-space-factor-unit']}`, // 32px
    xl: `${v['$rsg-space-factor'] * 5}${v['$rsg-space-factor-unit']}`, // 40px
    xxl: `${v['$rsg-space-factor'] * 6}${v['$rsg-space-factor-unit']}`, // 48px
  };
  // font
  // - font-family
  v['$rsg-font-family-base'] = u['$rsg-font-family-base'] || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  v['$rsg-font-family-monospace'] = u['$rsg-font-family-monospace'] || 'Consolas, "Liberation Mono", Menlo, monospace';
  v['$rsg-font-family-highlight'] = u['$rsg-font-family-highlight'] || 'SF Mono, Monaco, "Inconsolata", "Fira Code", "Fira Mono", "Droid Sans Mono", Consolas, "Roboto Mono", "Source Code Pro", monospace';
  // - font-size
  v['$rsg-font-size'] = u['$rsg-font-size'] || {
    sm: '13px',
    md: '15px',
    lg: '16px',
    xl: '25px',
  };
  // color
  v['$rsg-white'] = u['$rsg-white'] || '#fff';
  v['$rsg-gray-lighter'] = u['$rsg-gray-lighter'] || '#F7F7F9';
  v['$rsg-gray-light'] = u['$rsg-gray-light'] || '#CCCCCC';
  v['$rsg-gray'] = u['$rsg-gray'] || '#767676';
  v['$rsg-gray-dark'] = u['$rsg-gray-dark'] || '#292b2c';
  v['$rsg-fuchsia'] = u['$rsg-fuchsia'] || '#B31255';
  v['$rsg-ocher'] = u['$rsg-ocher'] || '#fc971b';
  v['$rsg-salmon'] = u['$rsg-salmon'] || '#f47469';
  v['$rsg-purple'] = u['$rsg-purple'] || '#75096a';
  // main color styleguide
  v['$rsg-color-primary'] = u['$rsg-color-primary'] || v['$rsg-fuchsia'];
  v['$rsg-color-secondary'] = u['$rsg-color-secondary'] || v['$rsg-purple'];
  v['$rsg-color-gradient'] = u['$rsg-color-gradient'] || 'linear-gradient(#3A007D, #B31255)';
  v['$rsg-color-base'] = u['$rsg-color-base'] || v['$rsg-gray-dark'];
  v['$rsg-color-light'] = u['$rsg-color-light'] || v['$rsg-gray'];
  v['$rsg-color-lightest'] = u['$rsg-color-lightest'] || v['$rsg-gray-light'];
  v['$rsg-color-link'] = u['$rsg-color-link'] || v['$rsg-color-secondary'];
  v['$rsg-color-linkHover'] = u['$rsg-color-linkHover'] || v['$rsg-color-primary'];
  v['$rsg-color-border'] = u['$rsg-color-border'] || v['$rsg-gray-light'];
  v['$rsg-color-name'] = u['$rsg-color-name'] || v['$rsg-color-primary'];
  v['$rsg-color-type'] = u['$rsg-color-type'] || v['$rsg-color-secondary'];
  v['$rsg-color-error'] = u['$rsg-color-error'] || v['$rsg-salmon'];
  v['$rsg-color-base-background'] = u['$rsg-color-base-background'] || v['$rsg-white'];
  v['$rsg-color-code-background'] = u['$rsg-color-code-background'] || v['$rsg-gray-lighter'];
  v['$rsg-color-sidebar-background'] = u['$rsg-color-sidebar-background'] || v['$rsg-color-gradient'];
  v['$rsg-color-ribbon-background'] = u['$rsg-color-ribbon-background'] || v['$rsg-color-gradient'];
  v['$rsg-color-ribbon-text'] = u['$rsg-color-ribbon-text'] || v['$rsg-white'];
  // border radius
  v['$rsg-border-radius'] = u['$rsg-border-radius'] || '3px';
  // width
  // - max width
  v['$rsg-max-width'] = u['$rsg-max-width'] || '1000px';
  // - sidebar
  v['$rsg-sidebar-width'] = u['$rsg-sidebar-width'] || '250px';
  // cursor
  v['$rsg-cursor'] = u['$rsg-cursor'] || 'pointer';

  // STYLEGUIDE COMPONENTS
  // styleguide
  v['$rsg-styleguide-background-color'] = u['$rsg-styleguide-background-color'] || v['$rsg-color-base-background'];
  v['$rsg-styleguide-has-sidebar-padding-left'] = u['$rsg-styleguide-has-sidebar-padding-left'] || {
    xs: '0',
    md: v['$rsg-sidebar-width'],
  };
  v['$rsg-styleguide-content-max-width'] = u['$rsg-styleguide-content-max-width'] || v['$rsg-max-width'];
  v['$rsg-styleguide-content-padding'] = u['$rsg-styleguide-content-padding'] || {
    xs: v['$rsg-space'].md,
    md: `${v['$rsg-space'].xl} 105px ${v['$rsg-space'].md} ${v['$rsg-space'].xl}`,
  };
  v['$rsg-styleguide-content-margin'] = u['$rsg-styleguide-content-margin'] || '0 auto';
  v['$rsg-styleguide-content-display'] = u['$rsg-styleguide-content-display'] || 'block';
  // heading
  v['$rsg-heading-margin'] = u['$rsg-heading-margin'] || '0 0 0 0';
  v['$rsg-heading-color'] = u['$rsg-heading-color'] || v['$rsg-color-base'];
  // toolbar
  v['$rsg-toolbar-button-padding'] = u['$rsg-toolbar-button-padding'] || '2px';
  v['$rsg-toolbar-button-color'] = u['$rsg-toolbar-button-color'] || v['$rsg-color-base'];
  v['$rsg-toolbar-button-background'] = u['$rsg-toolbar-button-background'] || 'transparent';
  v['$rsg-toolbar-button-transition'] = u['$rsg-toolbar-button-transition'] || 'color 750ms ease-out';
  v['$rsg-toolbar-button-cursor'] = u['$rsg-toolbar-button-cursor'] || 'pointer';
  v['$rsg-toolbar-button-hover-focus-isolation'] = u['$rsg-toolbar-button-hover-focus-isolation'] || 'false';
  v['$rsg-toolbar-button-hover-focus-color'] = u['$rsg-toolbar-button-hover-focus-color'] || v['$rsg-color-primary'];
  v['$rsg-toolbar-button-hover-focus-transition'] = u['$rsg-toolbar-button-hover-focus-transition'] || 'color 150ms ease-in';
  v['$rsg-toolbar-button-focus-isolation'] = u['$rsg-toolbar-button-focus-isolation'] || 'false';
  v['$rsg-toolbar-button-focus-outline'] = u['$rsg-toolbar-button-focus-outline'] || `1 dotted ${v['$rsg-color-primary']}`;
  v['$rsg-toolbar-button-children-isolation'] = u['$rsg-toolbar-button-children-isolation'] || 'false';
  v['$rsg-toolbar-button-children-margin-left'] = u['$rsg-toolbar-button-children-margin-left'] || v['$rsg-space'].xs;
  v['$rsg-toolbar-button-svg-width'] = u['$rsg-toolbar-button-svg-width'] || v['$rsg-space'].md;
  v['$rsg-toolbar-button-svg-height'] = u['$rsg-toolbar-button-svg-height'] || v['$rsg-space'].md;
  v['$rsg-toolbar-button-svg-color'] = u['$rsg-toolbar-button-svg-color'] || v['$rsg-gray'];
  v['$rsg-toolbar-button-svg-cursor'] = u['$rsg-toolbar-button-svg-cursor'] || 'inherit';
  v['$rsg-toolbar-button-small-width'] = u['$rsg-toolbar-button-small-width'] || '14px';
  v['$rsg-toolbar-button-small-height'] = u['$rsg-toolbar-button-small-height'] || '14px';
  // path-line
  v['$rsg-path-line-font-family'] = u['$rsg-path-line-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-path-line-color'] = u['$rsg-path-line-color'] || v['$rsg-gray-light'];
  v['$rsg-path-line-font-size'] = u['$rsg-path-line-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-path-line-margin'] = u['$rsg-path-line-margin'] || `0 0 0 ${v['$rsg-space'].xxs}`;
  v['$rsg-path-line-cursor'] = u['$rsg-path-line-cursor'] || v['$rsg-cursor'];
  v['$rsg-path-line-icon-color'] = u['$rsg-path-line-icon-color'] || v['$rsg-path-line-color'];
  v['$rsg-path-line-icon-font-size'] = u['$rsg-path-line-icon-font-size'] || v['$rsg-path-line-font-size'];
  v['$rsg-path-line-icon-cursor'] = u['$rsg-path-line-icon-cursor'] || v['$rsg-cursor'];
  v['$rsg-path-line-icon-position'] = u['$rsg-path-line-icon-position'] || 'relative';
  v['$rsg-path-line-icon-bottom'] = u['$rsg-path-line-icon-bottom'] || '3px';
  v['$rsg-path-line-icon-hover-color'] = u['$rsg-path-line-icon-hover-color'] || v['$rsg-color-primary'];
  // tab-button
  v['$rsg-tab-button-padding'] = u['$rsg-tab-button-padding'] || `${v['$rsg-space'].xs} 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-tab-button-font-family'] = u['$rsg-tab-button-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-tab-button-font-size'] = u['$rsg-tab-button-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-tab-button-color'] = u['$rsg-tab-button-color'] || v['$rsg-gray'];
  v['$rsg-tab-button-background'] = u['$rsg-tab-button-background'] || 'transparent';
  v['$rsg-tab-button-text-transform'] = u['$rsg-tab-button-text-transform'] || 'uppercase';
  v['$rsg-tab-button-transition'] = u['$rsg-tab-button-transition'] || 'color 750ms ease-out';
  v['$rsg-tab-button-border'] = u['$rsg-tab-button-border'] || 'none';
  v['$rsg-tab-button-cursor'] = u['$rsg-tab-button-cursor'] || 'pointer';
  v['$rsg-tab-button-box-shadow'] = u['$rsg-tab-button-box-shadow'] || 'none';
  v['$rsg-tab-button-hover-focus-isolate'] = u['$rsg-tab-button-hover-focus-isolate'] || 'false';
  v['$rsg-tab-button-hover-focus-outline'] = u['$rsg-tab-button-hover-focus-outline'] || '0';
  v['$rsg-tab-button-hover-focus-color'] = u['$rsg-tab-button-hover-focus-color'] || v['$rsg-color-primary'];
  v['$rsg-tab-button-hover-focus-transition'] = u['$rsg-tab-button-hover-focus-transition'] || 'color 150ms ease-in';
  v['$rsg-tab-button-focus-not-active-isolate'] = u['$rsg-tab-button-focus-not-active-isolate'] || 'false';
  v['$rsg-tab-button-focus-not-active-outline'] = u['$rsg-tab-button-focus-not-active-outline'] || '0';
  v['$rsg-tab-button-children-isolate'] = u['$rsg-tab-button-children-isolate'] || 'false';
  v['$rsg-tab-button-children-margin-left'] = u['$rsg-tab-button-children-margin-left'] || v['$rsg-space'].xs;
  v['$rsg-tab-button-border-bottom'] = u['$rsg-tab-button-border-bottom'] || '2 #f28a25 solid';
  // Props table
  v['$rsg-name-font-size'] = u['$rsg-name-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-name-color'] = u['$rsg-name-color'] || v['$rsg-color-name'];
  v['$rsg-name-deprecated-color'] = u['$rsg-name-deprecated-color'] || v['$rsg-salmon'];
  v['$rsg-name-deprecated-decoration'] = u['$rsg-name-deprecated-decoration'] || 'line-through';
  v['$rsg-text-font-size'] = u['$rsg-name-font-size'] || {
    inherit: 'inherit',
    sm: '0.8em',
    base: '1em',
    text: '1.2em',
  };
  v['$rsg-text-color'] = u['$rsg-text-color'] || v['$rsg-color-base'];
  v['$rsg-text-color-light'] = u['$rsg-text-color-light'] || v['$rsg-gray'];
  v['$rsg-text-border-top'] = u['$rsg-text-border-top'] || '0';
  v['$rsg-text-border-bottom'] = u['$rsg-text-border-bottom'] || `1px dotted ${v['$rsg-gray-light']}`;
  v['$rsg-text-font-family'] = u['$rsg-text-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-type-font-size'] = u['$rsg-type-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-type-color'] = u['$rsg-type-color'] || v['$rsg-color-type'];
  v['$rsg-para-margin'] = u['$rsg-para-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-para-color'] = u['$rsg-para-color'] || v['$rsg-color-base'];
  v['$rsg-para-font-family'] = u['$rsg-para-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-para-font-size'] = u['$rsg-para-font-size'] || 'inherit';
  v['$rsg-para-line-height'] = u['$rsg-para-line-height'] || '1.5';
  v['$rsg-props-description-font-size'] = u['$rsg-props-description-font-size'] || v['$rsg-font-size'].sm;
  // argument
  v['$rsg-argument-margin'] = u['$rsg-argument-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  // arguments
  v['$rsg-arguments-margin'] = u['$rsg-arguments-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-arguments-font-size'] = u['$rsg-arguments-font-size'] || 'inherit';
  v['$rsg-arguments-heading-margin'] = u['$rsg-arguments-heading-margin'] || `0 0 ${v['$rsg-space'].xxs} 0`;
  // editor
  v['$rsg-editor-code-mirror-isolation'] = u['$rsg-editor-code-mirror-isolation'] || 'false';
  v['$rsg-editor-code-mirror-font-family'] = u['$rsg-editor-code-mirror-font-family'] || v['$rsg-font-family-monospace'];
  v['$rsg-editor-code-mirror-height'] = u['$rsg-editor-code-mirror-height'] || 'auto';
  v['$rsg-editor-code-mirror-padding'] = u['$rsg-editor-code-mirror-padding'] || `${v['$rsg-space'].xxs} ${v['$rsg-space'].xs}`;
  v['$rsg-editor-code-mirror-font-size'] = u['$rsg-editor-code-mirror-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-editor-code-mirror-pre-isolation'] = u['$rsg-editor-code-mirror-pre-isolation'] || 'false';
  v['$rsg-editor-code-mirror-pre-padding'] = u['$rsg-editor-code-mirror-pre-padding'] || '0';
  v['$rsg-editor-code-mirror-scroll-isolation'] = u['$rsg-editor-code-mirror-scroll-isolation'] || 'false';
  v['$rsg-editor-code-mirror-scroll-height'] = u['$rsg-editor-code-mirror-scroll-height'] || 'auto';
  v['$rsg-editor-code-mirror-scroll-overflow-y'] = u['$rsg-editor-code-mirror-scroll-overflow-y'] || 'hidden';
  v['$rsg-editor-code-mirror-scroll-overflow-x'] = u['$rsg-editor-code-mirror-scroll-overflow-x'] || 'auto';
  v['$rsg-editor-code-mirror-cm-error-isolation'] = u['$rsg-editor-code-mirror-cm-error-isolation'] || 'false';
  v['$rsg-editor-code-mirror-cm-error-background'] = u['$rsg-editor-code-mirror-cm-error-background'] || 'none';
  // editor-loader
  v['$rsg-editor-loader-padding'] = u['$rsg-editor-loader-padding'] || `2px ${v['$rsg-space'].xs} 2px 2px`;
  v['$rsg-editor-loader-font-family'] = u['$rsg-editor-loader-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-editor-loader-font-size'] = u['$rsg-editor-loader-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-editor-loader-color'] = u['$rsg-editor-loader-color'] || v['$rsg-gray'];
  v['$rsg-editor-loader-background-color'] = u['$rsg-editor-loader-background-color'] || v['$rsg-color-code-background'];
  // error
  v['$rsg-error-margin'] = u['$rsg-error-margin'] || v['$rsg-space'].xs;
  v['$rsg-error-line-height'] = u['$rsg-error-line-height'] || '1.2';
  v['$rsg-error-font-size'] = u['$rsg-error-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-error-stack-color'] = u['$rsg-error-stack-color'] || v['$rsg-color-error'];
  v['$rsg-error-stack-white-space'] = u['$rsg-error-stack-white-space'] || 'pre';
  v['$rsg-error-stack-font-family'] = u['$rsg-error-stack-font-family'] || v['$rsg-font-family-monospace'];
  v['$rsg-error-message-color'] = u['$rsg-error-message-color'] || v['$rsg-color-error'];
  v['$rsg-error-message-font-family'] = u['$rsg-error-message-font-family'] || v['$rsg-font-family-base'];
  // example placeholder
  v['$rsg-example-placeholder-outline'] = u['$rsg-example-placeholder-outline'] || 'none';
  v['$rsg-example-placeholder-padding'] = u['$rsg-example-placeholder-padding'] || '0';
  v['$rsg-example-placeholder-font-size'] = u['$rsg-example-placeholder-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-example-placeholder-font-family'] = u['$rsg-example-placeholder-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-example-placeholder-decoration'] = u['$rsg-example-placeholder-decoration'] || 'underline';
  v['$rsg-example-placeholder-color'] = u['$rsg-example-placeholder-color'] || v['$rsg-gray'];
  v['$rsg-example-placeholder-border'] = u['$rsg-example-placeholder-border'] || 'none';
  v['$rsg-example-placeholder-cursor'] = u['$rsg-example-placeholder-cursor'] || v['$rsg-cursor'];
  v['$rsg-example-placeholder-background'] = u['$rsg-example-placeholder-background'] || 'transparent';
  v['$rsg-example-placeholder-hover-isolate'] = u['$rsg-example-placeholder-hover-isolate'] || 'false';
  v['$rsg-example-placeholder-hover-color'] = u['$rsg-example-placeholder-hover-color'] || v['$rsg-gray-light'];
  // footer
  v['$rsg-footer-margin'] = u['$rsg-footer-margin'] || `${v['$rsg-space'].md} 0 60px 0`;
  v['$rsg-footer-float'] = u['$rsg-footer-float'] || 'right';
  v['$rsg-footer-img-height'] = u['$rsg-footer-img-height'] || {
    xs: '35px',
    md: '43px',
  };
  // link
  v['$rsg-link-hover-isolate'] = u['$rsg-link-hover-isolate'] || 'false';
  // logo
  v['$rsg-logo-color'] = u['$rsg-logo-color'] || v['$rsg-white'];
  v['$rsg-logo-margin'] = u['$rsg-logo-margin'] || '0';
  v['$rsg-logo-font-family'] = u['$rsg-logo-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-logo-font-size'] = u['$rsg-logo-font-size'] || v['$rsg-font-size'].xl;
  v['$rsg-logo-font-weight'] = u['$rsg-logo-font-weight'] || 'normal';
  // message
  v['$rsg-message-margin'] = u['$rsg-message-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  // playground
  v['$rsg-playground-margin'] = u['$rsg-playground-margin'] || '0';
  v['$rsg-playground-preview-padding'] = u['$rsg-playground-preview-padding'] || v['$rsg-space'].md;
  v['$rsg-playground-preview-border'] = u['$rsg-playground-preview-border'] || '1px #e8e8e8 solid';
  v['$rsg-playground-preview-border-radius'] = u['$rsg-playground-preview-border-radius'] || v['$rsg-border-radius'];
  v['$rsg-playground-preview-width'] = u['$rsg-playground-preview-width'] || '100%';
  v['$rsg-playground-preview-display'] = u['$rsg-playground-preview-display'] || 'inline-block';
  v['$rsg-playground-controls-display'] = u['$rsg-playground-controls-display'] || 'flex';
  v['$rsg-playground-controls-align-items'] = u['$rsg-playground-controls-align-items'] || 'center';
  v['$rsg-playground-toolbar-margin'] = u['$rsg-playground-toolbar-margin'] || '0 0 0 auto';
  // playground-error
  v['$rsg-playground-error-margin'] = u['$rsg-playground-error-margin'] || '0';
  v['$rsg-playground-error-line-height'] = u['$rsg-playground-error-line-height'] || '1.2';
  v['$rsg-playground-error-font-size'] = u['$rsg-playground-error-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-playground-error-font-family'] = u['$rsg-playground-error-font-family'] || v['$rsg-font-family-monospace'];
  v['$rsg-playground-error-color'] = u['$rsg-playground-error-color'] || v['$rsg-color-error'];
  v['$rsg-playground-error-white-space'] = u['$rsg-playground-error-white-space'] || 'pre';
  // react-component
  v['$rsg-react-component-margin'] = u['$rsg-react-component-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-react-component-header-margin'] = u['$rsg-react-component-header-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-react-component-docs-color'] = u['$rsg-react-component-docs-color'] || v['$rsg-color-base'];
  v['$rsg-react-component-docs-font-size'] = u['$rsg-react-component-docs-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-react-component-tabs-overflow-x'] = u['$rsg-react-component-tabs-overflow-x'] || 'auto';
  v['$rsg-react-component-tabs-overflow-y'] = u['$rsg-react-component-tabs-overflow-y'] || 'hidden';
  v['$rsg-react-component-tabs-margin'] = u['$rsg-react-component-tabs-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-react-component-tabs-button-margin'] = u['$rsg-react-component-tabs-button-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  // ribbon
  v['$rsg-ribbon-position'] = u['$rsg-ribbon-position'] || 'fixed';
  v['$rsg-ribbon-top'] = u['$rsg-ribbon-top'] || '0';
  v['$rsg-ribbon-right'] = u['$rsg-ribbon-right'] || '0';
  v['$rsg-ribbon-width'] = u['$rsg-ribbon-width'] || '149px';
  v['$rsg-ribbon-height'] = u['$rsg-ribbon-height'] || '149px';
  v['$rsg-ribbon-z-index'] = u['$rsg-ribbon-z-index'] || '999';
  v['$rsg-ribbon-link-font-family'] = u['$rsg-ribbon-link-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-ribbon-link-position'] = u['$rsg-ribbon-link-position'] || 'relative';
  v['$rsg-ribbon-link-right'] = u['$rsg-ribbon-link-right'] || '-37px';
  v['$rsg-ribbon-link-top'] = u['$rsg-ribbon-link-top'] || '-22px';
  v['$rsg-ribbon-link-display'] = u['$rsg-ribbon-link-display'] || 'block';
  v['$rsg-ribbon-link-width'] = u['$rsg-ribbon-link-width'] || '190px';
  v['$rsg-ribbon-link-padding'] = u['$rsg-ribbon-link-padding'] || `${v['$rsg-space'].xxs} ${v['$rsg-space'].xs}`;
  v['$rsg-ribbon-link-text-align'] = u['$rsg-ribbon-link-text-align'] || 'center';
  v['$rsg-ribbon-link-color'] = u['$rsg-ribbon-link-color'] || v['$rsg-color-ribbon-text'];
  v['$rsg-ribbon-link-font-size'] = u['$rsg-ribbon-link-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-ribbon-link-background'] = u['$rsg-ribbon-link-background'] || v['$rsg-color-ribbon-background'];
  v['$rsg-ribbon-link-decoration'] = u['$rsg-ribbon-link-decoration'] || 'none';
  v['$rsg-ribbon-link-shadow'] = u['$rsg-ribbon-link-shadow'] || '0 -1px 0 rgba(0,0,0,.15)';
  v['$rsg-ribbon-link-transform-origin'] = u['$rsg-ribbon-link-transform-origin'] || '0 0';
  v['$rsg-ribbon-link-transform'] = u['$rsg-ribbon-link-transform'] || 'rotate(45deg)';
  v['$rsg-ribbon-link-cursor'] = u['$rsg-ribbon-link-cursor'] || v['$rsg-cursor'];
  // section
  v['$rsg-section-margin'] = u['$rsg-section-margin'] || '60px 0 0 0';
  // section-heading
  v['$rsg-section-heading-display'] = u['$rsg-section-heading-display'] || 'flex';
  v['$rsg-section-heading-flex-direction'] = u['$rsg-section-heading-flex-direction'] || 'row';
  v['$rsg-section-heading-align-items'] = u['$rsg-section-heading-align-items'] || 'center';
  v['$rsg-section-heading-margin-bottom'] = u['$rsg-section-heading-margin-bottom'] || v['$rsg-space'].xs;
  v['$rsg-section-heading-section-name-isolation'] = u['$rsg-section-heading-section-name-isolation'] || 'false';
  v['$rsg-section-heading-section-name-text-decoration'] = u['$rsg-section-heading-section-name-text-decoration'] || 'none';
  v['$rsg-section-heading-section-name-cursor'] = u['$rsg-section-heading-section-name-cursor'] || 'pointer';
  v['$rsg-section-heading-section-name-color'] = u['$rsg-section-heading-section-name-color'] || v['$rsg-color-name'];
  v['$rsg-section-heading-deprecated-text-decoration'] = u['$rsg-section-heading-deprecated-text-decoration'] || 'line-through';
  v['$rsg-section-heading-deprecated-cursor'] = u['$rsg-section-heading-deprecated-cursor'] || v['$rsg-gray'];
  v['$rsg-section-heading-toolbar-margin-left'] = u['$rsg-section-heading-toolbar-margin-left'] || 'auto';
  v['$rsg-section-heading-1-color'] = u['$rsg-section-heading-1-color'] || v['$rsg-color-base'];
  v['$rsg-section-heading-2-color'] = u['$rsg-section-heading-2-color'] || v['$rsg-gray'];
  // code
  v['$rsg-code-font-family'] = u['$rsg-code-font-family'] || v['$rsg-font-family-highlight'];
  v['$rsg-code-font-size'] = u['$rsg-code-font-size'] || 'inherit';
  v['$rsg-code-color'] = u['$rsg-code-color'] || v['$rsg-color-primary'];
  v['$rsg-code-background'] = u['$rsg-code-background'] || 'transparent';
  v['$rsg-code-white-space'] = u['$rsg-code-white-space'] || 'inherit';
  // menu
  // - sidebar
  v['$rsg-sidebar-linear-gradient'] = u['$rsg-sidebar-linear-gradient'] || v['$rsg-color-sidebar-background'];
  v['$rsg-sidebar-box-shadow'] = u['$rsg-sidebar-box-shadow'] || `${v['$rsg-space'].xs} 0 5px -2px #e2e2e2`;
  v['$rsg-sidebar-logo-padding'] = u['$rsg-sidebar-logo-padding'] || '30px 0 10px 0';
  v['$rsg-sidebar-logo-align'] = u['$rsg-sidebar-logo-align'] || 'center';
  // - table of content
  v['$rsg-toc-display'] = u['$rsg-toc-display'] || 'block';
  v['$rsg-toc-padding'] = u['$rsg-toc-padding'] || '0';
  v['$rsg-toc-form-background'] = u['$rsg-toc-form-background'] || v['$rsg-color-primary'];
  v['$rsg-toc-form-padding'] = u['$rsg-toc-form-padding'] || '20px 0 20px 0';
  v['$rsg-toc-form-width'] = u['$rsg-toc-form-width'] || '80%';
  v['$rsg-toc-form-margin'] = u['$rsg-toc-form-margin'] || '0 auto';
  // - component-list
  v['$rsg-component-list-color'] = u['$rsg-component-list-color'] || v['$rsg-color-primary'];
  v['$rsg-component-list-font-size'] = u['$rsg-component-list-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-component-list-line-height'] = u['$rsg-component-list-line-height'] || '2.5';
  v['$rsg-component-list-heading-button-outline'] = u['$rsg-component-list-heading-button-outline'] || 'none';
  v['$rsg-component-list-heading-button-border'] = u['$rsg-component-list-heading-button-border'] || 'none';
  v['$rsg-component-list-heading-button-cursor'] = u['$rsg-component-list-heading-button-cursor'] || 'pointer';
  v['$rsg-component-list-heading-margin'] = u['$rsg-component-list-heading-margin'] || '15px 0 0 0';
  v['$rsg-component-list-heading-border-bottom'] = u['$rsg-component-list-heading-border-bottom'] || `1px solid ${v['$rsg-gray-light']}`;
  v['$rsg-component-list-heading-color'] = u['$rsg-component-list-heading-color'] || v['$rsg-color-base'];
  v['$rsg-component-list-heading-hover-color'] = u['$rsg-component-list-heading-hover-color'] || v['$rsg-color-primary'];
  v['$rsg-component-list-heading-font-size'] = u['$rsg-component-list-heading-font-size'] || v['$rsg-font-size'].lg;
  v['$rsg-component-list-heading-font-weight'] = u['$rsg-component-list-heading-font-weight'] || '500';
  v['$rsg-component-list-icon-margin'] = u['$rsg-component-list-icon-margin'] || '15px 15px 0 0';
  v['$rsg-component-list-icon-color'] = u['$rsg-component-list-icon-color'] || v['$rsg-component-list-heading-color'];
  // table
  v['$rsg-table-overflow'] = u['$rsg-table-overflow'] || 'auto';
  v['$rsg-table-width'] = u['$rsg-table-width'] || '90%';
  v['$rsg-table-border-collapse'] = u['$rsg-table-border-collapse'] || 'collapse';
  v['$rsg-table-margin'] = u['$rsg-table-margin'] || `${v['$rsg-space'].md} 0 0 0`;
  v['$rsg-table-head-border-top'] = u['$rsg-table-head-border-top'] || '0';
  v['$rsg-table-head-border-bottom'] = u['$rsg-table-head-border-bottom'] || '1px #e8e8e8 solid';
  v['$rsg-table-cell-heading-color'] = u['$rsg-table-cell-heading-color'] || v['$rsg-color-base'];
  v['$rsg-table-cell-heading-padding'] = u['$rsg-table-cell-heading-padding'] || `0 ${v['$rsg-space'].xs} ${v['$rsg-space'].xxs} 0`;
  v['$rsg-table-cell-heading-text-align'] = u['$rsg-table-cell-heading-text-align'] || 'left';
  v['$rsg-table-cell-heading-font-family'] = u['$rsg-table-cell-heading-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-table-cell-heading-font-weight'] = u['$rsg-table-cell-heading-font-weight'] || 'bold';
  v['$rsg-table-cell-heading-font-size'] = u['$rsg-table-cell-heading-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-table-cell-heading-white-space'] = u['$rsg-table-cell-heading-white-space'] || 'nowrap';
  v['$rsg-table-cell-border-top'] = u['$rsg-table-cell-border-top'] || '0';
  v['$rsg-table-cell-color'] = u['$rsg-table-cell-color'] || v['$rsg-color-base'];
  v['$rsg-table-cell-padding'] = u['$rsg-table-cell-padding'] || `${v['$rsg-space'].xxs} ${v['$rsg-space'].xs} ${v['$rsg-space'].xxs} 0`;
  v['$rsg-table-cell-vertical-align'] = u['$rsg-table-cell-vertical-align'] || 'top';
  v['$rsg-table-cell-font-family'] = u['$rsg-table-cell-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-table-cell-font-size'] = u['$rsg-table-cell-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-table-cell-child-isolation'] = u['$rsg-table-cell-child-isolation'] || 'false';
  v['$rsg-table-cell-child-width'] = u['$rsg-table-cell-child-width'] || '99%';
  v['$rsg-table-cell-child-padding'] = u['$rsg-table-cell-child-padding'] || '0 0 0 0';
  v['$rsg-table-cell-child-p-isolation'] = u['$rsg-table-cell-child-p-isolation'] || 'false';
  v['$rsg-table-cell-child-p-margin'] = u['$rsg-table-cell-child-p-margin'] || '0 0 0 0';
  // markdown
  v['$rsg-markdown-block-quote-margin'] = u['$rsg-markdown-block-quote-margin'] || `${v['$rsg-space'].md} ${v['$rsg-space'].md}`;
  v['$rsg-markdown-block-quote-padding'] = u['$rsg-markdown-block-quote-padding'] || '0';
  v['$rsg-markdown-block-quote-color'] = u['$rsg-markdown-block-quote-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-block-quote-font-family'] = u['$rsg-markdown-block-quote-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-block-quote-font-size'] = u['$rsg-markdown-block-quote-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-markdown-block-line-height'] = u['$rsg-markdown-block-line-height'] || '1.5';
  v['$rsg-markdown-block-quote-border'] = u['$rsg-markdown-block-quote-border'] || 'none';
  v['$rsg-markdown-pre-font-family'] = u['$rsg-markdown-pre-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-pre-font-size'] = u['$rsg-markdown-pre-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-markdown-pre-line-height'] = u['$rsg-markdown-pre-line-height'] || '1.5';
  v['$rsg-markdown-pre-color'] = u['$rsg-markdown-pre-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-pre-white-space'] = u['$rsg-markdown-pre-white-space'] || 'pre';
  v['$rsg-markdown-pre-background-color'] = u['$rsg-markdown-pre-background-color'] || v['$rsg-color-code-background'];
  v['$rsg-markdown-pre-padding'] = u['$rsg-markdown-pre-padding'] || `${v['$rsg-space'].xs} ${v['$rsg-space'].md}`;
  v['$rsg-markdown-pre-border'] = u['$rsg-markdown-pre-border'] || '1px #e8e8e8 solid';
  v['$rsg-markdown-pre-border-radius'] = u['$rsg-markdown-pre-border-radius'] || v['$rsg-border-radius'];
  v['$rsg-markdown-pre-margin'] = u['$rsg-markdown-pre-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-markdown-list-margin'] = u['$rsg-markdown-list-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-markdown-list-padding'] = u['$rsg-markdown-list-padding'] || `0 0 0 ${v['$rsg-space'].md}`;
  v['$rsg-markdown-list-font-size'] = u['$rsg-markdown-list-font-size'] || 'inherit';
  v['$rsg-markdown-list-ordered-style-type'] = u['$rsg-markdown-list-ordered-style-type'] || 'decimal';
  v['$rsg-markdown-list-li-color'] = u['$rsg-markdown-list-li-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-list-li-font-family'] = u['$rsg-markdown-list-li-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-list-li-font-size'] = u['$rsg-markdown-list-li-font-size'] || 'inherit';
  v['$rsg-markdown-list-li-line-height'] = u['$rsg-markdown-list-li-line-height'] || '1.5';
  v['$rsg-markdown-list-li-style-type'] = u['$rsg-markdown-list-li-style-type'] || 'inherit';
  v['$rsg-markdown-table-margin'] = u['$rsg-markdown-table-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-markdown-table-border-collapse'] = u['$rsg-markdown-table-border-collapse'] || 'collapse';
  v['$rsg-markdown-table-cell-padding'] = u['$rsg-markdown-table-cell-padding'] || `${v['$rsg-space'].xxs} ${v['$rsg-space'].md} ${v['$rsg-space'].xxs} 0`;
  v['$rsg-markdown-table-cell-font-family'] = u['$rsg-markdown-table-cell-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-table-cell-font-size'] = u['$rsg-markdown-table-cell-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-markdown-table-cell-color'] = u['$rsg-markdown-table-cell-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-table-cell-line-height'] = u['$rsg-markdown-table-cell-line-height'] || '1.5';
  v['$rsg-markdown-table-cell-head-font-weight'] = u['$rsg-markdown-table-cell-head-font-weight'] || 'bold';
  v['$rsg-markdown-table-head-border-bottom'] = u['$rsg-markdown-table-head-border-bottom'] || `1 ${v['$rsg-gray-light']} solid`;
  // welcome
  v['$rsg-welcome-max-width'] = u['$rsg-welcome-max-width'] || '1000';
  v['$rsg-welcome-margin'] = u['$rsg-welcome-margin'] || '0 auto';
  v['$rsg-welcome-padding'] = u['$rsg-welcome-padding'] || v['$rsg-space'].md;
  newTheme.styleguide = v;
  return { ...userTheme, ...newTheme };
}
/* eslint-enable dot-notation */
export default makeTheme();