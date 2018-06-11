Install `$PACKAGE_NAME` into your `dev` dependencies:

```bash static
$ npm install $PACKAGE_NAME --save-dev --registry=$NPM_REGISTRY
```

In order to use **$PACKAGE_NAME**, you will need to install the following dependencies:

* [react](https://www.npmjs.com/package/react) >= 16.3.2
* [react-dom](https://www.npmjs.com/package/react-dom) >= 16.4.0
* [react-styleguidist](https://www.npmjs.com/package/react-styleguidist) >= 7.0.12
* [webpack](https://www.npmjs.com/package/webpack) >= 4.6.0
* [font-awesome](https://www.npmjs.com/package/font-awesome) >= 4.7.0
* [url-loader](https://www.npmjs.com/package/url-loader) >= 0.5.8
* [file-loader](https://www.npmjs.com/package/file-loader) >= 1.1.11

Use `npm` to automatically add these dependencies to your `package.json`:

```bash static
$ npm install --save-dev font-awesome@^4.7.0 url-loader@^0.5.8 
file-loader@^1.1.11 webpack@^4.6.0 react@^16.3.2 react-dom@^16.4.0 react-styleguidist@^7.0.12
```
