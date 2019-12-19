const path = require('path')

module.exports = {
  mode: "development", // 压缩模式
  devtool: 'eval-source-map', // 编译调试
  entry: __dirname + "/src/main.js", // 入口文件路径

  // 打包文件路径
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  // 自动刷新
  devServer: {
    contentBase: "./", // 本地服务器加载页面 index.html 所在的目录
    port: "8080", // 监听端口，默认 8080
    inline: true, // 实时刷新
    historyApiFallback: true, // 设置 true，所有跳转将指向 index.html
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: "babel-loader"
      },
      exclude: /node_modules/
    }]
  }
}