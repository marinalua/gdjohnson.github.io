module.exports = {
    context: __dirname,
    entry: {"s": "./main.js"},
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    devtool: "eval-source-map",
    target: 'node', 
    externals: {
        "request": "request" 
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env']
                }
            }
        ]
    },
    resolve: { extensions: [".js", "*"]}
  };