import React from 'react';
import { IntlProvider } from 'react-intl';

const withIntl = (locale, messages) => (Component) => (props) => (
  <IntlProvider locale={locale} messages={messages}>
    <Component {...props} />
  </IntlProvider>
);

export default withIntl;
