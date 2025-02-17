function merge(left, right){
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx] < right[rightIdx]){
            result.push(left[leftIdx]);
            leftIdx++;
        } else{
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }

    // while(leftIdx < left.length){
    //     result.push(left[leftIdx]);
    //     leftIdx++;
    // }

    // while(rightIdx < right.length){
    //     result.push(right[rightIdx]);
    //     rightIdx++;
    // }

    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

function mergeSort(arr){
    
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

let arr = [90, 7, 0, 1, 32, -2];
console.log(mergeSort(arr));