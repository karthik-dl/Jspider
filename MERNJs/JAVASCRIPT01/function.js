// 1.Ananumous funtions
// console.log("hi")
// let demo=function(){
//     console.log("hi i am Ananymous function");
// }
// console.log(demo());  dont't written two return statement
// demo()
// .............................

// 2.named function

// function demo1(){
//     console.log("hello I am the named function")
// }
// demo1()
// .............................

// 3.HOF function
// A function which take another function as an argument is known as HOF
// 4.callback function
// A function which is passed as a value to another function is known as callback function
// function HOF(){
//     console.log("hii i am HOF");
// }
// HOF(callback())

// function callback(){
//     console.log("Hi I am callback function");
// }
// ..................................
// 5.callback function
// function operation(a,b,cb){
//     return cb(a,b)
// }
// let result = operation(10,3,(a,b) =>a+b)
// let result1=operation(10,4,(a,b) =>a-b)
// console.log(result)
// console.log(result1);

// .....................................

// 6.Generator function
// function* generator(){
//     console.log("Hi i am generator function");
//     console.log("Hi i am generator function");
//     console.log("Hi i am generator function");

//     yield;
//     console.log("Hi i am next generator function");
//     console.log("Hi i am next generator function");
//     console.log("Hi i am next generator function");
//     yield;
//     console.log("Hi i am next generator function");
// }
// let a=generator();
// a.next()
// a.next()
// a.next()
// .........................................

// 7.IIFe function
// (function(){
//     var a=100;
//     console.log(a);
// })();

// function IIFe(){
//     console.log(a);
//     console.log("Hi I am IIFe")
// }
// IIFe()
// ..........................................

// arity
// function demo(a,b){
//     let x= demo.length;
//     console.log(x);
//     if(x==1){
//         console.log("Hi i am unary");  //if u pass one parameter i.e unary arity
//     }
//     else if(x==2){
//         console.log("Hi i am Binary");  //if u pass two parameter i.e binary arity
//     }
//     else{
//         console.log("Hi i am ternary"); //if u pass more than two parameter i.e ternary arity
//     }

// }
// demo()
// ................................................


// .....way of creating Strings......3 ways literal,String keyword,new keyword
// let str="hii"
// console.log(str)
// let str1='hii'
// console.log(str1);
// let str2=`Hii`
// console.log(str2);

// let str4=String("hi")
// console.log(str4)

// let str5=new String("hiii")
// console.log(str5)

// .....................................
// asysnchronus
// console.log("first")
// console.log("second")
// console.log("third")
// console.log("fourth")
// console.log("five")
// setTimeout(()=>{
//     console.log("hello");
// },1000)
// console.log("hii Reactjs");
// ...........................

//window.fetch returns the promise
// How to convert Asyschronus function to Synchronus function
// ans
// console.log("HI i am first");
// console.log("Hi i am second");
// console.log("Hi i am third");
// let data=window.fetch()
// console.log(data)
// data.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     alert(error)
// })
// console.log("Hi i am fourth");
// setTimeout(()=>{
//     console.log("Hi iam setTimeout");
// })
// ............................

// .............promise.................two types methods 1.static  2.instance
// callback hell 
let x1 = new Promise((resolve, reject) => {
    let isCompleted = confirm("work is completed or not")
    if (isCompleted) {
        resolve("hi iam resolve")
    } else {
        reject("hi iam reject")
    }
})
console.log(x1)
x1.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
// ..................

// ..........pendings.................
// let x1= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("hi i am resolved")
//         reject("hi i am rejected")
//     },1000)
// })
// console.log(x1);

// async function demo() {
//     let data = await fetch("https://dummyjson.com/products")
//     console.log(data);
//     // let finaldata = await data.json()
//     // console.log(finaldata);
//     // finaldata.map((m) => {
//     //     console.log(m.products.title);
//     // })
    
// }
// demo()

// function operation(){
//     console.log("hI i am operation");
// }
// operation(dem())

// function dem(a,b,cd){
//     return cd(a,b)
// }
// let res= dem(10,2,(a,b)=>a+b)
// console.log(res);