function nthFibonacci(n){
    // let a = 0;
    // let b = 1;
    // let c = 0;
    // console.log(a); 
    // console.log(b); 
    
    // for(let i = 2; i <= n; i++){
    //     c = a + b;
    //     console.log(c);
    //     a = b;
    //     b = c;
    // }


    // fibonacci using recursion
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }

    return nthFibonacci(n-1) + nthFibonacci(n-2);

}

let n = 4;
let result = nthFibonacci(n);
console.log(result);