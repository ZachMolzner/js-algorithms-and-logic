/**
 * Problem: Find the index of a target number in a sorted array.
 * Approach: Use binary search with left and right pointers to halve the search space.
 * Time Complexity: O(log n).
 * Space Complexity: O(1).
 * Edge Cases: Returns -1 when target is missing and null for invalid input.
 */
function binarySearch(numbers, target) {
  if (!Array.isArray(numbers) || typeof target !== 'number') {
    return null;
  }

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }

    if (i > 0 && numbers[i] < numbers[i - 1]) {
      return null;
    }
  }

  var left = 0;
  var right = numbers.length - 1;

  while (left <= right) {
    var middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) {
      return middle;
    }

    if (numbers[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
