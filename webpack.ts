import webpack from "webpack"
import path from "path"

const c: webpack.Configuration = {
  entry: "./app.tsx",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, ".")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader'
      }
    ]
  },
  mode: "development"
}

const compiler = webpack(c);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  }

  console.log(stats)
});
