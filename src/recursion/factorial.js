function factorial(n) {
  if (!Number.isInteger(n)) {
    return null;
  }

  if (n < 0) {
    return null;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

module.exports = factorial;
