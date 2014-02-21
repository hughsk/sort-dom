var node = document.getElementById('sortme')
var sort = require('./')

console.time('sorting')
sort(node, function(ea, eb) {
  var a = ea.innerHTML.toUpperCase()
  var b = eb.innerHTML.toUpperCase()

  return a > b
    ? +1 : a < b
    ? -1 : 0
})
console.timeEnd('sorting')
