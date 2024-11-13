/*

\      /
 \    /
  \  /
   \/
*/

function VPattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\\");

    for (let k = 1; k <= (n - i) * 2; k++) {
      process.stdout.write(" ");
    }
    process.stdout.write("/");
    console.log();
  }
}

VPattern(6);
