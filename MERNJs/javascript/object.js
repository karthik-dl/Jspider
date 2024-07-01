// && Objects
// & object is a real world entity we can store the data in the form of keys and values pair

// & object literal  1
// let obj={
//     Name:"Ram",
//     id:123,
//     salary:"1cr"
// }
// console.log(obj);

// & update the object value

// obj.Name="Krishna"
// console.log(obj);
// obj.salary="2cr"
// console.log(obj);

// & Delete the object
// delete obj.Name
// console.log(obj);

// &Insert
// obj.city="Ayodya"
// console.log(obj);

// & 2nd way to create an object i.e Object.create()
// let obj=Object.create({name:"Karthik",id:"123",salary:"25k"})
// console.log(obj);

// & 3rd way to create an object using new keyword
// let obj=new Object({name:"Karthik",id:"123",salary:"20k"})
// console.log(obj);

// & 4th way to create an object using Object.assign({},{pass keys n values})
// let obj=Object.assign({},{name:"Karthik",id:"123",salary:"23k"})
// console.log(obj);

// convert object to array
// let obj1=Object.assign([],{name:"Karthik",id:"123",salary:"23k"})
// console.log(obj1);

// convert array to object
// let array=[2,3,4]
// let obj2=Object.assign({},array)
// console.log(obj2);

// &&5th way constructor function
// function obj(Name, id, salary, company) {
//     this.Name = Name
//     this.id = id
//     this.salary = salary
//     this.company = company
// }
// let obj1=new obj("Ram",123,20000,"TCS")
// console.log(obj1);
// let obj2=new obj("Sita",124,22000,"IBM")
// console.log(obj2)
// let obj3=new obj("Ravana",125,24000,"HCL")
// console.log(obj3)
// let obj4=new obj("Hanuman",126,25000,"TECH")
// console.log(obj4)

// let result=[obj1,obj2,obj3,obj4]
// console.log(result);
// result.map(m=>{
//     console.log(m.Name,m.id,m.salary,m.company);
// })
//  .............................// imp question
// function obj(Name, id, salary, company) {
//     this.Name = Name
//     this.id = id
//     this.salary = salary
//     this.company = company
// }
// let obj7=new obj("Ram",123,20000,"TCS")
// console.log(obj1);
//  if we don'it use new keyword ans is undefined
// let obj8= obj("Sita",124,22000,"IBM")
// console.log(obj8) // undefined

// && 6th way Object.defineproperty  we can pass only one key n value -we have to creat one object
// let obj=Object.defineProperty({},"Name",{
//     value:"karthik",
// })
// console.log(obj);
// &&7th way Object.defineproperties()  here we have to create multiple object
// let obj1=Object.defineProperties({},{
//     "Name":{
//         value:"karthik",
//     },
//     "ID":{
//         value:"K23"
//     },
//     "Salary":{
//         value:20000
//     }
// })
// console.log(obj1);

// && 8th way structuredClone({})
// let obj=structuredClone({Nmae:"Karna",id:143})
// console.log(obj);

// .......................................................................................

// !........................Object methods...............................
// &&1.Object.keys()----it will returns the keys in the form of array
// let obj={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// console.log(obj);
// console.log(Object.keys(obj));
// ...........................

// &&2.Object.values()---it will returns the values in the form of array
// let obj1={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// console.log(obj1);
// console.log(Object.values(obj1));
// ...........................

// &&3.Object.entries()---it will returns the both keys n values in the form array
// let obj2={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// console.log(obj2);
// console.log(Object.entries(obj2));
// ............................

// !........ copy of an object...........

// &&1st way
// let obj1={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// console.log(obj1);
// let obj2=obj1;
// console.log(obj2);

// ...........................

// &&2nd way
// let obj1={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// let obj2=Object.assign({}, obj1)
// console.log(obj2);
// ...........

// &&3rd way
// let obj1={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// let obj2=new Object(obj1)
// console.log(obj2);
// ................

// &&4th way
// let obj1={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// let {...obj2}=obj1
// console.log(obj2);
// ! we have to pass (...) three dots inside the parameter i.e rest parameter
// ! we have to pass (...) three dots inside the console statement i.e spread operator
// ..................

// &&5th way
// let obj1={
//     Name:"Karthi",
//     id:222,
//     salary:20000
// }
// let obj2=structuredClone(obj1)
// console.log(obj2);

// ......................

// && 6th way
// let obj={
//     Name:"Naveen",
//     id:232,
//     salary:"2cr"
// }
// console.log(obj);
// var x={}
// for(let i in obj){
// x[i]=obj[i]
// }
// console.log(x);
// ...............................

// !cloning of the object
// let obj={
//     Name:"Naveen",
//      id:232,
//      salary:"2cr"
// }
//  console.log(obj);
// let obj2=obj;
// console.log(obj2);
// obj2.Name="Karthi"
// console.log(obj2);
// console.log(obj);
// console.log(obj == obj2);

// & Object.assign()

// let obj={
//     Name:"Naveen",
//      id:232,
//      salary:"2cr"
// }
//  console.log(obj);
//  let obj2=Object.assign({},obj)
//  console.log(obj2);
//  obj2.Name="Karthi"
//  console.log(obj2);
// console.log(obj);
// console.log(obj2==obj);

// ..............................

// &rest parameter
// let obj={
//         Name:"Naveen",
//          id:232,
//          salary:"2cr"
//     }
//     console.log(obj);
//     let {...obj2}=obj;
//     console.log(obj2);
//     obj2.Name="Karan"
//     console.log(obj2);
//     console.log(obj);
//     console.log(obj==obj2);

// .......................

// & cloning
// let obj={
//     Name:"Naveen",
//      id:232,
//      salary:"2cr"
// }
// console.log(obj);
// var x={}
// for(let i in obj){
//     x[i]=obj[i]
// }
// console.log(x);
// x.Name="Karna";
// console.log(x);
// console.log(obj);
// console.log(obj==x);
// ............................

// ! Shallow copy

// let obj={
//     Name:"Karna",
//     id:"143",
//     salary:"5cr",
//     address:{
//         city:"Hassan",
//         state:"Karnataka"
//     }
// }
// console.log(obj)
// let obj2=Object.assign({},obj);
// console.log(obj2);
// obj2.Name="Karthi";
// console.log(obj2);
// console.log(obj);
// obj2.address.city="Alur";
// console.log(obj2);
// console.log(obj);

// ......................................
// ! Deep copy

// let obj={
//     Name:"Karna",
//     id:"143",
//     salary:"5cr",
//     address:{
//         city:"Hassan",

//         state:"Karnataka"
//     }
// }
// console.log(obj)
// let obj2=JSON.stringify(obj)
// console.log(obj2);;
// let obj3=JSON.parse(obj2)
// console.log(obj3);
// obj3.address.city="Kolkata";
// console.log(obj3);
// console.log(obj);

// & JSON.stringify() and JSON.parse()
// let obj2=JSON.parse(JSON.stringify(obj));
// console.log(obj2);
// obj2.address.city="Kolkata";
// console.log(obj2);
// console.log(obj);

// & 2nd

// let obj2=structuredClone(obj);
// console.log(obj2);
// obj2.address.city="Kolkata";
// console.log(obj2);
// console.log(obj);

// ............................................

// !Time methods...........................

// let x= new Date();
// console.log(x);
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getDay());
// console.log(x.getFullYear(),x.getMonth(),x.getDay());
// console.log(`${x.getHours()}Hrs ${x.getMinutes()}Min ${x.getSeconds()}sec`);
// console.log(x.getMilliseconds());

// var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// console.log(day[x.getDay()]);

// ....................................................

// ! && Math Objects....................

// &Math.floor()
// console.log(Math.floor(3));
// console.log(Math.floor(3.4));
// console.log(Math.floor(3.99));
// console.log(Math.floor(-3.5));

// // &Math.ceil()

// console.log(Math.ceil(2.2));
// console.log(Math.ceil(2.9));
// console.log(Math.ceil(-3.3));
// console.log(Math.ceil(-4.9));
// console.log(Math.ceil(5));

// // & Math.abs()

// console.log(Math.abs(-3));
// console.log(Math.abs(-2.22));

// // &Math.trunc()
// console.log(Math.trunc(3.22));
// console.log(Math.trunc(-4.22));

// // &Math.round()

// console.log(Math.round(-4.22));
// console.log(Math.round(7.8));

// // &Math.sign()
// console.log(Math.sign(-2.22));
// console.log(Math.sign(4));
// console.log(Math.sign(0));
// console.log(Math.sign(-2));
// console.log(Math.abs(null));

// & Math.random here this way we use to generate otp also
// console.log(Math.floor(Math.random()*(200-100)+100));


// var string="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let copy=""
// var len=string.length
// for(let i=0;i<3;i++){
//     copy += string[Math.floor(Math.random()*len)]
// }
// console.log(copy);

// let a = "global";
// const b = "script";
// function gp() {
  
//   console.log(b);
//   let c = "str";
//   const d = "sp";
//   function p() {
//     console.log(c);
//     console.log(d);
//     console.log(a);
//   }
//   return p();
// }
// gp();
