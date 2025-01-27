/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    if (needle.length === 0) {
        return -1;
    }

    let l = 0;
    let r = 0;

    while (r < haystack.length) {
        if (haystack[r] == needle[l]) {
            l++;
            r++;
            if (needle.length === l) {
                return r - l;
            }
        } else {
            r = r - l + 1;
            l = 0;
        }
    }

    return -1;
};
// @lc code=end

