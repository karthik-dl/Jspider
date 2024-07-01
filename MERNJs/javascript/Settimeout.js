// & setTimeout --it will executes takes 2sec after o/p will display

// setTimeout(()=>{
//     console.log("Hi i am setTimeout1");
// },2000)

// setTimeout(()=>{
//     console.log("Hi i am setTimeout2");
// },4000)

// setTimeout(()=>{
//     console.log("Hi i am setTimeout3");
// },6000)
// setTimeout(()=>{
//     console.log("Hi i am setTimeout4");
// },8000)

// function demo(){
//     setTimeout(() => {
//         console.log("HI iam function setTimeout");
//     },10000);
// }
// demo()

// .........................................................................

// & first log statement executes after that  because it is current task n heighset priority
// console.log("first");
// console.log("second")
// setTimeout(()=>{
// console.log("I am the setTimeout");     //this is the call stack so that it will executes last
// })
// console.log("stop");

// function demo(){
//     setTimeout(()=>{
//         console.log("HI iam function setTimeout");
//     },0)
// }
// demo()
// console.log("Hi aim current task");
// ........................................................


// && setInterval

// var stop=setInterval(()=>{
//     console.log("Hi iam Karthik");
//     clearInterval(stop)
// },2000)

// =================================================================
var i=0;
setInterval(()=>{
    console.log("Hi i am SetInterval");
    i++;
    if(i==10){
        window.open("https://www.who.int/")
    }
},2000)