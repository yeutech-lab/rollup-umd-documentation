/* eslint-disable global-require */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { generateCSSReferences, generateJSReferences } from 'mini-html-webpack-plugin';
import merge from 'webpack-merge';
import parse from 'parse-author';

/** we decide either to use the package.json from react or the one from the current working dir
 * this will make the configured both, within project and when imported
 */


export const pkgBase = fs.existsSync(path.join(process.cwd(), 'package.json')) ?
  path.join(process.cwd()) :
  path.join(__dirname, '..');

export const pkgDoc = require(path.join(__dirname, '../package.json'));
export const pkg = require(path.join(pkgBase, 'package.json'));

export const licenseBase = fs.existsSync(path.join(process.cwd(), 'LICENSE.md')) ?
  path.join(process.cwd(), 'LICENSE.md') :
  path.join(__dirname, '../LICENSE.md');

let license = pkgBase.license; // eslint-disable-line prefer-destructuring
if (fs.existsSync(licenseBase)) {
  license = fs.readFileSync(licenseBase, { encoding: 'utf8' }).split('\n')[0]; // eslint-disable-line prefer-destructuring
} else {
  console.error('LICENSE.md is missing');
}

export const styleguideBase = fs.existsSync(path.join(process.cwd(), 'styleguide')) ?
  path.join(process.cwd(), 'styleguide') :
  path.join(__dirname);

export const srcBase = fs.existsSync(path.join(process.cwd(), 'src')) ?
  path.join(process.cwd(), 'src') :
  path.join(__dirname, '../lib');

export const layoutRendererBase = fs.existsSync(path.join(process.cwd(), 'styleguide/components/LayoutRenderer.js')) ?
  path.join(process.cwd(), 'styleguide/components/LayoutRenderer.js') :
  path.join(__dirname, '../lib/components/LayoutRendererGaFix.js'); // TODO: allow configuration of Google Analytics them remove this
  // path.join(__dirname, '../lib/components/LayoutRenderer.js');

export const wrapperBase = fs.existsSync(path.join(process.cwd(), 'styleguide/components/Wrapper.js')) ?
  path.join(process.cwd(), 'styleguide/components/Wrapper.js') :
  path.join(__dirname, '../lib/components/Wrapper.js');

/* eslint-disable no-nested-ternary */
export const jsonExtension = fs.existsSync(path.join(process.cwd(), 'styleguide/styleguide.ext.json')) ?
  require(path.join(process.cwd(), 'styleguide/styleguide.ext.json')) :
  fs.existsSync(path.join(__dirname, '../styleguide/styleguide.ext.json')) ?
    require(path.join(__dirname, '../styleguide/styleguide.ext.json')) : {};

export const config = {
  serverPort: process.env.NODE_PORT ? parseInt(process.env.NODE_PORT) : 6060, // eslint-disable-line radix
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${pkg.description}">
      ${pkg.keywords && pkg.keywords.length > 0 ? `<meta name="keywords" content="${pkg.keywords.join(',')}">` : ''}
      <meta name="author" content="${parse(pkg.author).name}">
      <meta name="copyright" content="${license}" />
      ${pkg.contributor && pkg.contributor.length > 0 ? `<meta name="contributor" content="${pkg.contributor.map((c) => parse(c).name).join(',')}"> ̈́` : ''}
      ${pkg.private === undefined ? '<meta name="robots" content="index,follow"/>' : ''/* undefined means the package is public */}
      ${pkg.private === false ? '<meta name="robots" content="nofollow"/>' : '<meta name="robots" content="noindex, nofollow"/>'/* false means release in private, true means never released */}
      ${pkg.name !== pkgDoc.name ? `<meta name="rollup-documentation-version" content="${pkgDoc.version}">\n<meta name="version" content="${pkg.version}">` : `<meta name="version" content="${pkg.version}">`}
      <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
      <title>${title}</title>
      <style>
        /* http://meyerweb.com/eric/tools/css/reset/ 
           v2.0 | 20110126
           License: none (public domain)
        */
        html, body {
          width: 100%;
          height: 100%
        }
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol, ul {
          list-style: none;
        }
        blockquote, q {
          quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
      </style>
      ${generateCSSReferences(css, publicPath)}
    </head>
    <body>
    <div id="rsg-root">
      <style>
        @media only screen and (min-width: 0px) and (max-width: 799px)  {
          .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -42px;
          }
        }
        @media only screen and (min-width: 799px)  {
          .loader {
            position: absolute;
            top: 50%;
            left: 50%;
          }
        }
        .line {
          animation: expand 1.5s ease-in-out infinite;
          border-radius: 10px;
          display: inline-block;
          transform-origin: center center;
          margin: 0 3px;
          width: 1px;
          height: 25px;
        }
        .line:nth-child(1) {
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        .line:nth-child(2) {
          animation-delay: 180ms;
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        .line:nth-child(3) {
          animation-delay: 360ms;
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        .line:nth-child(4) {
          animation-delay: 540ms;
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        .line:nth-child(5) {
          animation-delay: 540ms;
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        .line:nth-child(6) {
          animation-delay: 360ms;
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        .line:nth-child(7) {
          animation-delay: 180ms;
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        .line:nth-child(8) {
          background: linear-gradient(#B31255, #75096a);
          /* Opera linear gradient support */
          background: -o-linear-gradient(#B31255, #75096a);
        }
        @keyframes expand {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(2);
          }
        }
      </style>
      <div class="loader">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    ${generateJSReferences(js, publicPath)}
    </body>
  </html>`,
  theme: {},
  title: pkg.name || 'Please add key name to your package.json',
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
  },
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
    slots: path.join(__dirname, '../lib/rsg-bs-components/slots/index.js'),
    TabButtonRenderer: path.join(__dirname, '../lib/rsg-bs-components/TabButton/TabButtonRenderer.js'),
    TableRenderer: path.join(__dirname, '../lib/rsg-bs-components/Table/TableRenderer.js'),
    TableOfContents: path.join(__dirname, '../lib/rsg-bs-components/TableOfContents/TableOfContents'),
    TableOfContentsRenderer: path.join(__dirname, '../lib/rsg-bs-components/TableOfContents/TableOfContentsRenderer.js'),
    TextRenderer: path.join(__dirname, '../lib/rsg-bs-components/Text/TextRenderer.js'),
    ToolbarButtonRenderer: path.join(__dirname, '../lib/rsg-bs-components/ToolbarButton/ToolbarButtonRenderer.js'),
    TypeRenderer: path.join(__dirname, '../lib/rsg-bs-components/Type/TypeRenderer.js'),
    Usage: path.join(__dirname, '../lib/rsg-bs-components/Usage/Usage.js'),
    WelcomeRenderer: path.join(__dirname, '../lib/rsg-bs-components/Welcome/WelcomeRenderer.js'),
  },
  getComponentPathLine(componentPath) {
    let name = path.basename(componentPath, '.js');
    const dir = name === 'index' ? path.dirname(componentPath) : `${path.dirname(componentPath)}/${name}`;
    name = name === 'index' ? path.basename(dir) : name;
    return `import ${name} from '${pkg.name}/${dir.replace(/^src\//, 'lib/')}';`;
  },
  ...jsonExtension,
};


/**
 * export webpack merge util
 * @type {merge}
 */
export const webpackMerge = (...args) => merge(config.webpackConfig, ...args);

export default config;
