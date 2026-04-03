# JavaScript Algorithms and Logic

A focused JavaScript practice repository for building clean problem-solving habits through beginner-to-intermediate, interview-style challenges.

## Purpose

This repository demonstrates practical JavaScript fundamentals with readable solutions and straightforward logic. It is designed to show portfolio reviewers how I approach coding problems clearly, validate inputs, and organize solutions in a maintainable way.

## Topics Covered

- Arrays
- Strings
- Logic and conditionals
- Objects
- Recursion
- Unit testing with Jest

## Folder Structure Overview

```text
js-algorithms-and-logic/
├── README.md
├── package.json
├── .gitignore
├── src/
│   ├── arrays/
│   ├── strings/
│   ├── logic/
│   ├── objects/
│   └── recursion/
└── tests/
```

## Included Problems

### Arrays
- `two-sum.js`
- `max-number.js`
- `remove-duplicates.js`
- `sum-array.js`

### Strings
- `reverse-string.js`
- `palindrome.js`
- `count-vowels.js`
- `first-non-repeating-char.js`

### Logic
- `fizzbuzz.js`
- `grade-calculator.js`
- `is-prime.js`

### Objects
- `frequency-counter.js`
- `group-by-property.js`

### Recursion
- `factorial.js`
- `fibonacci.js`

## Example Usage

```js
const twoSum = require('./src/arrays/two-sum');
console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]
```

```js
const isPalindrome = require('./src/strings/palindrome');
console.log(isPalindrome('A man, a plan, a canal: Panama!'));
// true
```

```js
const fizzBuzz = require('./src/logic/fizzbuzz');
console.log(fizzBuzz(5));
// [1, 2, 'Fizz', 4, 'Buzz']
```

```js
const groupByProperty = require('./src/objects/group-by-property');
const users = [
  { name: 'Ana', role: 'admin' },
  { name: 'Bo', role: 'user' },
  { name: 'Cal', role: 'admin' }
];
console.log(groupByProperty(users, 'role'));
// { admin: [...], user: [...] }
```

```js
const fibonacci = require('./src/recursion/fibonacci');
console.log(fibonacci(7));
// 13
```

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd js-algorithms-and-logic
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Run Tests

```bash
npm test
```

## Why I Built This

I built this project to strengthen my JavaScript fundamentals, practice writing clear and reliable solutions, and present a portfolio-ready example of how I structure problem-solving code as a junior software engineer.

## Future Additions

- Binary search (iterative and recursive)
- Merge intervals
- Anagram checker
- Linked list basics (insert, delete, traverse)
- Sliding window practice problems

## Suggested Commit Sequence (From Scratch)

1. `chore: initialize JavaScript repo with npm and base metadata`
2. `chore: add project structure for src topics and tests`
3. `feat(arrays): add two-sum, max-number, remove-duplicates, and sum-array`
4. `feat(strings): add reverse-string, palindrome, count-vowels, and first-non-repeating-char`
5. `feat(logic): add fizzbuzz, grade-calculator, and is-prime`
6. `feat(objects): add frequency-counter and group-by-property`
7. `feat(recursion): add factorial and fibonacci implementations`
8. `test: add grouped Jest test suites for arrays, strings, logic, objects, and recursion`
9. `docs: write polished README with setup steps, problem index, and usage examples`
10. `chore: add gitignore and AGENTS instructions for future contributors`
