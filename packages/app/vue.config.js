const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    writeToDisk: true,
  },

  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: `${path.dirname(
              require.resolve(`@namespace/translations/package.json`)
            )}/locales`,
            to: path.join(__dirname, "public/locales"),
            toType: "dir",
          },
        ],
      }),
    ],
  },
};
