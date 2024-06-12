Array.prototype.last=function(){
    return this.length===0? -1: this[this.length-1]
}
const arr=[11,64,36]
console.log(arr.last());
