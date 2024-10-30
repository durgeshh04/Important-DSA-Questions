/*

* * * * * *
* * * * * 
* * * * 
* * * 
* * 
* 


*/

function patternFive(n) {
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
        // process.stdout.write(j.toString() + " ");
    }
    console.log();
    
  }
}

patternFive(6);
