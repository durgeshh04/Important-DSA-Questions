/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
    let n = nums.length;
    let k = 1;
    for(let i = 1; i < n; i++){
        if(nums[i-1] !== nums[i]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
// @lc code=end

