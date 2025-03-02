class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // code here
        let max = -Infinity;
        for(let i = 0; i < arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
        }
        return max;
    }
}