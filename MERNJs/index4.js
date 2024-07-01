//Strings
// let s="biriyani"
//syntax---stringName.Method()
//charAt()--it will give the character position of the index in the given string
// let res=s.charAt(10)
// console.log(res.length);
// console.log(res)

//indexof()
// let res=s.indexOf('i')
// console.log(res)

//let res=s.indexOf('i',3)

// lastIndexof()
// let res=s.lastIndexOf('i')
//let res=s.lastIndexOf('i',6)
// console.log(res)

// substring()
// let res=s.substring(0,3)
// console.log(res)


// for loop in strings
/*let s="biriyani"
let count=0
for (let i=0; i<s.length; i++){
    if(s[i]=='i'){
        count++;
    }
    
}
console.log(count)*/
//reverse
/*let s="biriyani"
let x=''
// let count=0
for (let i=s.length-1; i>=0; i--){
    x+=s[i]
    }
console.log(x)*/


//jjaavvaa o/p 
/*let s="Java"
let x=" "
for( let i=0;i<s.length;i++) {
    x+=s[i]+s[i]
}
console.log(x)*/

//o/p jjjj
/*let s="Java"
let x=""
for(let i=0;i<s.length;i++) {
    x+=s[3]
}
console.log(x)*/

// print all the charater at even index position
/*let s="Java"
let x=" "
for(let i=0;i<s.length;i+=2) {
    x=x+(s[i])
}
console.log(x)*/

//toUppercase()
// tolowercase()

// let s="PRATIK"
// let res=s.toLowerCase();
// console.log(res);
let a=['prateek',21,"male"]
let object=
{
    name:'prateek',
    age:21,
    gender:'male'
}
console.table(object);