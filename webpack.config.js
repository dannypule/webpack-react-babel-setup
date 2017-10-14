const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
  // paths const
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

module.exports = {
  entry: path.join(paths.JS, "app.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js" // output bundle name
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html") // auto insert js via script tag into this file
    }),
    new ExtractTextPlugin("style.bundle.css")
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // test for js or jsx files
        exclude: /node_modules/, // ignore folder
        use: ["babel-loader"] // use babel
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          "file-loader" // use this loader to handle importing of ant file type
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", "jsx"] // allows us to import 'foo' instead of 'foo.js' or 'foo.jsx'
  }
};
