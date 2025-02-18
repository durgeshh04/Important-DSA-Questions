class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Code Here
        
        let firstMax = -Infinity;
        let secondMax = -Infinity;
        
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > firstMax){
                secondMax = firstMax;
                firstMax = arr[i];
            } else if(arr[i] > secondMax && arr[i] < firstMax){
                secondMax = arr[i];
            }
        }
        
        return secondMax;
        
    }
}