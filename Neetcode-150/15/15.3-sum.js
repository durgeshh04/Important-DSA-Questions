/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 || nums[i] != nums[i - 1]) {
            helperFunction(nums, i, res);
        }
    }
    return res;
};

function helperFunction(nums, i, res) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum < 0) {
            j++;
        } else if (sum > 0) {
            k--;
        } else {
            res.push([nums[i], nums[j++], nums[k--]]);
            while (j < k && nums[j] == nums[j - 1]) {
                j++;
            }
        }
    }
}

// @lc code=end
