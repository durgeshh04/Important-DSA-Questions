function fullPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

fullPyramid(5);
