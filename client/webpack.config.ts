// webpack.config.js
const config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // Enable CSS Modules
              localIdentName: "[name]__[local]___[hash:base64:5]", // Custom naming convention
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};

export default config;
