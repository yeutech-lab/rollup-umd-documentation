import React from 'react';
const reactIntl = require('../../optionalDependencies/react-intl');

let HoC = () => () => (props) => props.children;

if (reactIntl) {
  const { IntlProvider } = reactIntl;
  HoC = (locale, messages) => (Component) => (props) => (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props} />
    </IntlProvider>
  );
}

module.exports = HoC;
