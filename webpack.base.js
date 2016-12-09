
/*eslint-disable */
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtendedDefinePlugin = require('extended-define-webpack-plugin');
const BASE_PATH = path.join('./');

// public path static resources
// like bundle.js etc
const PUBLIC_PATH = '';
// public path for dynamic resources
// like JSON calls etc
const PUBLIC_PATH_RES = '../../../';

/**
 * Webpack configuration class
 */
export class DevWebpackConfig {

  get() {
    return {
      context: __dirname,
      eslint: {
        configFile: './.eslintrc'
      },
      entry: {
        vendors: [
          "webpack-material-design-icons"
        ],
        index: [
          'babel-polyfill',
          path.resolve(BASE_PATH, 'src/app/main.js'),
          'webpack-hot-middleware/client',
          'webpack/hot/dev-server'
        ]
      },
      output: {
        filename: '[name]-bundle.js',
        publicPath: `/${PUBLIC_PATH}`,
        path: path.resolve(BASE_PATH, 'dist/')
      },

      resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['', '.jsx', '.js', '.html', '.png', '.svg', '.jpg', '.jpeg', '.png']
      },

      module: {
        loaders: [
          {
            test: /\.js?/,
            loader: 'babel-loader',
            include: [
              path.resolve('src')
            ]
          },
          // {
          //   test: /\.html$/,
          //   loader: "ng-cache",
          //   exclude: /node_modules/
          // },
          {
            test: /\.html$/,
            loader: 'raw-loader'
          },
          {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader?includePaths[]=" + path.resolve(BASE_PATH, "./node_modules/compass-mixins/lib")
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader?importLoaders=1"
          },
          // {
          //   test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
          //   loader: "file?name=[name].[ext]"
          // },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "url-loader"
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          }
        ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new CopyWebpackPlugin([
          // {context:  path.resolve(BASE_PATH, 'src/static'), from: '**/*', to: 'static'},
          {context:  path.resolve(BASE_PATH, 'src/assets'), from: '**/*', to: 'assets'}
        ]),
        new ExtendedDefinePlugin({
          WEBPACK_CONFIG: {
            PUBLIC_PATH: `${PUBLIC_PATH_RES}`
          },
        }),
        new HtmlWebpackPlugin({
          title: 'Phoenix Wireframes',
          filename: 'index.html',
          template: path.resolve(BASE_PATH, 'src/index.html')
        })
      ]
    };
  }
}


/**
 * Webpack dev server
 */
export class DevWebpackDevServer {

  webpackConfig = null;
  express = null;

  constructor(config) {
    this.webpackConfig = config;
    this.express = require('express');
    this.compiler = webpack(this.webpackConfig);
    this.app = this.express();
    this.setMiddleware();
  }

  setMiddleware() {
    this.app.use(webpackDevMiddleware(this.compiler, {
      noInfo: false, publicPath: this.webpackConfig.output.publicPath, hot: true, stats: {colors: true}
    }));
    this.app.use(webpackHotMiddleware(this.compiler));
  }

  createServer() {
    this.app.get("/", function (req, res) {
      res.sendFile(__dirname + '/index.html');
    });
    this.app.listen(3000);
  }

}
