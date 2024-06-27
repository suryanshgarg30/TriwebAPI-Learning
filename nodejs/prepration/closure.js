const outerFunction=()=>{
    sommeVariable=34;
    return innerFunction=()=>{
       return sommeVariable;
    };        //  
}
const xyz=outerFunction();
console.log(xyz());

const generatorPowerFunction=(power)=>{
    return(number)=>{
        return number**power;
    };
}
const square=generatorPowerFunction(2);
const cube=generatorPowerFunction(3);
const quad=generatorPowerFunction(4);

console.log(square(2));
console.log(cube(3));
console.log(quad(4));