// 1.JavaScript Program To Print Hello World
    console.log("Hello world")

// 2.JavaScript Program to Add Two Numbers
    // let a=2;
    // let b=6;
    // console.log(a+b)

    // let add=(num1,num2)=>num1+num2
    // console.log(add(2,3));

// 3.JavaScript Program to Find the Square Root
    // let num=prompt("Enter the number")
    // let res=Math.sqrt(num)
    // console.log(res);

// 4.JavaScript Program to Calculate the Area of a Triangle
    // let baseValue=prompt("enter the area of the traingle basevalue")
    // let heightValue=prompt("enter the area of the traingle heightvalue")
    // let area=(baseValue*heightValue)/2
    // console.log(area);

// 5.JavaScript Program to Swap Two Variables
    // let a=prompt("Enter the a value")
    // let b=prompt("Enter the b value")
    // let temp
    // temp=a;
    // a=b;
    // b=temp;
    // console.log(`The value of a after swapping: ${a}`);
    // console.log(`The value of b after swapping ${b}`);

//6.convert kilometer to miles
// const kilometer=3 //prompt("Enter the kilometer")
// const factor=0.627371
// const miles=kilometer*factor
// // console.log( `The values of ${kilometer} kilometers is ${miles}`)
// console.log(miles);

// 7. convertion of celcious to fahrenheit
// const celcious=prompt("Enter the celcius value  ")
// const fahrenheit=(celcious*1.8)+32
// console.log(`the ${celcious} degree value of ${fahrenheit}`);

// 8.generate random numbers
// const a=Math.random()
// console.log(a);

// get random number from 1 to 10
// Math.random()*(heighestvalue-lowestvalue)+number
// const a=Math.random()*(10-1)+1
// console.log(a);

// generate integer value from 1 to 10
// const a=Math.floor(Math.random()*(10-1))+1
// console.log(`the integer value from 1to 10 is ${a}`);

// Integer value b/w two numbers
// const min=parseInt(prompt("Enter the min value:"))
// const max=parseInt(prompt("Enter the max value:"))
// const a=Math.floor(Math.random()*(max-min+1))+min
// console.log(`the random value of ${max} is ${min}is ${a}`);

// 9.check the number is positive ,negative or zero

// const number=parseInt(prompt("Enter the number"))
// if(number>0){
//     console.log("The number is positive");
// }
// else if(number==0){
//     console.log("The number is zero");

// }
// else{
//     console.log("The number is negative");
// }
// nested if
// const num=parseInt(prompt("Enter the number"))
// if(num>=0){
//     if(num ==0){
//     console.log("The number is zero");
//     }
//     else{
//         console.log("the number is positive");
//         }
//     }
//     else{
//     console.log("the number is negative");
// }

// check the number even or odd
// const num = prompt("Enter the number:")
// if(num%2==0){
//     console.log("The number is even");
// }
// else{
//     console.log("the number is odd");
// }

// ternary operator
const num=prompt("Enter the number")
const result=(num%2==0)?"even":"odd"
console.log(`the number is ${result}`);
