module.exports = {
  entry: './src/app.jsx',

  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
}
