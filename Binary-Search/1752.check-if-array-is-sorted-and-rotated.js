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
    let transition = 0;
    for(let i = 0; i < nums.length; i++){
        let nextIdx = (i + 1) % nums.length;
        if(nums[i] > nums[nextIdx]){
            transition++;
        }
    }

    return transition <= 1;
    
};
// @lc code=end

