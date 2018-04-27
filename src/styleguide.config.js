/* eslint-disable global-require */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { generateCSSReferences, generateJSReferences } from 'mini-html-webpack-plugin';
import merge from 'webpack-merge';

console.log(generateCSSReferences, generateJSReferences);
/** we decide either to use the package.json from react or the one from the current working dir
 * this will make the configured both, within project and when imported
 */
export const pkgBase = fs.existsSync(path.join(process.cwd(), 'package.json')) ?
  path.join(process.cwd()) :
  path.join(__dirname, '..');

export const pkg = require(path.join(pkgBase, 'package.json'));

export const styleguideBase = fs.existsSync(path.join(process.cwd(), 'styleguide')) ?
  path.join(process.cwd(), 'styleguide') :
  path.join(__dirname);

export const srcBase = fs.existsSync(path.join(process.cwd(), 'src')) ?
  path.join(process.cwd(), 'src') :
  path.join(__dirname, '../src');

export const layoutRendererBase = fs.existsSync(path.join(process.cwd(), 'components/LayoutRenderer.js')) ?
  path.join(process.cwd(), 'components/LayoutRenderer.js') :
  path.join(__dirname, '../src/components/LayoutRenderer.js');

export const wrapperBase = fs.existsSync(path.join(process.cwd(), 'components/Wrapper.js')) ?
  path.join(process.cwd(), 'components/Wrapper.js') :
  path.join(__dirname, '../src/components/Wrapper.js');

/* eslint-disable no-nested-ternary */
export const jsonExtension = fs.existsSync(path.join(process.cwd(), 'styleguide/styleguide.ext.json')) ?
  require(path.join(process.cwd(), 'styleguide/styleguide.ext.json')) :
  fs.existsSync(path.join(__dirname, '../styleguide/styleguide.ext.json')) ?
    require(path.join(__dirname, '../styleguide/styleguide.ext.json')) : {};

export const config = {
  styleguideDir: 'public',
  components: 'src/components/**/*.js',
  previewDelay: 500,
  skipComponentsWithoutExample: false,
  showCode: false,
  showUsage: true,
  showSidebar: true,
  styles: {},
  template: ({
    css,
    js,
    title,
    publicPath,
  }) => `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      ${generateCSSReferences(css, publicPath)}
    </head>
    <body>
    <div id="rsg-root"></div>
    ${generateJSReferences(js, publicPath)}
    </body>
  </html>`,
  theme: {},
  title: pkg.description || pkg.name,
  verbose: false,
  webpackConfig: {
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        exclude: [
          'node_modules/**/*.js',
        ],
      }),
    ],
    resolve: {
      alias: {
        [pkg.name]: path.resolve(pkgBase),
      },
    },
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            path.resolve(srcBase),
            path.resolve(styleguideBase),
            path.resolve(path.join(__dirname, '../src')), // this may be duplicate with styleguideBase, but this prevent failure if we latter add more file in here
            path.resolve(__dirname), // this may be duplicate with styleguideBase, but this prevent failure if we latter add more file in here
          ],
          loader: 'babel-loader',
        },
      ],
    },
  },
  styleguideComponents: {
    StyleGuideRenderer: layoutRendererBase,
    Wrapper: wrapperBase,
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = name === 'index' ? path.dirname(componentPath) : `${path.dirname(componentPath)}/${name}`;
    return `import ${name} from '${dir.replace(/^src\//, 'lib/')}';`;
  },
  ...jsonExtension,
};


/**
 * export webpack merge util
 * @type {merge}
 */
export const webpackMerge = (...args) => merge(config.webpackConfig, ...args);

export default config;
