const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin'); // Importa il plugin di compressione
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    ...defaultConfig,
    //mode: 'production',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        settings: path.resolve(__dirname, 'src/settings.js'),
        view: path.resolve(__dirname, 'src/view.js')
    },
    plugins: [
        ...defaultConfig.plugins,
      // new BundleAnalyzerPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/render/element/button.php'), to: path.resolve(__dirname, 'build/render/element') },
                { from: path.resolve(__dirname, 'src/render/element/text.php'), to: path.resolve(__dirname, 'build/render/element') },
                { from: path.resolve(__dirname, 'src/render/element/image.php'), to: path.resolve(__dirname, 'build/render/element') },
                { from: path.resolve(__dirname, 'src/render/element/icon.php'), to: path.resolve(__dirname, 'build/render/element') },
                { from: path.resolve(__dirname, 'src/render/element/group.php'), to: path.resolve(__dirname, 'build/render/element') },
                { from: path.resolve(__dirname, 'src/render/element/inner-element/innerText.php'), to: path.resolve(__dirname, 'build/render/element/inner-element') },
                { from: path.resolve(__dirname, 'src/render/element/inner-element/innerButton.php'), to: path.resolve(__dirname, 'build/render/element/inner-element') },
                { from: path.resolve(__dirname, 'src/render/element/inner-element/innerIcon.php'), to: path.resolve(__dirname, 'build/render/element/inner-element') },
                { from: path.resolve(__dirname, 'src/render/element/inner-element/innerImage.php'), to: path.resolve(__dirname, 'build/render/element/inner-element') },
                { from: path.resolve(__dirname, 'src/render/navigation/nav.php'), to: path.resolve(__dirname, 'build/render/navigation') },
                { from: path.resolve(__dirname, 'src/render/post/post-image.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render/post/post-title.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render/post/post-excerpt.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render/post/post-link.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render/post/post-author.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render/post/post-date.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render/post/post-categories.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render/post/post-tags.php'), to: path.resolve(__dirname, 'build/render/post') },
                { from: path.resolve(__dirname, 'src/render.php'), to: path.resolve(__dirname, 'build') }
            ]
        }),
        new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
        })
    ]
};