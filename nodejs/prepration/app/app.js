const dbfile=require("./dbfile");

const{myEventEmitter,LOGIN_EVENT}=require("./event file");
const{loginSuccessful}=require("./login");
loginSuccessful("suryansh");

myEventEmitter.on(LOGIN_EVENT,(userName)=>{
    console.log("sending email to  user:",userName);
});