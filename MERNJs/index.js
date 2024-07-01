//variables and data types
// three data types are var ,let,const  //variable keywords
//in var we can initialize what ever you wont
// var x=20;
//  x=30; //only re-initialization is possible
// var x=4;//re-declaration
// console.log(x);

// let y=30;
//  y=23; //only re-initialization possible
//  console.log(y);

// const z=10;
// console.log(z);
// var a=3;
// console.log(a*a);


/* methods or functions
function square(x){
    // console.log(x**2);
    return x**2
}
let res=square(20);
console.log(res);*/

// Decisionmaking statements-if,ifelse,if-else-if,switch
/*if(true){
    console.log("hello");
}
     else{
            console.log("hi");
        }*/

function largest(x,y,z){
if(x>y  && x>z){

    console.log("x is greater");
}
else if(y>z){
    console.log("y is greater");
}
else{
    console.log("z is grater");
}
largest(31,31,5);
}