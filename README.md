```console
yarn add -y
yarn add color
yarn add interpolate-rgb
```

we need webpack to import module
create src directory and place index.js in it to use webpack.

```console
npx webpack
```

webpack will create main.js in dist folder, we need to link it in html

```html
<script src="dist/main.js"></script>
```

```console
npx webpack --watch ./src --mode development
```
