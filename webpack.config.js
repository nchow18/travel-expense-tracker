const webpack = require("webpack");
const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = { 
    entry: {
        app: "./public/assets/js/index.js"
      },
      output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
      },
      module: {

      },
    plugins: [
        new WebpackPwaManifest({
            name: "Travel Expense Tracker",
            short_name: "Expense",
            description: "An app that allows you to track your expenses with or without internet",
            start_url: "./public/index.html",
            background_color: "#01579b",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
              src: path.resolve("dist/assets/icons/icon_512x512.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join("assets", "icons")
            }]
          })
    ],  
    mode: 'development' 
};