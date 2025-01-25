/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0;
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for(let i = 0; i < s.length - 1; i++){
        if(roman[s[i]] < roman[s[i+1]]){
            res -= roman[s[i]];
        } else{
            res += roman[s[i]];
        }
    }

    return res + roman[s[s.length -  1]];

};
// @lc code=end

