/*

1 
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1


*/

function Arrow(n) {
  for (let i = 1; i < n * 2; i++) {
    if (i <= n) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(j.toString() + " ");
      }
    } else {
      for (let j = 1; j <= 2 * n - i; j++) {
        process.stdout.write(j.toString() + " ");
      }
    }
    console.log();
  }
}

Arrow(5);
