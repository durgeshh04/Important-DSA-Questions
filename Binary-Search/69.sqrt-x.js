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
var mySqrt = function(x) {
    let left = 0;
    let right = x;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(mid * mid === x){
            return mid;
        } else if(mid * mid < x){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }
    return right;
};
// @lc code=end

