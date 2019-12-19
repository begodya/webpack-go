const path = require('path')

module.exports = {
  mode: "development",
  entry: __dirname + "/src/main.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash:16].js'
  }
}