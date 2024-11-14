function upperLeftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
  }
}

upperLeftTriangle(5);
