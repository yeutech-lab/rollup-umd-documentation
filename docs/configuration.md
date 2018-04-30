This package does only provide the default configuration, we use it within all our rollup-umd for it's documentation.

Your [react-styleguide](https://react-styleguidist.js.org/) configuration is fully prepared for you in this package.

All you need to care is:
 
- `styleguide.config.js` at the root of any rollup-umd project:

This is how you generally use it: 

```js static
const { config } = require('rollup-documentation/lib/styleguide.config');
module.exports = config;
```

- `styleguide/styleguide.ext.json` at the root of any rollup-umd projects

It is used by scripts as a fresh format for edit/save.

## styleguide.ext.json ?

**Because some of the configuration is directly handled by [rollup-umd-scripts](http://dev-tools.yeutech.com/rollup-umd-scripts), we needed a json format that could be manipulated by it**

The extension file is located in `styleguide/styleguide.ext.json`.

It should contains :

- [sections](https://react-styleguidist.js.org/docs/configuration.html#sections): The documentation menu.
- [ignore](https://react-styleguidist.js.org/docs/configuration.html#ignore): File to be ignored by components scanning.

You should edit those within the extension file from your rollup. You can still override the default by using `styleguide.config.js`, but you won't be able to configure those from [rollup-umd-scripts](http://dev-tools.yeutech.com/rollup-umd-scripts) after. 

## Overriding default

It is also possible to override any options within this configuration.

For example, if you want to override the default you can do as follow:

```js static
const { config } = require('$PACKAGE_NAME/lib/styleguide.config');
module.exports = {
  ...config,
  // start overriding our default configuration here
  skipComponentsWithoutExample: false,
  showCode: false,
};
```

If you want to modify the webpack configuration within the styleguide:

```js static
const { webpackMerge, config } = require('$PACKAGE_NAME/lib/styleguide.config');

const myWebpackConfig = {}; // do your things...

module.exports = {
  ...config,
  // start overriding our default configuration here
  skipComponentsWithoutExample: false,
  showCode: false,
  // modify our default webpack configuration here
  webpackConfig: webpackMerge(myWebpackConfig),
}
```

If you want to completely override the webpackConfiguration :

```js static
const { config } = require('$PACKAGE_NAME/lib/styleguide.config');
const myWebpackConfig = {}; // do your things...

module.exports = {
  ...config,
  // start overriding our default configuration here
  skipComponentsWithoutExample: false,
  showCode: false,
  // override completely our webpack configuration here
  webpackConfig: myWebpackConfig,
}
``` 

