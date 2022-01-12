# Prepare for typescript

## Install Nodejs

<https://nodejs.org/ja/>

## Install typescript compiler

```bash
npm i -g typescript
```

## Create a typescript file

```bash
touch hello.ts
```

```ts
console.log("hello")
```

## Compile

```bash
tsc xxx.ts
```

## Watching mode

```bash
tsc app.ts -w
```

## Webpack

```bash
npm init -y
npm i -D webpack webpack-cli typescript ts-loader 
```

webpackから自動でhtmlを生成プラグイン

```bash
npm i -D html-webpack-plugin
```

開発サーバー導入する

```bash
npm i -D webpack-dev-server
```

コンパイルする前にDistファイルを空にするプラグイン

```bash
npm i -D clean-webpack-plugin
```

babelを導入

```bash
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

less, less-loaderを導入

```bash
npm i -D less less-loader css-loader style-loader
```

postcss(古いブラウザーへのCSSの互換性を処理(プレフィックスの追加など))


```bash
npm i -D postcss postcss-loader postcss-preset-env
```
