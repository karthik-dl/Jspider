// map method   used to itirate the array value and its higher order method and we do operations also
// let a=[10,20,30,40,50]
// console.log(a);
// let res=a.map((m,i)=>{   //m is array values n i is index values
//     // console.log(m+20);
//     console.log(i,m);       //we have to pass index position also
// })
// ...............

// 2nd method to itirate array value is foreach
// let array=[10,20,30,40,50]
// array.forEach((val,key)=>{
//     console.log(key,val);
// })
// ................

// how we convert multidimentional array to single dimesional array

// 3rd array.entries() using this we have to itirate array values

// let array=[10,20,30,40,50]
// let res=array.entries()
// for(let i of res)
// {
//     console.log(i);
// }
// .................

// 4th for of loop used to itirate the array.values
// let array=[10,20,30,40,50,60]
// let res=array.values()
// for(let i of res)
// {
//     console.log(i);
// }
// ....................

// 5th array.keys() using this we have to itirate key values
// let array=[10,20,30,40,50,60]
// let res=array.keys()
// for(let i of res)
// {
//     console.log(i);
// }
// ................

// let array=[10,20,30,40,]
// console.log(array)
// console.log(array.reverse());   //it will reverse the array

// let array = [10,20,30,40,50,60]
// let res=array.at(-5);           // it wii give the index position value
// console.log(res);
// ...........................

// array.reduce()
// let array=[1,2,3,4,5]
// let res=array.reduce((Acc,val)=>{
//     return Acc-val
// })
// console.log(res);

// ..........................

//array.sort()
// let array=[1000000,2,3,4,5]
// let res=array.sort((a,b)=>a-b) //a-b ascending to descending. if we use b-a i.e descending to ascending
// console.log(res);
// ...........................


// some n every returns the boolean value

// array.some()
// let array=[10,20,30,40,50]
// let res=array.some((f)=>{    //it will check any one of the element
//     return f>20
// })
// console.log(res);
// ..........................

// array.every()
// let array=[1,2,3,4,5]
// let res=array.every((f)=>{      //it will check the each n every element
//     return f>20
// })
// console.log(res);
// ............
// 
// array.join()  when we want comma that time we use array.join methods n pass 
// let array=[10,20,30,40,50]
// console.log(array.join("hi"+" "));
// ..................................................

// scope we have three types of scopes global n script scope,
// Global scopes n script scopes

// global
// var a=100
// console.log(a);

// script scope
// let b=200
// console.log(b);
// const c=300
// console.log(c)

// block scope
// if you declare anything by using var/let/const keyword outside of block scope
//  you can access inside the block scope


// if you declare anything byb using var/let/const keyword inside of block scopes
// you can access only var keyword from the block scope

// var d=5;
// let e=10;
// const c=8;
// {
//     var a=100;
//     console.log(a);
//     let b=200;
//     console.log(b)
//     console.log(d)
//     console.log(e);
// }
// console.log(a);
// console.log(b);

//
//function scope or local scope
// var d=40;
// let e=200;
// const f=900;
// function demo(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(d);
//     console.log(e);
//     console.log(f);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// demo()
// console.log(a);
// .....................................


// String
// let str="hello"
// console.log(str);
// let str1='hello'
// console.log(str1);
// let str2=`hello`
// console.log(str2);

// let str3=new String("hii")  //in this case we want perticuler value that time we use 
//'valueof()' other wise we get o/p:[String :"hii"]
// console.log(str3.valueOf());

// let str4=String("hii")
// console.log(str4);
// .................................................

//.............. String methods.....................
// 1.String length..........
// let str="ABCDEFGH"
// console.log(str.length)

//2 Extracting String Parts..........
// 1.String slice()
// let str="ABCDEFGHI"
// console.log(str.slice(0,7));

// 2.String substring()........
// let str="ABCDEFGHIJKLM"
// console.log(str.substring(0,4));

// 3.String substr()........
// let str="ABCDEFGHIJKLMNOP"
// console.log(str.substr(4,5));

//3.replace()............
// let str="Hi hello"
// let s=str.replace(/hi/i,"hmm")  //casesensitive that time we use "/i"
// console.log(s);
// let string="apple,banana,Orange"
// let res=string.replace("apple","kiwi")
// console.log(res);

// replaceAll()
// let g="Apple,Banana,Orange,Apple"
// let r=g.replace(/Apple/g,"pineapple")
// let r=g.replaceAll("Apple","pineapple")
// console.log(r);

// 4.toUpperCase()...........
// let a="Hello world"
// let res=a.toUpperCase();
// console.log(res);

// toLowerCase()................
// let l="HELLO WORLD"
// console.log(l.toLowerCase());

// 5.concat()..........
// let name="Hello"
// let str="world"
// console.log(name.concat("world"));
// console.log(name.concat(" "+str));

// 6.trim()..............
// let text1="    Hello World   "
// let res=text1.length;
// console.log(res);
// console.log(text1)
// let res1=text1.trim()
// console.log(res1);
// console.log(res1.length);

// 7.trimStart()
// let text2="   Hello World    "
// console.log(text2.length);
// let res2=text2.trimStart()
// console.log(res2);
// console.log(res2.length);

// 8.trimEnd()
// let text2="   Hello World    "
// console.log(text2.length);
// let res2=text2.trimEnd()
// console.log(res2);
// console.log(res2.length);

// 9.padStart()
// let num="5"
// console.log(num.padStart(4,"x"));

// 10.padEnd()
// let num1="6"
// console.log(num1.padEnd(4,'x'));

// charAt()
// let str="hello"
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str[0]);
