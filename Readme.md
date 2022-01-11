# Prepare for typescript

## Install Nodejs

<https://nodejs.org/ja/>

## Install typescript compiler

```
npm i -g typescript
```

## Create a typescript file

```
touch hello.ts
```

```ts
console.log("hello")
```

## Compile

```
tsc xxx.ts
```

## Watching mode

``` 
tsc app.ts -w
```

## Webpack
```
npm init -y
cnpm i -D webpack webpack-cli typescript ts-loader 
```
webpackから自動でhtmlを生成プラグイン
```
npm i -D html-webpack-plugin
```
開発サーバー導入する
```
npm i -D webpack-dev-server
```

コンパイルする前にDistファイルを空にするプラグイン
```
npm i -D clean-webpack-plugin
```