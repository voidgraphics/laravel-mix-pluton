let mix = require('laravel-mix');
let webpack = require('webpack');
let fs = require('fs');

class Pluton {
    register(path) {
        this.path = path;
    }

    dependencies() {
        return ['whitecube-pluton', '@babel/plugin-proposal-class-properties'];
    }

    webpackPlugins() {
        const rootPath = Mix.paths.root.bind(Mix.paths);
        const path = rootPath(this.path);

        if(!fs.existsSync(path)) {
            throw 'Pluton error: directory "' + this.path + '" does not exist.';
        }

        return new webpack.DefinePlugin({
            PLUTON_PATH: JSON.stringify(path)
        });
    }
}

mix.extend('pluton', new Pluton);
