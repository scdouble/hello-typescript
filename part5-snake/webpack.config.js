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
    // webpackにアロー関数を使わせない
    environment: {
      arrowFunction: false,
    },
  },

  // webpackがパッケージングする時に使うモジュールを指定
  module: {
    // loaderのルールを指定
    rules: [
      // babelに対する処理
      {
        // testでルールが適用されるファイルを指定
        test: /\.ts$/,
        // 使うローダーを指定
        use: [
          // babelを設定
          {
            // loaderを指定
            loader: "babel-loader",
            // babel
            options: {
              // プログラムが動く環境をあらかじめ指定
              presets: [
                [
                  //環境のプラグインを指定
                  "@babel/preset-env",
                  {
                    targets: {
                      //ブラウザーのバーション
                      chrome: "58",
                      ie: "11",
                    },
                    //core jsのバージョン
                    corejs: "3",
                    //core jsの方式をusageに指定。需要に応じて
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 除外するファイルを指定
        exclude: / node_modules/,
      },

      // less に対する処理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
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
