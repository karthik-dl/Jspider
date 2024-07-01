
// function Person(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }

// const lydia=new Person("Lydia","Hallie")
// const sarah=Person('Sarah','Smith')
// console.log(lydia);
// console.log(sarah);

// function sum(a,b){
//     return a+b
// }
// sum(1,'2')

// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(21)

// const obj={a:'one',b:'two',a:'three'}
// console.log(obj);

// for(let i=1;i<5;i++){
//     if(i===3) continue;
//     console.log(i);
// }

// function* generator(i){
//     yield i
//     yield i*2
// }
// const gen=generator(10)
// console.log(gen.next().value);
// console.log(gen.next().value);

const firstPromise=new Promise((res,rej)=>{
    setTimeout(res,500,'one')
});
const secondPromise=new Promise((res,rej)=>{
    setTimeout(res,100,'two')
})
Promise.race([firstPromise,secondPromise]).then
