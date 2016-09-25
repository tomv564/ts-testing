module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "./dist/bundle.js",
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        // include: [
        //   path.resolve(__dirname, "src"),
        // ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};