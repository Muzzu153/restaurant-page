const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { title } = require("process");

module.exports = merge(common, {
  mode: "production",

  devtool: "source-map",

  // module: {
  //   rules: [
  //     {
  //       test: /\.(jpg|png|svg|jpeg|gif)$/i,
  //       type: "asset/resource",
  //       generator: {
  //         filename: "./dist/images/[name][ext]",
  //       },
  //     },
  //     {
  //       test: /\.(woff|woff2)$/i,
  //       type: "asset/resource",
  //       generator: {
  //         filename: "./dist/fonts/[name][ext]",
  //       },
  //     },
  //   ],
  // },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "./images/[name][ext]",
  },
});
