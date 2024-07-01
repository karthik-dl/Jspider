// console.log("Hii Reactjs");
// callback hell

function addition(val, callback) {
    return callback(val + 5, false)
}

function subtraction(val, callback) {
    return callback(val - 5, false)
}

function multiplication(val, callback) {
    return callback(val * 5, false)
}

function division(val, callback) {
    return callback(val / 5, false)
}

addition(10, (AddRes, error) => {
    console.log(AddRes);
    if (!error) {
        subtraction(AddRes, (subRes, error) => {
            console.log(subRes)

            if (!error) {
                multiplication(subRes, (mulRes, error) => {
                    console.log(mulRes)

                    if (!error) {
                        division(mulRes, (divRes, error) => {
                            console.log(divRes);
                        })
                    }
                })
            }
        })
    }
})



// ............Promises...........
// 1.pending  ex:
// let p1=new Promise((resolve, reject)=> {
// })
// console.log(p1);

// 2.fulfilled  ex:
// let p2=new Promise((resolve, reject)=> {
//     resolve("HI iam resolved")
// })
// console.log(p2);

 // 3.reject  ex:
// let p3=new Promise((resolve, reject)=> {
//     reject("Hi i am rejected")
// })
// console.log(p3);

// .........................................
//  instancs methods  then,catch,finally

// let p =new Promise((resolve,reject)=>{
//     let task=confirm("Have you completed your task?")
//     if(task){
//         resolve("good boyyy")
//     }
//     else{
//         reject("bad boyyyy")
//     }
// })
// p.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("hi i am executing");
// })

// ...............................................
// static methods

// let p1=new Promise((resolve,reject)=>{
//     resolve("Hi i am resolve 1")
//     reject("Hi i am reject 1")
// })


// let p2=new Promise((resolve,reject)=>{
//     resolve("Hi i am resolve 2")
//     reject("Hi i am reject 2")
// })

// let p3=new Promise((resolve,reject)=>{
//     resolve("Hi i am resolve 3")
//     reject("Hi i am reject 3")
// })

// let p4=new Promise((resolve,reject)=>{
//     resolve("Hi i am resolve 4")
//     reject("Hi i am reject 4")
// })

// let p5=new Promise((resolve,reject)=>{
//     resolve("Hi i am resolve 5")
//     reject("Hi i am reject 5")
// })

// Promise.all
// let res=Promise.all([p1,p2,p3,p4,p5]).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise.any
// let res=Promise.any([p1,p2,p3,p4,p5]).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise.allSettled
// let res=Promise.allSettled([p1,p2,p3,p4,p5]).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise.race  itb will returns single promises
// let res=Promise.race([p1,p2,p3,p4,p5]).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// or

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hi iam resolve q")
//     },1000)
//     setTimeout(()=>{
//         reject("Hi iam not resolve q")
//     },1000)
// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hi iam resolve 2 q")
//     },2000)
//     setTimeout(()=>{
//         reject("Hi iam not resolve 2 q")
//     },2000)
// })
// let result=Promise.race([p1,p2]).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// ...........................

// var aa1=true;
// var aa2=true;
// var aa3=true;
// let p1=new Promise((resolve, reject)=>{
//     if(aa1&&aa2&&aa3){
//         resolve("RCB will play");
//     }
//     else{
//         reject("RCB will not play");
//     }
// })
// p1.then((data)=>{
//     console.log(data);

//     console.log(error);
// })

// var bb1=true;
// var bb2=false;
// var bb3=true;
// let p2=new Promise((resolve, reject)=>{
//     if(bb1&&bb2&&bb3){
//         resolve("CSK will play");
//     }
//     else{
//         reject("CSK will not play");
//     }
// })
// p1.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// var cc1=true;
// var cc2=true;
// var cc3=true;
// let p3=new Promise((resolve, reject)=>{
//     if(cc1&&cc2&&cc3){
//         resolve("KKR will play");
//     }
//     else{
//         reject("KKR will not play");
//     }
// })
// p1.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// let result=new Promise((resolve, reject)=>{
//     if(aa1&&aa2&&aa3&&bb1&&bb2&&bb3&&cc1&&cc2&&cc3)
//     {
//         resolve("All teams are allowed to play");
//     }
//     else{
//         reject("practice well")
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// ..............................................................
// promises chaining
// let p=new Promise((resolve, reject)=>{
//     resolve(10)
// })
// p.then((msg)=>{
//     console.log(msg);
//     return msg+10
// }).then((msg)=>{
//     console.log(msg);
//     return msg*20
// }).then((msg)=>{
//     console.log(msg);
//     return msg/10
// }).then((msg)=>{
//     console.log(msg);
//     return msg-4
// }).then((msg)=>{
//     console.log(msg);
// })

// localStorage

// let name="Reactjs"
// localStorage.setItem("Subject", name)
// let data=localStorage.getItem("Subject")
// console.log(data);
// localStorage.removeItem("Subject")

// session storage

// let name ="Reactjs"
// sessionStorage.setItem("Subject",name)
// let data=sessionStorage.removeItem("Subject")
// console.log(data);
// let data=sessionStorage.getItem("Subject")
// console.log(data);


// let p= new Promise((resolve, reject) => {
//     let task=confirm("Are you sure you want to complete task")
//     if(task){
//         resolve("good boy")
//     }
//     else{
//         reject("bad boy")
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(() => {
//     console.log("done");
// })

// let m=new Promise((resolve,reject)=>{

// })