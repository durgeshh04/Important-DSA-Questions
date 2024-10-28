var maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;
    }

    max = Math.max(max, prices[right] - prices[left]);
    right++;
  }

  return max;
};


// console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))