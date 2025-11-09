const secondLargetNumber = (arr: number[]): number | string => {
  let firstLargest: number = -Infinity;
  let secondLargest: number = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (firstLargest < arr[i]) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (secondLargest < arr[i] && firstLargest != arr[i]) {
      secondLargest = arr[i];
    }
  }

  // Depends on what interviewer wants for this test case
  if (secondLargest == -Infinity) {
    return "print whatever as interviewer wants";
  }
  return secondLargest;
};

console.log(secondLargetNumber([1, 5, 9, 3]));
console.log(secondLargetNumber([11, 3, 2, 8]));
console.log(secondLargetNumber([1, 1, 1, 1]));
