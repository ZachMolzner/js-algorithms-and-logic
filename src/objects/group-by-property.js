/**
 * Problem: Solve the group by property problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
 */
function groupByProperty(items, property) {
  if (!Array.isArray(items) || typeof property !== 'string' || property.length === 0) {
    return null;
  }

  var grouped = {};

  for (var i = 0; i < items.length; i += 1) {
    var item = items[i];

    if (item === null || typeof item !== 'object') {
      return null;
    }

    var key = Object.prototype.hasOwnProperty.call(item, property) ? item[property] : 'undefined';
    var bucket = String(key);

    if (!grouped[bucket]) {
      grouped[bucket] = [];
    }

    grouped[bucket].push(item);
  }

  return grouped;
}

module.exports = groupByProperty;
