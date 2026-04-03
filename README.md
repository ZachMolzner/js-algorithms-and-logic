# JavaScript Algorithms and Logic

A portfolio-focused JavaScript repository that shows how I solve coding problems with clear logic, clean structure, and reliable tests.

## Why this project matters

This project is designed for recruiter and hiring manager review. It highlights:
- **Problem-solving skills:** breaking problems into simple, testable steps.
- **Clean code practices:** readable naming, focused functions, and consistent structure.
- **Testing mindset:** Jest coverage across arrays, strings, logic, objects, and recursion.

## Why I Built This

I built this project as a junior developer transitioning careers into software engineering. I wanted one place to prove that I can learn quickly, practice consistently, and write code that is easy for teams to read and maintain. Each problem is a small example of how I approach unfamiliar challenges: understand the requirement, write a clear solution, and verify behavior with tests.

## Topics and problems

### Arrays
- `two-sum`
- `max-number`
- `remove-duplicates`
- `sum-array`
- `binary-search`
- `merge-intervals`
- `find-missing-number`
- `rotate-array`

### Strings
- `reverse-string`
- `palindrome`
- `count-vowels`
- `first-non-repeating-char`
- `anagram-checker`
- `longest-substring-without-repeating`

### Logic
- `fizzbuzz`
- `grade-calculator`
- `is-prime`
- `valid-parentheses`

### Objects
- `frequency-counter`
- `group-by-property`

### Recursion
- `factorial`
- `fibonacci`
- `flatten-nested-array`

```text
src/
  arrays/
  strings/
  logic/
  objects/
  recursion/
tests/
```

## Quick start

```bash
npm install
npm test
```

## How this supports interview preparation

This repo gives me repeatable practice with common coding interview patterns (hash maps, two pointers, sliding windows, recursion, and stack-based validation). It also helps me explain tradeoffs clearly, which is just as important in interviews as getting the correct answer.

## Example usage

```js
const binarySearch = require('./src/arrays/binary-search');
console.log(binarySearch([1, 3, 5, 7, 9], 7));
// 3
```

```js
const anagramChecker = require('./src/strings/anagram-checker');
console.log(anagramChecker('Listen', 'Silent'));
// true
```

```js
const validParentheses = require('./src/logic/valid-parentheses');
console.log(validParentheses('{[()]}'));
// true
```

```js
const flattenNestedArray = require('./src/recursion/flatten-nested-array');
console.log(flattenNestedArray([1, [2, [3, 4], 5], 6]));
// [1, 2, 3, 4, 5, 6]
```

## Future Additions

- Binary tree traversal practice (BFS and DFS)
- Linked list basics (insert, delete, reverse)
- Dynamic programming starter problems
- More edge-case focused test scenarios
- Time and space complexity notes for each solution
