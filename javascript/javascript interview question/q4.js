function getNextDate(){
    let date =this.getDate();
    return date +1;
}

let myDateInstance=new Date(); 
Date.prototype.getNextDate =getNextDate;

const nextDate=myDateInstance.getNextDate();
console.log(`next date is ${nextDate}`);

let myDateInstance1=new Date();
