var slice = require('sliced')

module.exports = sort

function sort(el, comparator) {
  var fragment = document.createDocumentFragment()
  var elements = slice(el.children)
  var l = elements.length
  var i = 0

  elements.sort(comparator)

  while (++i < l) {
    fragment.appendChild(
      elements[i]
    )
  }

  el.appendChild(fragment)

  return el
}
