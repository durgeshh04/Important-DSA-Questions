function pivotSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else{
            right.push(arr[i]);
        }
    }

    return [...pivotSort(left), pivot, ...pivotSort(right)];

}


let arr = [6, 1, 10, 3, 9, 5];
console.log(pivotSort(arr));