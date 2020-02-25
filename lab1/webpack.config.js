let path = require("path");

let conf = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist/"),
    publicPath: "dist/"
  },
  module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ] 
  }
};

module.exports = conf;