### 1. Install `$PACKAGE_NAME` and it dependencies:
       
```bash static
$ npm install $PACKAGE_NAME --save-dev --registry=$NPM_REGISTRY
```

### 2. Create `styleguide.config.js` in root of your project.

```js static
const { config } = require('$PACKAGE_NAME/lib/styleguide.config.js');

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

### 4. Create `styleguide.ext.json` in `styleguide/` folder.

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
    "styleguide:build": "styleguidist build"
  }
}
```

### 6. Run your documentation on `localhost:6060`:

```bash static
npm run styleguide
```

> You can change port using: `NODE_PORT=7070 npm run styleguide`
