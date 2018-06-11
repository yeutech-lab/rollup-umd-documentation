### 1. Install `$PACKAGE_NAME` and it dependencies:
       
```bash static
$ npm install $PACKAGE_NAME --save-dev --registry=$NPM_REGISTRY font-awesome@^4.7.0 url-loader@^0.5.8 file-loader@^1.1.11 webpack@^4.6.0 react@^16.3.2 react-dom@^16.4.0 react-styleguidist@^7.0.12
```

### 2. Create `styleguide.config.js` in root of your project.

```js static
const { config } = require('@yeutech/rollup-documentation/lib/styleguide.config.js');

module.exports = config;

```

### 3. Create documentations in `docs/` and add `.md` files

Documentation folder example:
```bash static
root/
  └── docs/
      ├── installation.md
      └── general.md
```

> In order to provide enough information regarding to your modular and shareable module. Any **rollup-umd** project should have following documentations:
>
> `introduction.md` / `installation.md` / `upgrading.md` / `configuration.md` / `general.md` / `faq.md` / `contribute.md` / `commands.md` / `branch.md` and `release.md`.


### 4. Create `styleguide/styleguide.ext.json` in root of your project.

Example:

```json static
{
  "sections": [
    {
      "name": "Installation",
      "content": "docs/installation.md"
    },
    {
      "name": "General",
      "content": "docs/general.md",
      "components": "src/**/*.js"
    }
  ]
}

```

### 5. Add `styleguide` scripts into `package.json`:

```json static
{
  "scripts": {
    "styleguide": "styleguidist server",
    "prestyleguide:build": "npm run build:lib",
    "styleguide:build": "styleguidist build"
  }
}
```

### 6. Run your documentation on `localhost:6060`:

```bash static
npm run styleguide
```

> You can change port using: `NODE_PORT=7070 npm run styleguide`
