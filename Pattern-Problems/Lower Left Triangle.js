function lowerLeftTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let str = "* ";
    console.log(str.repeat(i));
  }
}

lowerLeftTriangle(5);
