var productExceptSelf = function (nums) {
  let resultArray = [];
  let runningProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    resultArray[i] = runningProduct;
    runningProduct *= nums[i];
  }

  runningProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    resultArray[i] *= runningProduct;
    runningProduct *= nums[i];
  }

  return resultArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1,1,0,-3,3]));
