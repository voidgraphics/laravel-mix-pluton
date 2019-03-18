let mix = require('laravel-mix');
let webpack = require('webpack');

class Pluton {
    register(path) {
        this.path = path;
    }

    webpackPlugins() {
        return new webpack.DefinePlugin({
            PLUTON_PATH: JSON.stringify(__dirname + '/' + this.path)
        });
    }
}

mix.extend('pluton', new Pluton);