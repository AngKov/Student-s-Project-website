const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default

var webpackConfig = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: /\.js$/
            },
            {
                loaders: ["style-loader", "css-loader", "sass-loader"],
                test: /\.(scss|css)$/
            },
            {
                // loader: "file-loader?name=/public/icons/[name].[ext]",
                // test: /\.(jpeg|png|gif|svg)$/i,
            },
            {
                loader: "url-loader",
                test: /\.(png|jpg|gif)$/
            },
            {
                loader : "uglify-loader",
                test: /.*\/app\/.*\.js$/,
                exclude: /.spec.js/
            }
        ]
    },
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Montserrat", variants: [ "400", "700" ] },
                { family: "Nunito Sans", variants: [ "400", "700", "800", "900" ] }
            ]
        }),

        new ImageminWebpackPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
            quality: '95-100'
        }
    })
    ]
};

module.exports = webpackConfig;

