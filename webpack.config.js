const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Importa il plugin


module.exports = {
    ...defaultConfig,
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        settings: path.resolve(__dirname, 'src/settings.js'),
        view: path.resolve(__dirname, 'src/view.js')  // Aggiungi questa r
    },
    plugins: [
        ...defaultConfig.plugins,
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
        })
    ]
};