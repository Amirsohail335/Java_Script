function fun(){
    return new Promise(function f(resolve, reject){
        setTimeout(function process(){
            console.log("resolved");
            resolve(123);

        }, 5000)
    })
}

let x = fun();

x.then(function exec(value){
    console.log("value is ", value);
    for(let i = 0; i <10000; i++){}
    return 100;
})


x.then(function exec2(value){
    console.log("value is ", value);
    for(let i = 0; i <10000; i++){}
    return 500;
})

