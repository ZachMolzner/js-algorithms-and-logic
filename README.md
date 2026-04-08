# JavaScript Algorithms and Data Structures Practice

A recruiter-friendly JavaScript interview prep project focused on core algorithms, data structures, and problem-solving patterns.

## Project Overview

This repository is built to show consistent problem-solving habits:
- clean, beginner-friendly implementations
- clear folder organization by concept
- practical test coverage for normal, edge, and invalid inputs
- reusable exports through a single entry point (`src/index.js`)

## Tech Stack

- **Language:** JavaScript (Node.js)
- **Test Framework:** Jest
- **Module System:** CommonJS (`require` / `module.exports`)

## Project Structure

```text
src/
  arrays/
  logic/
  objects/
  recursion/
  searching/
  sorting/
  strings/
  patterns/
  index.js
tests/
  arrays.test.js
  logic.test.js
  objects.test.js
  recursion.test.js
  searching.test.js
  sorting.test.js
  strings.test.js
  patterns.test.js
```

## Installation

```bash
npm install
```

## Run Tests

```bash
npm test
```

For watch mode:

```bash
npm run test:watch
```

## Concepts Covered

- Arrays (two sum, rotation, merge intervals, missing numbers)
- Strings (palindromes, anagrams, sliding window string problems)
- Logic (fizz buzz, prime checks, parentheses validation)
- Objects (frequency counting, grouping)
- Recursion (factorial, fibonacci, flatten nested arrays)
- Sorting (bubble sort, merge sort)
- Searching (binary search)
- Patterns (two pointers, sliding window)

## Roadmap

- [x] Foundational array/string/logic/object/recursion problems
- [x] Add sorting and searching folders
- [x] Add pattern-based practice (two pointers and sliding window)
- [x] Improve edge-case and invalid-input test coverage
- [ ] Add linked list practice set
- [ ] Add binary tree traversal problems
- [ ] Add graph basics (BFS/DFS)
- [ ] Add dynamic programming starter set
- [ ] Add benchmark notes for selected algorithms

## Author

Built and maintained by the repository owner as an interview-prep and problem-solving portfolio project.

If you are reviewing this as a recruiter or interviewer, start with:
1. `src/index.js` for exports and project coverage
2. the `src/` folders for implementations
3. the `tests/` folder for behavior and edge cases
