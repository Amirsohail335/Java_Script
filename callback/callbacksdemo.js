function fun(x , fn){

    //some logic

    for(let i = 0 ; i<x; i++){
        console.log(i);
    }
    fn();
}

fun(10 , function log() {
    console.log("Custome logger");
})


