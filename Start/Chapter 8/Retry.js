
// class MultiplicatorUnitFailure extends Error {}
// the question asks for a type, which is a class then. 
function primitiveMultiply(a, b) {
    let r = Math.random();

    if (r <= 0.2) {
        return a*b;
    }

    else{
        throw new Error("Error: MultiplicatorUnitFailure");
    }
}
for(;;){
try{
    console.log(primitiveMultiply(3, 4));
}
catch(e){
    console.log("Error: MultiplicatorUnitFailure");
}
}