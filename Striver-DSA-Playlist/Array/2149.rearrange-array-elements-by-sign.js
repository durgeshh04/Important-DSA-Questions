/*
 * @lc app=leetcode id=2149 lang=javascript
 *
 * [2149] Rearrange Array Elements by Sign
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let res = new Array(nums.length).fill(0);
    let posIdx = 0;
    let negIdx = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res[posIdx] = nums[i];
            posIdx += 2;
        } else {
            res[negIdx] = nums[i];
            negIdx += 2;
        }
    }
    return res;
};
// @lc code=end

