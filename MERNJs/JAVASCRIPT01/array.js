// let array=[10,20,30]
// console.log(array)
//push()
// array.push(12)
// console.log(array);

//pop()
// console.log(array.pop())
// console.log(array)

//shift()
// console.log(array.shift())
// console.log(array);

//unshift()
// array.unshift(23)
// console.log(array);

//ways to creat an array
// let array=[1,2,3]
// let obj={}
// console.log(array);
// console.log(array.isArray(obj))

//let array=new Array("hi")
//console.array(array)

//let array=array.of(1)
//console.log(array)

//let array=Object.assign

//slice()
 let array=[10,20,30,40,50,60,70,80]
 console.table(array.slice(0,5))

//splice()  it will affect on original array
// console.table(array.splice(0,3,"hi"))
// console.log(array)

// let result=array.map((m)=>{
    // return m
// })
// console.log(result)
// console.log(array.map((m)=> m+20))
// array.forEach((index,val)=>{
//     console.log(index)
// })


//for of array means display the values
// let array=[10,20,30,40,50,60,70,80]
// //for(let i of array)
// {
//     console.log(i)
// }
// //  for in array it will display the index values
// for(let i in array)
// {
//     console.log(i)
// }

// let array=[10,20,30,40,50,60,70,80]
// console.log(array.find(m=>m>20));      //find method  it will display the first value
// console.log(array.filter(m=>m>20));       //filter method condition satisfy


//some and every  it will give boolen result
// let array=[10,20,30,40,50,60,70,80]
// console.log(array.some((m)=>m>20)); //some conditios are satisfy
// console.log(array.every((m)=>m>20)); //every conditions are not satisfy

//OBJECTS
// let obj={
//     name:'vivek',
//     id:420,
//     salary:20000,
//     company:"IBM"

// }
// console.log(obj);

//2nd constructor function
// function demo(name,id,salary,company)
// {
//     this.name = name;

//     this.id = id;
//     this.salary = salary;
//     this.company = company;
// }
// let obj1=new demo('Alluarjun',420,20000,'ibm')
// let obj2=new demo('Darshan',422,21000,'ibm')
// let obj3=new demo('Sudeep',423,20300,'ibm')
// let obj4=new demo('yesh',424,20004,'ibm')
// let obj5=new demo('Vijay',425,20050,'ibm')
// let result=[obj1,obj2,obj3,obj4,obj5]
// console.log(result);
// let result1=result.map(m=>{
//     return m.name;

// })
// console.log(result1);

//3rd way to cteat object
var assignment={}
var student=object.creat(assignment);
student.marks=100;
student.remarks="good";

//4th way
// let obj=Object.create({Name:"karthik"})
// console.log(obj);

//5th way
// let obj=new Object({Name:"Reactjs"})
// console.log(obj);

//6th way
// let obj=Object.defineProperty({},'name',{value:'Reactjs'})
// console.log(obj);
// let obj1=Object.defineProperty({},{
//     'Name':{value:'Reactjs'},
//     "id":{value:'420gg'}
// })
// console.log(obj1);

// let obj={
//     Name:'Karthi',
//     id:"421",
//     salary:"40cr",
//     company:"Dcompany"
// }
// console.table(obj);
// obj.Name = 'Deppu';
// console.table(obj);
// delete obj.Name;
// console.table(obj);



// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// // let obj1=Object.assign([], obj);
// console.log(obj);


// obj.Name = 'Karthi';
// console.log(obj);
// console.log(Object.freeze(obj));
// obj.Name = 'Karthi';
// console.log(obj);
// delete obj.Name
// console.log(obj);
// obj.state='karnataka'
// console.log(obj);
// console.log(Object.isFrozen(obj));


// console.log(Object.seal(obj));
// obj.Name="vivek";
// console.log(obj);
// obj.state="Karnataka";
// console.log(obj);
// delete obj.Name
// console.log(obj);
// console.log(Object.isSealed(obj))

// CLONING
// COPY OF AN OBJECT 1st to 6th way
// let obj ={
//     Name:'Abhishek',
//     id:"420",
//     salary:"50cr",
//     company:"IBM"

// }
// console.log(obj);

// //1st
// let b=obj;
// console.log(b);

// //2nd
// let c={...obj}
// console.log(c);

// //3rd
// let d=Object.assign({},obj)
// console.log(d);

// //4th 
// let e=new Object(obj)
// console.log(e);

// //5th
// let {...f}=obj;
// console.log(f);

// //6th
// let x={}
// for(let i in obj){
//     x[i]=obj[i]
// }
// console.log(x)

//cloning
// let obj={
//     Name:'yesh'
// }

// console.log(obj);
// let obj1=Object.assign({},obj)
// console.log(obj1);
// obj1.Name='Abhi'
// console.log(obj1)
// console.log(obj);

//1st Object.assign()
// let obj1=Object.assign({},obj)
// console.log(obj1);
// obj1.Name='Abhi'
// console.log(obj1)
// console.log(obj);

//2nd rest

//3rd
// let obj1=new Object(obj)
// console.log(obj1);
// obj1.Name="Abhishek"
// console.log(obj1)
// console.log(obj);
// console.log(obj==obj1)

//4th
// var x={}
// for(let x in obj) {
//     x[keys]=obj[keys]
// }
// console.log(x);
// x.Name="Abhishek"
// console.log(x);
// console.log(obj);
// console.log(obj == x);

// ........................................................................................................

// let obj={
//     Name:'Shubhash',
//     id:'232',
//     salary:'25k',
//     company:'Test vantra',
//     address:{
//         city:'Hassan',
//         state:'Karnataka',
//         pincode:'573201'
//     }
// }
// console.log(obj);
// let {...obj1}=obj
// console.log(obj1)
// obj1.address.city='Hubli'
// obj1.address.state='kerala'
// console.log(obj1);     //shallow copy we have to change the multiple objects in nested object and it will affect only nested object 

//1st
// let obj1=JSON.parse(JSON.stringify(obj))
// console.log(obj1);
// obj1.address.city='Andra'
// console.log(obj1);
// console.log(obj);    //deep copy


// 2nd
// let obj1=structuredClone((obj))
// console.log(obj1)
// obj1.address.city='Kolakata'
// console.log(obj1)
// console.log(obj)     //deepcopy the there is  no relation 


// ......................................................................................

//prototype inheritance
// let obj={
//     Name:'Vijay',
//     id:'123',
//     company:'Yellow.ai',

// }
// let obj1={
//     Address:{
//         city:'Bangalore',
//         state:"Karnataka"
//     }
// }
// obj1.__proto__=obj;
// obj1.__proto__.__proto__={city:'Kolakata'}
// obj1.__proto__.__proto__.__proto__={state:'Kerala'}
// console.log(obj1);

// ......

// function demo(Name,id,salary){
//     this.Name=Name;
//     this.salary=salary;
//     this.id=id;
// }
// let e1=new demo('Reactjs','20k',234)
// console.log(e1);
// demo.prototype={State:"Karnataka"}
// console.log(e1);
// ...........................


// without passing parameter we can get output by (passing arguments,[indexvalue])
// function demo(){
//     console.log("hi")
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }demo('Reactjs',123)
// ..........................................


// let array=[10,20,30,40,50,60]
// console.log(array);
// // let [a,b,c,d,e,f]=array;
// // console.log(a);
// // console.log(b)
// let [a,b,...d]=array      //we cannot use [a,...b,d]because its showing error --A rest element must be last in a destructuring pafttern
// console.log(a)
// console.log(b);  
// console.log(...d);

// .......................................

// function demo(a,b,c,d,e,f) {
//     console.log(a)
//     console.log(b)
//     // console.log(...c);
//     console.log(c);    // error:spread syntax requires ...iterable  so this is wrong method  we do in array form output will display
// }
// demo(10,20,30,40,50)


// function demo(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(...c)
// }demo(10,20,[10,20,30,40,45,5060])
// ..............................................

// let obj={
//     Name:'Reactjs',
//     id:"143",
//     salary:"10cr",
//     address:{
//         city:"Bangalore"
//     }
// }
// console.log(obj);
// let[Name,...id]=obj
// console.log(Name);
// console.log(...id);
// ...............................................
