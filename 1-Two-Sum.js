var twoSum = function(nums, target) {

   let map = new Map();

   for(let i = 0; i < nums.length; i++){
    let pairValue = target - nums[i];

    if(map.has(pairValue)){
        return [map.get(pairValue), i];
    }

    map.set(nums[i], i);

   }

};

// console.log(twoSum([2,7,11,15], 9));