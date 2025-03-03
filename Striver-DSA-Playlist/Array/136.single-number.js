/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let uniqueNum = 0;
    for(let i = 0; i < nums.length; i++){
        uniqueNum = uniqueNum ^ nums[i];
    }
    return uniqueNum;
};
// @lc code=end

