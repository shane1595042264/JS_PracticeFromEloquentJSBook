function isEven(num){

    if (num < 0){
        num = Math.abs(num);
        return isEven(num);
    }
    else if(num === 1){
        return false;
    }
    else if ( num === 0){
        return true;
    }
    else{
        return isEven(num-2);
    }
}

console.log(isEven(-16));