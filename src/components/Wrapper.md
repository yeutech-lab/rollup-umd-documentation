```js
<Wrapper>
  This text example is displayed within the default Wrapper components used for all UI components examples.
</Wrapper>
```

## Use your own

You can use your own `<Wrapper />` within every projects that use $PACKAGE_NAME.

If you create one in your project under `styleguide/components/Wrapper.js`, it will be automatically picked instead of ours by our configuration.

For examples, you can override the Wrapper to plug a redux store or/and your internationalization for each test:

```js static
import React from 'react';
import { combineReducers } from 'redux';
import Wrapper from '$PACKAGE_NAME/lib/components/Wrapper';

const messages = {
  en: {
    'dev-tools.rollup-umd.test': 'This is a dummy test string.'
  },
};

export default (props) => <Wrapper
  reducer={combineReducers({
    locale: (state, actions) => 'en',
  })}
  messages={messages['en']}
  {...props}
/>
```

> This will wrap every JS example with the Provider and a new store,If you want to have a single store, you should use the Provider inside the LayoutRenderer.  
