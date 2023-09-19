var path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
  {
    mode: "production",
    entry: "./app.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "app.bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "10"
                  }
                }
              ]
            ]
          }
        }
      ]
    },
    resolve: {
      mainFields: ["browser", "main"]
    },
    stats: {
      colors: true
    },
    devtool: "source-map",
    devServer: {
      static: "./build"
    },
    optimization: {
      // Force it to keep full variable names during minimization
      // so we can easily debug what got tree-shaken out.
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false
          }
        })
      ],
    }
  }
];
