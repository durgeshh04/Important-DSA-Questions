function reverseString(str){
    let stk = [];

    for(let char of str){
        stk.push(char);
    }

    let revStr = '';
    while(stk.length > 0){
        revStr += stk.pop();
    }

    return revStr;
}

console.log(reverseString('traxcn'));