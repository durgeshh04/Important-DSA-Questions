/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    if (s.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) return false;
            
            const last = stack[stack.length - 1];
            if (
                (s[i] == ')' && last !== '(') ||
                (s[i] == '}' && last !== '{') ||
                (s[i] == ']' && last !== '[')
            ) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length == 0;
};
// @lc code=end
