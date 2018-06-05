import React from 'react';
import { combineReducers } from 'redux';
import Wrapper from '../../src/components/Wrapper';

const messages = {
  en: {
    'dev-tools.rollup-umd.test': 'This is a dummy test string.',
  },
};

export default (props) => (
  <Wrapper
    reducer={combineReducers({
      locale: () => 'en',
    })}
    messages={messages.en}
    {...props}
  />
);
