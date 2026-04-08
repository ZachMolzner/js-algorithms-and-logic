/**
 * Problem: Sort an array of numbers in ascending order using bubble sort.
 * Approach: Repeatedly compare adjacent values and swap when they are out of order.
 * Time Complexity: O(n^2) in the average and worst case.
 * Space Complexity: O(n) because this implementation returns a copied array.
 * Edge Cases: Returns an empty array for empty input and null for invalid input.
 */
function bubbleSort(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  var sorted = numbers.slice();

  for (var i = 0; i < sorted.length; i += 1) {
    if (typeof sorted[i] !== 'number') {
      return null;
    }
  }

  for (var end = sorted.length - 1; end > 0; end -= 1) {
    var swapped = false;

    for (var current = 0; current < end; current += 1) {
      if (sorted[current] > sorted[current + 1]) {
        var temp = sorted[current];
        sorted[current] = sorted[current + 1];
        sorted[current + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return sorted;
}

module.exports = bubbleSort;
