/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;
    while (l < r) {
        let currHeight = Math.min(height[l], height[r]);
        let width = r - l;
        maxArea = Math.max(maxArea, currHeight * width);
        height[l] < height[r] ? l++ : r--;
    }
    return maxArea;
};
// @lc code=end

