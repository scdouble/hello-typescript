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