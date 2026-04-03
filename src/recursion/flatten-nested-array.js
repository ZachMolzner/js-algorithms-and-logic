function flattenNestedArray(items) {
  if (!Array.isArray(items)) {
    return null;
  }

  var flattened = [];

  function flatten(currentItems) {
    for (var i = 0; i < currentItems.length; i += 1) {
      var value = currentItems[i];

      if (Array.isArray(value)) {
        flatten(value);
      } else {
        flattened.push(value);
      }
    }
  }

  flatten(items);
  return flattened;
}

module.exports = flattenNestedArray;
