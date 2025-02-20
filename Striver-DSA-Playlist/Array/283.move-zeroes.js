/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

var moveZeroes = function(arr) {
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            swap(arr, i, j);
            j++;
        }
    }
    // return arr ;
};
// @lc code=end

