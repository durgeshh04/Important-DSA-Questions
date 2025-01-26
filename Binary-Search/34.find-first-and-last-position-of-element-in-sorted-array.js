/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    const binarySearch = (nums, target, isSearchingLeft) => {
        let left = 0;
        let right = nums.length - 1;
        let idx = -1;
        
        while(left <= right){
            let mid = Math.floor((left + right) / 2);

            if(nums[mid] > target){
                right = mid - 1;
            } else if(nums[mid] < target){
                left = mid + 1;
            } else{
                idx = mid;
                if(isSearchingLeft){
                    right = mid - 1;
                } else{
                    left = mid + 1;
                }
            }
        }
        return idx;
    }

    let left = binarySearch(nums, target, true);
    let right = binarySearch(nums, target, false);

    return [left, right];

};
// @lc code=end

