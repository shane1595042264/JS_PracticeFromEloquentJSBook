function every_loop(array, test) {


for(let i = 0; i < array.length; i++){
    if(test(array[i])==false){
        return false
    }
}
return true

}

function every_some(array, test) {

return !array.some(i => !test(i))

}

  
  console.log(every_some([1, 3, 5], n => n < 10));
  console.log(every_some([], n => n < 10));
  console.log(every_some([2, 4, 16], n => n < 10));