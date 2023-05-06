var teacher = "Sanket";
function fun() {
  var teacher = "Pulkit";
  ta = "vibhav";
  console.log(teacher);
  console.log(ta);
}

fun();
console.log(teacher); // if function will be in middle then scope of fun will change
console.log(ta);
