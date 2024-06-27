function* getNum2(index){
    while(index<5){
        yield index;
        index++;
    }
}
let itt =getNum2(0);
console.log(itt);//Object [Generator] {}

function* getNum3(index){
    while(index<5){
        yield index;
        index++;
    }
}
let ittt =getNum3(0);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().value);
console.log(ittt.next().done);