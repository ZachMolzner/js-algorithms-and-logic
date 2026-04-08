/**
 * Problem: Flatten nested array.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
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
