var config = require('./config.json')

module.exports = function () {
  var greeter = document.createElement('div')
  greeter.textContent = config.greetContent
  return greeter
}