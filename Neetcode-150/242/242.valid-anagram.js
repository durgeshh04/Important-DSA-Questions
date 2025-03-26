/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length != t.length) {
        return false;
    }

    // Create array of 26 zeros to track character counts (a-z)
    let charCounts = new Array(26).fill(0);
    
    // For each character position in both strings:
    // Increment count for chars in s
    // Decrement count for chars in t
    // We subtract 97 to map 'a' to index 0, 'b' to 1, etc.
    for(let i = 0; i < s.length; i++){
        charCounts[s.charCodeAt(i) - 97]++;
        charCounts[t.charCodeAt(i) - 97]--;
    }

    // Check if all counts are 0
    // If any count is not 0, strings are not anagrams
    for(let count of charCounts){
        if(count !== 0){
            return false;
        }
    }

    // If we get here, all counts are 0 so strings are anagrams
    return true;

    // let map = new Map();
    // for(let char of s){
    //     map.set(char, (map.get(char) || 0) + 1);
    // }

    // for(let char of t){
    //     if(!map.has(char) || map.get(char) == 0){
    //         return false;
    //     }
    //     map.set(char, (map.get(char) - 1));
    // }

    // return true;

};
// @lc code=end

