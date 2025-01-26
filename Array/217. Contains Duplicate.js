/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set();
  
  for(let el of nums){
    if(set.has(el)) return true;
    set.add(el);
  }

  return false;
};

console.log(containsDuplicate([1,2,3,1]));