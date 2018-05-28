/* eslint-disable global-require */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { generateCSSReferences, generateJSReferences } from 'mini-html-webpack-plugin';
import merge from 'webpack-merge';

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
  path.join(__dirname, '../lib');

export const layoutRendererBase = fs.existsSync(path.join(process.cwd(), 'styleguide/components/LayoutRenderer.js')) ?
  path.join(process.cwd(), 'styleguide/components/LayoutRenderer.js') :
  path.join(__dirname, '../lib/components/LayoutRenderer.js');

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
  ribbon: {
    url: 'javascript:void(0)', // eslint-disable-line no-script-url
  },
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
      <style>
        /* http://meyerweb.com/eric/tools/css/reset/ 
           v2.0 | 20110126
           License: none (public domain)
        */
        html, body {
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
        .loader {
          position: absolute;
          top: 50%;
          left: 48%;
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
          background: #22d4e8;
        }

        .line:nth-child(2) {
          animation-delay: 180ms;
          background: #4922e8;
        }

        .line:nth-child(3) {
          animation-delay: 360ms;
          background: #bd22e8;
        }

        .line:nth-child(4) {
          animation-delay: 540ms;
          background: #e8226a;
        }

        .line:nth-child(5) {
          animation-delay: 540ms;
          background: #e86a22;
        }

        .line:nth-child(6) {
          animation-delay: 360ms;
          background: #e8de22;
        }

        .line:nth-child(7) {
          animation-delay: 180ms;
          background: #8ee822;
        }

        .line:nth-child(8) {
          background: #22e853;
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
    StyleGuideRenderer: layoutRendererBase,
    Wrapper: wrapperBase,
    LogoRenderer: path.join(__dirname, '../lib/rsg-components/Logo/LogoRenderer.js'),
    LinkRenderer: path.join(__dirname, '../lib/rsg-components/Link/LinkRenderer.js'),
    CodeRenderer: path.join(__dirname, '../lib/rsg-components/Code/CodeRenderer.js'),
    ErrorRenderer: path.join(__dirname, '../lib/rsg-components/Error/ErrorRenderer.js'),
    RibbonRenderer: path.join(__dirname, '../lib/rsg-components/Ribbon/RibbonRenderer.js'),
    ComponentsList: path.join(__dirname, '../lib/rsg-components/ComponentsList/ComponentsList.js'),
    ComponentsListRenderer: path.join(__dirname, '../lib/rsg-components/ComponentsList/ComponentsListRenderer.js'),
    TableOfContents: path.join(__dirname, '../lib/rsg-components/TableOfContents/TableOfContents.js'),
    TableOfContentsRenderer: path.join(__dirname, '../lib/rsg-components/TableOfContents/TableOfContentsRenderer.js'),
    ExamplesRenderer: path.join(__dirname, '../lib/rsg-components/Examples/ExamplesRenderer.js'),
    ExamplePlaceholderRenderer: path.join(__dirname, '../lib/rsg-components/ExamplePlaceholder/ExamplePlaceholderRenderer.js'),
    WelcomeRenderer: path.join(__dirname, '../lib/rsg-components/Welcome/WelcomeRenderer.js'),
    Usage: path.join(__dirname, '../lib/rsg-components/Usage/Usage.js'),
    TabButtonRenderer: path.join(__dirname, '../lib/rsg-components/TabButton/TabButtonRenderer.js'),
    SectionsRenderer: path.join(__dirname, '../lib/rsg-components/Sections/SectionsRenderer.js'),
    SectionRenderer: path.join(__dirname, '../lib/rsg-components/Section/SectionRenderer.js'),
    SectionHeadingRenderer: path.join(__dirname, '../lib/rsg-components/SectionHeading/SectionHeadingRenderer.js'),
    HeadingRenderer: path.join(__dirname, '../lib/rsg-components/Heading/HeadingRenderer.js'),
    MessageRenderer: path.join(__dirname, '../lib/rsg-components/Message/MessageRenderer.js'),
    JsDoc: path.join(__dirname, '../lib/rsg-components/JsDoc/JsDoc.js'),
    slots: path.join(__dirname, '../lib/rsg-components/slots/index.js'),
    Slot: path.join(__dirname, '../lib/rsg-components/Slot/Slot.js'),
    ReactComponentRenderer: path.join(__dirname, '../lib/rsg-components/ReactComponent/ReactComponentRenderer.js'),
    MethodsRenderer: path.join(__dirname, '../lib/rsg-components/Methods/MethodsRenderer.js'),
    ArgumentRenderer: path.join(__dirname, '../lib/rsg-components/Argument/ArgumentRenderer.js'),
    ArgumentsRenderer: path.join(__dirname, '../lib/rsg-components/Arguments/ArgumentsRenderer.js'),
    TextRenderer: path.join(__dirname, '../lib/rsg-components/Text/TextRenderer.js'),
    PathlineRenderer: path.join(__dirname, '../lib/rsg-components/Pathline/PathlineRenderer.js'),
    ToolbarButtonRenderer: path.join(__dirname, '../lib/rsg-components/ToolbarButton/ToolbarButtonRenderer.js'),
    PlaygroundRenderer: path.join(__dirname, '../lib/rsg-components/Playground/PlaygroundRenderer.js'),
    Preview: path.join(__dirname, '../lib/rsg-components/Preview/Preview.js'),
    PlaygroundErrorRenderer: path.join(__dirname, '../lib/rsg-components/PlaygroundError/PlaygroundErrorRenderer.js'),
    Editor: path.join(__dirname, '../lib/rsg-components/Editor/Editor.js'),
    EditorLoader: path.join(__dirname, '../lib/rsg-components/Editor/EditorLoader.js'),
    EditorLoaderRenderer: path.join(__dirname, '../lib/rsg-components/Editor/EditorLoaderRenderer.js'),
    Markdown: path.join(__dirname, '../lib/rsg-components/Markdown/Markdown.js'),
    PropsRenderer: path.join(__dirname, '../lib/rsg-components/Props/PropsRenderer.js'),
    Table: path.join(__dirname, '../lib/rsg-components/Table/TableRenderer.js'),
    TableRenderer: path.join(__dirname, '../lib/rsg-components/Table/TableRenderer.js'),
    ParaRenderer: path.join(__dirname, '../lib/rsg-components/Para/ParaRenderer.js'),
    NameRenderer: path.join(__dirname, '../lib/rsg-components/Name/NameRenderer.js'),
    TypeRenderer: path.join(__dirname, '../lib/rsg-components/Type/TypeRenderer.js'),
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
