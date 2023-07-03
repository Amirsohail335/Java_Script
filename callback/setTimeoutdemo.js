let x1 = setTimeout(function expression1() {
    console.log("Task one has completed");
}, 3000)



let x2 = setTimeout(function expression2(){
    console.log("Task two has completed")
    clearTimeout(x1)
}, 5000)