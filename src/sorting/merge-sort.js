/**
 * Problem: Sort an array of numbers in ascending order using merge sort.
 * Approach: Split the array recursively, then merge sorted halves together.
 * Time Complexity: O(n log n).
 * Space Complexity: O(n) due to temporary arrays used during merging.
 * Edge Cases: Returns an empty array for empty input and null for invalid input.
 */
function mergeSort(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }
  }

  function merge(left, right) {
    var merged = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex += 1;
      } else {
        merged.push(right[rightIndex]);
        rightIndex += 1;
      }
    }

    return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
  }

  function sort(values) {
    if (values.length <= 1) {
      return values;
    }

    var middle = Math.floor(values.length / 2);
    var left = sort(values.slice(0, middle));
    var right = sort(values.slice(middle));

    return merge(left, right);
  }

  return sort(numbers.slice());
}

module.exports = mergeSort;
