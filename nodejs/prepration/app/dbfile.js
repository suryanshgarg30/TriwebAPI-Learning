const{myEventEmitter,LOGIN_EVENT}=require("./event file");

myEventEmitter.on(LOGIN_EVENT,(userName)=>{
    console.log("Writing in db for user:",userName);
});