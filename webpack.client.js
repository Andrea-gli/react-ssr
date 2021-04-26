const path = require('path');

module.exports = {
  //set root file (entry point)
  entry: './src/client/client.js',

  //tell webpack where to put output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  //tell webpack to run babel on every file it runs thru
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        //tell babel not to run files in certain dir
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0', //handle async
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};
