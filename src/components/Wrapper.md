```js
<Wrapper>
  This text example is displayed within the default Wrapper components used for all UI components examples.
</Wrapper>
```

## Use your own

You can use your own `<Wrapper />` within every projects that use rollup-documentation.

If you create one in your project under `styleguide/components/Wrapper.js`, it will be automatically picked instead of ours by our configuration.

For examples, you can override the Wrapper to include a new redux store for each test:

```js static
import React from 'react';
import Provider from 'react-redux/lib/components/Provider';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Import your reducer
import reducer from './reducer';

const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(reducer, enhancer);

const Wrapper = (props) => <Provider store={store}>{props.children}</Provider>;

export default Wrapper;
```

> This will wrap every JS example with the Provider and a new store,If you want to have a single store, you should use the Provider inside the LayoutRenderer.  
