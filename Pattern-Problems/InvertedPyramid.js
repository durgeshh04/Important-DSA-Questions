/*

* * * * * * * * * 
  * * * * * * *
    * * * * *
      * * * 
        *



*/

function invertedPyramid(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k < i * 2; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

invertedPyramid(5);
