function gradeCalculator(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
    return null;
  }

  if (score >= 90) {
    return 'A';
  }

  if (score >= 80) {
    return 'B';
  }

  if (score >= 70) {
    return 'C';
  }

  if (score >= 60) {
    return 'D';
  }

  return 'F';
}

module.exports = gradeCalculator;
