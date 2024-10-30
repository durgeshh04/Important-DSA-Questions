/*

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6


*/



function patternFour(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write(i.toString() + " ");
        }
        console.log();
        
    }
}

patternFour(6)





























