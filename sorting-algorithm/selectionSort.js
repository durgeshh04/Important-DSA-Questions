function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i; j < arr.length - 1; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

let arr = [5, 3, 2, 10, 0, 1];
console.log(selectionSort(arr));