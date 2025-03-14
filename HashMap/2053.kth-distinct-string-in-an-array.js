/*
 * @lc app=leetcode id=2053 lang=javascript
 *
 * [2053] Kth Distinct String in an Array
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let map = new Map();
    for (let char of arr) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let key of arr) {
        if (map.get(key) == 1) {
            k--;
            if (k == 0) {
                return key;
            }
        }
    }
    return "";
};
// @lc code=end

