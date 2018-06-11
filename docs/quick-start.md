### 1. Create `styleguide.config.js` in root of your project.

Add `webPackConfig` as:

```js static
const { config } = require('@yeutech/rollup-documentation/lib/styleguide.config.js');

module.exports = {
  ...config,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.(ttf|otf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          include: /node_modules/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              publicPath: 'fonts',
            },
          }],
        },
      ],
    },
  },
};

```

### 2. Create documentations in `docs/` and add `.md` files

Documentation folder example:
```bash static
root/
  └── docs/
      ├── introduction.md
      ├── installation.md
      ├── configuration.md
      └── general.md
```

> In order to provide enough information regarding to your modular and shareable module. Any **rollup-umd** project should have following documentations:
>
> `introduction.md` / `installation.md` / `upgrading.md` / `configuration.md` / `general.md` / `faq.md` / `contribute.md` / `commands.md` / `branch.md` and `release.md`.


### 3. Create `styleguide/styleguide.ext.json` in root of your project.

Example:

```json static
{
  "sections": [
    {
      "name": "Introduction",
      "content": "docs/introduction.md"
    },
    {
      "name": "Installation",
      "content": "docs/installation.md"
    },
    {
      "name": "Configuration",
      "content": "docs/configuration.md"
    },
    {
      "name": "General",
      "content": "docs/general.md",
      "components": "src/**/*.js"
    }
  ]
}

```

### 4. Add `styleguide` scripts into `package.json`:

```json static
{
  "scripts": {
    "styleguide": "styleguidist server",
    "prestyleguide:build": "npm run build:lib",
    "styleguide:build": "styleguidist build"
  }
}
```

### 5. Run your documentation on `localhost:6060`:

```bash static
npm run styleguide
```

> You can change port using: `NODE_PORT=7070 npm run styleguide`
