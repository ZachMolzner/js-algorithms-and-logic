/**
 * Problem: Sort an array of numbers in ascending order using merge sort.
 * Approach: Recursively split the array, then merge sorted halves by comparing front elements.
 * Time Complexity: O(n log n).
 * Space Complexity: O(n) for merged output arrays.
 * Edge Cases: Returns [] for empty arrays and null for invalid input.
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

  if (numbers.length <= 1) {
    return numbers.slice();
  }

  var middle = Math.floor(numbers.length / 2);
  var leftSorted = mergeSort(numbers.slice(0, middle));
  var rightSorted = mergeSort(numbers.slice(middle));

  return merge(leftSorted, rightSorted);
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

  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex += 1;
  }

  return merged;
}

module.exports = mergeSort;
