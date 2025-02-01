/* eslint-env node */
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    entry: "./src/main.jsx",
    output: {
        publicPath: "http://localhost:3001/",
    },
    mode: "development",
    devServer: {
        port: 3001,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "project1",
            remotes: {
                project2: "project2@http://localhost:3002/remoteEntry.js",
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: "18.x.x" },
                "react-dom": { singleton: true, eager: true, requiredVersion: "18.x.x" },
            },
        }),
    ],
};
