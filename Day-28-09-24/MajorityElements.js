// Majority Elements

/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

// Solution:


// Function to find the majority element in an array
var majorityElement = function(nums) {
    // Initialize the candidate as the first element
    let candidate = nums[0];
    // Initialize the count to 1
    let count = 1;
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If count becomes 0, reset candidate and count
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } 
        // If current element is same as candidate, increment count
        else if (nums[i] === candidate) {
            count++;
        } 
        // If current element is different from candidate, decrement count
        else {
            count--;
        }
    }
    
    // Return the majority element
    return candidate;
};

// Example usage

// const result = majorityElement([3, 2, 3]);
const result = majorityElement([2,2,1,1,1,2,2]);
console.log(result);

// This algorithm is known as Boyer-Moore Voting Algorithm
// It works on the principle that the majority element will always have a positive count at the end
// Time complexity: O(n), Space complexity: O(1)



