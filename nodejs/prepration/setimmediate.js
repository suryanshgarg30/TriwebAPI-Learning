let  a =1;
let b=2;
function addTwoNumber(n1,n2){
    console.log(n1+n2)
}

setImmediate(()=>{
    addTwoNumber(a,b)
});

console.log("Inside event loop 1");