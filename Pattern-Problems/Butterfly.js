function Butterfly(n) {
  let spaces = 2 * n - 1;
  let stars = 0;

  for (let i = 1; i <= 2 * n - 1; i++) {
    if (i <= n) {
      spaces = spaces - 2;
      stars++;
    } else {
      spaces = spaces + 2;
      stars--;
    }

    for (let j = 1; j <= stars; j++) {
      process.stdout.write("* ");
    }

    for (let j = 1; j <= spaces; j++) {
      process.stdout.write("  ");
    }

    for (let j = 1; j <= stars; j++) {
      if (j !== n) {
        process.stdout.write("* ");
      }
    }
    console.log();
  }
}

Butterfly(5);
