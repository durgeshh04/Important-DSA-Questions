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
    let currSum = 0;
    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0;
        }
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};
// @lc code=end

