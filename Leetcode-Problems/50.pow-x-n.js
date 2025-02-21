/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function helperFunction(x, n) {
    if (x == 0) {
        return 0;
    }

    if (n == 0) {
        return 1;
    }

    let res = helperFunction(x, Math.floor(n / 2))
    res = res * res;

    if (n % 2 == 1) {
        return res * x;
    }

    return res;

}

var myPow = function (x, n) {
    let ans = helperFunction(x, Math.abs(n));

    if (n >= 0) {
        return ans;
    }

    return 1 / ans;
};
// @lc code=end

