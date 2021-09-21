let countBs = (Bean)=>{
    n = 0;
    if(typeof(Bean)!== 'string'){
        return null;
    }
    else{
        for(let i =0; i<Bean.length; i++){
            if(Bean[i] === 'B'){
                n++;
            }


        }
    }
    return n;
}

let countChar = (Ch, c)=>{
    n = 0;
    if(typeof(Ch)!== 'string'){
        return null;
    }
    else{
        for(let i =0; i<Ch.length; i++){
            if(Ch[i] === c){
                n++;
            }


        }
    }
    return n;
}

console.log(countChar('We are WWC', 'W'));
