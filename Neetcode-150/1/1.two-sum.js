/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let pairValue = target - nums[i];
        if (map.has(pairValue)) {
            return [map.get(pairValue), i];
        }
        map.set(nums[i], i);
    }
};
// @lc code=end

