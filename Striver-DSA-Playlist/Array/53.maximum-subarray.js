/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = 0;
    for (let i = 0; i < nums.length-1; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            if (sum < 0) {
                sum = 0;
            }
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};
// @lc code=end

