/*
 * @lc app=leetcode id=2781 lang=javascript
 *
 * [2781] Length of the Longest Valid Substring
 */

// @lc code=start
/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function (word, forbidden) {
    let newSet = new Set();
    for (let i = 0; i < forbidden.length; i++) {
        newSet.add(forbidden[i]);
    }

    let max = 0;

    for (let left = 0, right = 0; right < word.length; right++) {
        let check = right;
        let checkStr = "";
        while (right - check < 10 && check >= left) {
            checkStr = word[check] + checkStr;
            if (newSet.has(checkStr)) {
                left = check + 1;
                break;
            }
            check--;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};
// @lc code=end

