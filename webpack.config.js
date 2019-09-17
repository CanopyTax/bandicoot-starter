const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bandicoot-starter.js"
  },
  mode: "development",
  devtool: "sourcemap",
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src")
  }
};
