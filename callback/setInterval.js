let x = setInterval(function(){

    console.log("Set interval is created") 

},3000)

setTimeout(function (){
    clearInterval(x)
},7000)