let mix = require('laravel-mix');
let webpack = require('webpack');

class Pluton {
    register(path) {
        this.path = path;
    }

    webpackPlugins() {
        const rootPath = Mix.paths.root.bind(Mix.paths);
        return new webpack.DefinePlugin({
            PLUTON_PATH: JSON.stringify(rootPath(this.path))
        });
    }
}

mix.extend('pluton', new Pluton);