// pathをImport
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// webpackの中の全部Configはこのmodule exportsの中
module.exports = {
  // エントリーファイルを指定
  entry: "./src/index.ts",

  // ファイルの出力場所を設定
  output: {
    // パッケージされた後のpathをして
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // webpackがパッケージングする時に使うモジュールを指定
  module: {
    // loaderのルールを指定
    rules: [
      {
        // testでルールが適用されるファイルを指定
        test: /\.ts$/,
        // 使うローダーを指定
        use: "ts-loader",
        // 除外するファイルを指定
        exclude: / node_modules/,
      },
    ],
  },

  // pluginを設定
  plugins: [
    new HtmlWebpackPlugin({
      // title:"my app title"
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  // jsモジュールにできるものを指定する //デフォルトでtsファイルはモジュールとして認識されてない
  resolve: {
    extensions: [".ts", ".js"],
  },
};
