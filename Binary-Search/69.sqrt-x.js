/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0;
    let r = x;
    let ans = 0;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid * mid == x) {
            return mid;
        } else if (mid * mid > x) {
            r = mid - 1;
        } else {
            ans = mid;
            l = mid + 1;
        }
    }
    return ans;
};
// @lc code=end

