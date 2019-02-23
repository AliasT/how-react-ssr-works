const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: "./app.jsx",
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ]
          ]
        },
        test: /\.jsx?$/
      }
    ]
  },

  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, ".")
  },

  mode: "development"
}
