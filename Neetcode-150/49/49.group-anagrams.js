/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let stringBuilder = (word) => {
    let charCount = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        charCount[word.charCodeAt(i) - 97]++;
    }
    // Convert array to string to use as a key
    return charCount.join('#');
}

var groupAnagrams = function (strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        // Generate key for anagram group
        let key = stringBuilder(strs[i]);
        if (!map.has(key)) {
            map.set(key, [])
        }
        // Store anagrams in array
        map.get(key).push(strs[i]);
    }

    return Array.from(map.values());

};
// @lc code=end

