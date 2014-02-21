# sort-dom [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/sort-dom&title=sort-dom&description=hughsk/sort-dom%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Sort a DOM node's children.

## Usage ##

[![sort-dom](https://nodei.co/npm/sort-dom.png?mini=true)](https://nodei.co/npm/sort-dom)

### `sort(parent, comparator)` ###

Where `parent` is the element whose children you wish to sort, and comparator
is a comparator function equivalent to what you'd use with
`Array.prototype.sort`.

``` javascript
var node = document.getElementById('sortme')
var sort = require('sort-dom')

sort(node, function(ea, eb) {
  var a = ea.innerHTML.toUpperCase()
  var b = eb.innerHTML.toUpperCase()

  return a > b
    ? +1 : a < b
    ? -1 : 0
})
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/sort-dom/blob/master/LICENSE.md) for details.
