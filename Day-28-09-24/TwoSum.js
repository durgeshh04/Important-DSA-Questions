// Topic: Two sum

/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]




*/


var twoSum = function(nums, target) {
    // Create an empty object to store numbers and their indices
    let map = {};
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement (the number needed to reach the target)
        let complement = target - nums[i];
        
        // Check if the complement exists in our map
        if (complement in map) {
            // If it does, we've found our pair, so return their indices
            return [map[complement], i];
        }
        
        // If not found, add the current number and its index to the map
        map[nums[i]] = i;
    }
    
    // If no solution is found, return an empty array
    return [];
};

// Test the function
const output = twoSum([2,7,11,15], 9);
console.log(output);
