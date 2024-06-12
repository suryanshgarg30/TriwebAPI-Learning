function isTwoPassed(){
        if(Array.from(arguments).indexOf(2)>=0){
            console.log("yes 2 is passed to this function");
        }else{
            console.log("no 2 is not passed to this function");
        }
    }
    isTwoPassed(3);