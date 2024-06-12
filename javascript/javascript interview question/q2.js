function printName(){
    console.log(`${this.firstName} ${this.lastName}`);
}

const student1={
    firstName:"suryansh",
    lastName:"Azhar",
};
const callItLaster=printName.bind(student1);
callItLaster();