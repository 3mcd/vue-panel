// webpack.config.js
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    library: "VuePanel",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" }
    ]
  }
};
