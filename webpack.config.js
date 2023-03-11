const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports= (env, argv) =>{
  return {
    stats: 'minimal',
    entry: "./src/index.ts",
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: argv.mode === 'development' ? 'eval-source-map' : undefined,
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'static/index.html', to: './' },
          { from: 'static/index.css', to: './' },
        ]
      }),
      new ESLintPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include:[path.resolve(__dirname, 'src')]  
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
  }
}