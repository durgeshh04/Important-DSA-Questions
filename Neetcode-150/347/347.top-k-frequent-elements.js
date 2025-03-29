/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    let bucket = [];
    for(let [num, freq] of map){
        if(!bucket[freq]){
            bucket[freq] = [];
        }
        bucket[freq].push(num);
    }

    let result = [];
    for(let i = bucket.length-1; i >= 0 && result.length < k; i--){
        if(bucket[i]){
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
};
// @lc code=end

