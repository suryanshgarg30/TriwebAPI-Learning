let arr=[1,2,3,4,5,6,7,8,9,10]
let newArr2=[]
for (let i =0; i<8;i++){
    console.log(arr[i]);
}

console.log("...................");

for (let i =0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log("..................................................");

for (let i =0; i<8;i++){
    newArr2.push(arr[i]*2);
}
console.log(newArr2);   
console.log(".......................using map...........................");

let newArr3=arr.map((element)=>element*2);
console.log(newArr3);