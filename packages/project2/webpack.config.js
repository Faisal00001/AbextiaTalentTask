const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    entry: "./src/main.jsx",
    output: {
        publicPath: "http://localhost:3002/",
    },
    mode: "development",
    devServer: {
        port: 3002,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "project2",
            filename: "remoteEntry.js",
            exposes: {
                "./Pricing": "./src/pages/Pricing.jsx",
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: "18.x.x" },
                "react-dom": { singleton: true, eager: true, requiredVersion: "18.x.x" },
            },
        }),
    ],
};
