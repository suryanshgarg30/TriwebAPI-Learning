function add(callby,n1,n2){
    console.log(callby,":",n1+n2);
}


setImmediate(()=>{
    add("setImmediate",2,3);         
})
setTimeout(()=>{
    add("setTimeout",3,3);          
},0);
add("Direct",1,2);