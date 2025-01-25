var maxSubArray = function(nums) {
    let runningMax = -Infinity, max = -Infinity;
    for(let num of nums){
        runningMax = Math.max(num, num + runningMax);
        max = Math.max(max, runningMax);
    }
    return max;
};