console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 is done");
}, 0)

for(let i = 0 ; i < 1000000 ; i++){

}


let x = Promise.resolve("Sanket's Promise");

x.then(function processPromise(value){
    console.log("Whose's promise" , value)
})

setTimeout(function timer2(){
    console.log("Timer 2 is done");
}, 0);

console.log("End of the file");