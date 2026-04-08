/**
 * Problem: Solve the flatten nested array problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
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
