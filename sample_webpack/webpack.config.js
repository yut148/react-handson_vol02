module.exports = {
  context: __dirname + "/src",
  entry: {
    js: "./App.js",
    css: "./App.css",
    html: "./index.html",
  },
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
};
