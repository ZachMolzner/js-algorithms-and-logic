/**
 * Problem: Group by property.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
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
