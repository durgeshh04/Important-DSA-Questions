var productExceptSelf = function (nums) {
  let resultArray = [];
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    resultArray[i] = leftProduct;
    leftProduct *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    resultArray[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return resultArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1,1,0,-3,3]));
