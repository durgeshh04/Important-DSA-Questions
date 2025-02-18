/*
 * @lc app=leetcode id=1752 lang=javascript
 *
 * [1752] Check if Array Is Sorted and Rotated
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[(i+1) % nums.length]){
            count++;
        }
    }
    return count <= 1;
};
// @lc code=end

