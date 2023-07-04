function todo(task){
    setTimeout(function fun(){
        console.log("Task completed: "+ task);
    },3000)
}

console.log("starting");
todo("assignments");
console.log("Ending");