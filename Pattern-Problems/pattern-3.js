/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6


*/



function patternThree(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write(j.toString() + " ");
        }
        console.log();
        
    }
}


patternThree(6)


















