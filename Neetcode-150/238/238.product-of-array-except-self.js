/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let temp = 1;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = temp;
        temp *= nums[i];
    }

    temp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= temp;
        temp *= nums[i];
    }

    return result;
};
// @lc code=end

