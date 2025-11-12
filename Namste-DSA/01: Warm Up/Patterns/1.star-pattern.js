/*

* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *

*/

// With extra variable:

// function StarPattern(n: number) {
//   for (let i = 0; i < n; i++) {
//     let pattern = "";
//     for (let j = 0; j < n; j++) {
//       pattern = pattern + "*" + " ";
//     }
//     console.log(pattern);
//   }
// }

// StarPattern(5);

// Without extra variable:   //process.stdout.write("*") this works in js perfectly in ts we have to download package.

function StarPattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*" + " ");
    }
    console.log();
  }
}

StarPattern(6);
