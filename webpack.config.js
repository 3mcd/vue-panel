// webpack.config.js
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-multi-loader" }
    ]
  }
};