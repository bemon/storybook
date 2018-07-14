const path = require('path');
const AureliaWebPackPlugin = require('aurelia-webpack-plugin');

module.exports = {
  entry: {
    app: [],
    aurelia: [
      'aurelia-bootstrapper-webpack',
      'aurelia-polyfills',
      'aurelia-pal',
      'aurelia-pal-browser',
      'aurelia-binding',
      'aurelia-dependency-injection',
      'aurelia-event-aggregator',
      'aurelia-framework',
      'aurelia-history',
      'aurelia-history-browser',
      'aurelia-loader',
      'aurelia-loader-webpack',
      'aurelia-logging',
      'aurelia-logging-console',
      'aurelia-metadata',
      'aurelia-path',
      'aurelia-route-recognizer',
      'aurelia-router',
      'aurelia-task-queue',
      'aurelia-templating',
      'aurelia-templating-binding',
      'aurelia-templating-router',
      'aurelia-templating-resources',
    ],
  },

  output: {
    // (2)
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  resolve: {
    // (3)
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'],
  },

  module: {
    // (4)
    rules: [
      { test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.ts$/i, use: 'ts-loader' },
      { test: /\.html$/i, use: 'html-loader' },
    ],
  },

  plugins: [
    new AureliaWebPackPlugin({ noWebpackLoader: true, aureliaApp: undefined }), // (5)
  ],
};
