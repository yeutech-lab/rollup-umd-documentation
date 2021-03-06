/* eslint-disable global-require */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { generateCSSReferences, generateJSReferences } from 'mini-html-webpack-plugin';
import merge from 'webpack-merge';
import parse from 'parse-author';

const cwd = process.cwd();
export const pkgBase = fs.existsSync(path.join(cwd, 'package.json')) ?
  path.join(cwd) :
  path.join(__dirname, '..');

let pkgDoc = {};
const pkgDocSupposedPath = path.join(__dirname, '../package.json');
if (fs.existsSync(pkgDocSupposedPath)) {
  pkgDoc = require(pkgDocSupposedPath);
}

export const pkg = require(path.join(pkgBase, 'package.json'));

export const licenseBase = fs.existsSync(path.join(cwd, 'LICENSE.md')) ?
  path.join(cwd, 'LICENSE.md') :
  path.join(__dirname, '../LICENSE.md');

let license = pkgBase.license; // eslint-disable-line prefer-destructuring
if (fs.existsSync(licenseBase)) {
  license = fs.readFileSync(licenseBase, { encoding: 'utf8' }).split('\n')[0]; // eslint-disable-line prefer-destructuring
} else {
  console.error('LICENSE.md is missing');
}

export const styleguideBase = fs.existsSync(path.join(cwd, 'styleguide')) ?
  path.join(cwd, 'styleguide') :
  path.join(__dirname);

export const srcBase = fs.existsSync(path.join(cwd, 'src')) ?
  path.join(cwd, 'src') :
  path.join(__dirname, '../lib');

export const layoutRendererBase = fs.existsSync(path.join(cwd, 'styleguide/components/LayoutRenderer.js')) ?
  path.join(cwd, 'styleguide/components/LayoutRenderer.js') :
  path.join(__dirname, '../lib/components/LayoutRenderer.js');

export const wrapperBase = fs.existsSync(path.join(cwd, 'styleguide/components/Wrapper.js')) ?
  path.join(cwd, 'styleguide/components/Wrapper.js') :
  path.join(__dirname, '../lib/components/Wrapper.js');

/* eslint-disable no-nested-ternary */
export const jsonExtension = fs.existsSync(path.join(cwd, 'styleguide/styleguide.ext.json')) ?
  require(path.join(cwd, 'styleguide/styleguide.ext.json')) :
  fs.existsSync(path.join(__dirname, '../styleguide/styleguide.ext.json')) ?
    require(path.join(__dirname, '../styleguide/styleguide.ext.json')) : {};


const preloaders = {
  yeutech: require('./preloaders/yeutech'),
};

/**
 * export webpack merge util
 * @type {merge}
 */
export const webpackMerge = merge;

export const yeutechFavicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC\n' +
  'HUlEQVQ4jXWRP0jVcRTFP/f+vu+9fNrDpEjBqCVoEGsocWmJ/iKZEDWEU38QEocwWsSWmmpyrIjG\n' +
  'sL9QgxThUA0O1aKDJIWYmv/ylT7z/ft9b4OK+nrvwF3uOZx7LkcogcFjJxSRFhP5VP+mb6yUTksR\n' +
  'mO0BekSkY7DpdEldUWLwyFGHWSdmtcBF4EApA3m+tzm6u/J3RSziPSKgCs7Vo/oa1QTOgeoznGvH\n' +
  'uSzOgXP8nI34mV9BymXzGp9Y2Pp017bF7ZHAdDV+FZBYPyMtQB2QDz1+ZlL96Ljciye474amdy6E\n' +
  'xsuR5N+euuo5X51YdsH/SZ0h+5YW1H8fjfgfU24s6+XFzZEHPviQ+2yNkYbhZCZ2fHi+qnY+U5ZP\n' +
  'lOV8PBqqqGCi5LKBnxyLhd++RiW5EIg3uWbIQH/ui8naiY5Y+8mMad+yBYiD/TVJf6gm6UkJs1Mx\n' +
  'XUw7TVtA2oL3eZOm66lHKQAH0Fl2VbOe6JrZUs7xbrRaJ6bLORyb1ZzfVJYrUqPFVay78PF0XpX1\n' +
  'kCtKaAyRltvllxVAu+JtGmAXBA4WGhhSuAJQb9LtV1tSsLhil4CZDZMCWPKb0s6v8QaV3jjfFW9T\n' +
  'B5IGzmxUhiYNQK+HLQCCvRW4AmQ3pEuvcEXQHNyIZkwf7ggyrWcrxlN59NS5ZO/Hov8UW74K72RD\n' +
  '5K5icwpPBAaK6aCgkgIMRcXfWvSuv/XP43wp0T84kNcr9/KNuQAAAABJRU5ErkJggg==';

const defaultOptions = {
  lang: 'en',
  preloader: 'yeutech',
  favicon: yeutechFavicon,
};

export const config = createConfig();

export default function createConfig(userConfig = {}, options = {}) {
  const {
    webpackConfig: userWebpackConfig,
    ...restUserConfig
  } = userConfig;
  const opts = { ...defaultOptions, ...options };
  return {
    serverPort: process.env.NODE_PORT ? parseInt(process.env.NODE_PORT, 10) : 6060, // eslint-disable-line radix
    styleguideDir: 'public',
    components: 'src/components/**/[A-Z]*.js',
    previewDelay: 500,
    skipComponentsWithoutExample: false,
    exampleMode: 'collapse',
    usageMode: 'expand',
    showSidebar: true,
    styles: {},
    template: ({
      css,
      js,
      title,
      publicPath,
    }) => `<!DOCTYPE html>
    <html${opts.lang && ` lang="${opts.lang}"`}>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${pkg.description}">
        ${pkg.keywords && pkg.keywords.length > 0 ? `<meta name="keywords" content="${pkg.keywords.join(',')}">` : ''}
        <meta name="author" content="${parse(pkg.author).name}">
        ${license ? `<meta name="copyright" content="${license}" />` : ''}
        ${pkg.contributor && pkg.contributor.length > 0 ? `<meta name="contributor" content="${pkg.contributor.map((c) => parse(c).name).join(',')}">` : ''}
        ${pkg.private === undefined ? '<meta name="robots" content="index,follow"/>' : ''/* undefined means the package is public */}
        ${pkg.private === false ? '<meta name="robots" content="nofollow"/>' : '<meta name="robots" content="noindex, nofollow"/>'/* false means release in private, true means never released */}
        ${pkg.name !== pkgDoc.name ? `<meta name="rollup-documentation-version" content="${pkgDoc.version}">\n<meta name="version" content="${pkg.version}">` : `<meta name="version" content="${pkg.version}">`}
        ${opts.favicon ? `<link rel="icon" type="image/x-icon" href="${opts.favicon}">` : ''}
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
        <title>${title}</title>
        ${generateCSSReferences(css, publicPath)}
      </head>
      <body>
      <div id="rsg-root">${preloaders[opts.preloader]}</div>
      ${generateJSReferences(js, publicPath)}
      </body>
    </html>`,
    theme: {},
    title: pkg.name,
    verbose: false,
    version: pkg.version,
    webpackConfig: webpackMerge({
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
          $PACKAGE_NAME: path.resolve(pkgBase),
          [pkg.name]: path.resolve(pkgBase),
          styleguide: path.resolve(styleguideBase),
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
            ],
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
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
    }, userWebpackConfig),
    styleguideComponents: {
      // components
      StyleGuideRenderer: layoutRendererBase,
      Wrapper: wrapperBase,
      // rsg-bs-components
      ArgumentRenderer: path.join(__dirname, '../lib/rsg-bs-components/Argument/ArgumentRenderer.js'),
      ArgumentsRenderer: path.join(__dirname, '../lib/rsg-bs-components/Arguments/ArgumentsRenderer.js'),
      CodeRenderer: path.join(__dirname, '../lib/rsg-bs-components/Code/CodeRenderer.js'),
      ComponentsRenderer: path.join(__dirname, '../lib/rsg-bs-components/Components/ComponentsRenderer.js'),
      ComponentsList: path.join(__dirname, '../lib/rsg-bs-components/ComponentsList/ComponentsList.js'),
      ComponentsListRenderer: path.join(__dirname, '../lib/rsg-bs-components/ComponentsList/ComponentsListRenderer.js'),
      Editor: path.join(__dirname, '../lib/rsg-bs-components/Editor/Editor.js'),
      EditorLoaderRenderer: path.join(__dirname, '../lib/rsg-bs-components/Editor/EditorLoaderRenderer.js'),
      ErrorRenderer: path.join(__dirname, '../lib/rsg-bs-components/Error/ErrorRenderer.js'),
      ExamplePlaceholderRenderer: path.join(__dirname, '../lib/rsg-bs-components/ExamplePlaceholder/ExamplePlaceholderRenderer.js'),
      ExamplesRenderer: path.join(__dirname, '../lib/rsg-bs-components/Examples/ExamplesRenderer.js'),
      HeadingRenderer: path.join(__dirname, '../lib/rsg-bs-components/Heading/HeadingRenderer.js'),
      LinkRenderer: path.join(__dirname, '../lib/rsg-bs-components/Link/LinkRenderer.js'),
      LogoRenderer: path.join(__dirname, '../lib/rsg-bs-components/Logo/LogoRenderer.js'),
      Markdown: path.join(__dirname, '../lib/rsg-bs-components/Markdown'),
      Blockquote: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Blockquote'),
      BlockquoteRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Blockquote/BlockquoteRenderer.js'),
      Checkbox: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Checkbox'),
      CheckboxRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Checkbox/CheckboxRenderer.js'),
      Hr: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Hr'),
      HrRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Hr/HrRenderer.js'),
      JsDoc: path.join(__dirname, '../lib/rsg-bs-components/JsDoc'),
      List: path.join(__dirname, '../lib/rsg-bs-components/Markdown/List'),
      ListRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/List/ListRenderer.js'),
      MarkdownHeading: path.join(__dirname, '../lib/rsg-bs-components/Markdown/MarkdownHeading'),
      MarkdownHeadingRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/MarkdownHeading/MarkdownHeadingRenderer.js'),
      Pre: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Pre'),
      PreRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Pre/PreRenderer.js'),
      TableHeadRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Table/TableHeadRenderer.js'),
      TableBodyRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Table/TableBodyRenderer.js'),
      TableRowRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Table/TableRowRenderer.js'),
      TableCellRenderer: path.join(__dirname, '../lib/rsg-bs-components/Markdown/Table/TableCellRenderer.js'),
      MessageRenderer: path.join(__dirname, '../lib/rsg-bs-components/Message/MessageRenderer.js'),
      MethodsRenderer: path.join(__dirname, '../lib/rsg-bs-components/Methods/MethodsRenderer.js'),
      NameRenderer: path.join(__dirname, '../lib/rsg-bs-components/Name/NameRenderer.js'),
      ParaRenderer: path.join(__dirname, '../lib/rsg-bs-components/Para/ParaRenderer.js'),
      PathlineRenderer: path.join(__dirname, '../lib/rsg-bs-components/Pathline/PathlineRenderer.js'),
      PlaygroundRenderer: path.join(__dirname, '../lib/rsg-bs-components/Playground/PlaygroundRenderer.js'),
      PlaygroundErrorRenderer: path.join(__dirname, '../lib/rsg-bs-components/PlaygroundError/PlaygroundErrorRenderer.js'),
      ReactComponentRenderer: path.join(__dirname, '../lib/rsg-bs-components/ReactComponent/ReactComponentRenderer.js'),
      RibbonRenderer: path.join(__dirname, '../lib/rsg-bs-components/Ribbon/RibbonRenderer.js'),
      SectionRenderer: path.join(__dirname, '../lib/rsg-bs-components/Section/SectionRenderer.js'),
      SectionHeadingRenderer: path.join(__dirname, '../lib/rsg-bs-components/SectionHeading/SectionHeadingRenderer.js'),
      SectionsRenderer: path.join(__dirname, '../lib/rsg-bs-components/Sections/SectionsRenderer.js'),
      slots: path.join(__dirname, '../lib/rsg-bs-components/slots'),
      TabButtonRenderer: path.join(__dirname, '../lib/rsg-bs-components/TabButton/TabButtonRenderer.js'),
      TableRenderer: path.join(__dirname, '../lib/rsg-bs-components/Table/TableRenderer.js'),
      TableOfContents: path.join(__dirname, '../lib/rsg-bs-components/TableOfContents/TableOfContents'),
      TableOfContentsRenderer: path.join(__dirname, '../lib/rsg-bs-components/TableOfContents/TableOfContentsRenderer.js'),
      TextRenderer: path.join(__dirname, '../lib/rsg-bs-components/Text/TextRenderer.js'),
      ToolbarButtonRenderer: path.join(__dirname, '../lib/rsg-bs-components/ToolbarButton/ToolbarButtonRenderer.js'),
      TypeRenderer: path.join(__dirname, '../lib/rsg-bs-components/Type/TypeRenderer.js'),
      Usage: path.join(__dirname, '../lib/rsg-bs-components/Usage/Usage.js'),
      VersionRenderer: path.join(__dirname, '../lib/rsg-bs-components/Version/VersionRenderer.js'),
      WelcomeRenderer: path.join(__dirname, '../lib/rsg-bs-components/Welcome/WelcomeRenderer.js'),
    },
    getComponentPathLine(componentPath) {
      let name = path.basename(componentPath, '.js');
      const dir = name === 'index' ? path.dirname(componentPath) : `${path.dirname(componentPath)}/${name}`;
      name = name === 'index' ? path.basename(dir) : name;
      return `import ${name} from '${pkg.name}/${dir.replace(/^src\//, 'lib/')}';`;
    },
    ...jsonExtension,
    ...restUserConfig,
  };
}
