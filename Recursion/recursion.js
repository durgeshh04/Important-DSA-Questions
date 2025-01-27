function pd(n){
    if(n < 0){
        return ;
    }

    console.log(n);
    pd(n-1);
}

pd(5);