var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app",
  },
  resolve: {
    alias: {
      sample: SRC_DIR + '/app/components/sample'
    },
    extensions: ['.js', '.jsx'] 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "es2015", "stage-2"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ] //rules
  }, //module
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};

module.exports = config;