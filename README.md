# laravel-mix-pluton
A Laravel Mix extension to easily configure Pluton

## Installation

### NPM
```
npm i laravel-mix-pluton --save-dev
```

### Yarn
```
yarn add laravel-mix-pluton --dev
```

## Usage
In your `webpack.mix.js` file:

```js
require('laravel-mix-pluton');

mix.pluton('resources/js/paths');
```