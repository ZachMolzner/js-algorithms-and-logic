/**
 * Problem: Sort an array of numbers in ascending order using bubble sort.
 * Approach: Repeatedly swap adjacent values when they are out of order, and stop early if no swaps occur.
 * Time Complexity: O(n^2) in the average and worst case, O(n) in best case with early stop.
 * Space Complexity: O(n) because this implementation returns a copied array.
 * Edge Cases: Returns [] for empty arrays and null for invalid input.
 */
function bubbleSort(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  var result = numbers.slice();

  for (var i = 0; i < result.length; i += 1) {
    if (typeof result[i] !== 'number') {
      return null;
    }
  }

  for (var end = result.length - 1; end > 0; end -= 1) {
    var swapped = false;

    for (var index = 0; index < end; index += 1) {
      if (result[index] > result[index + 1]) {
        var temp = result[index];
        result[index] = result[index + 1];
        result[index + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return result;
}

module.exports = bubbleSort;
