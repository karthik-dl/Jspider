//array methods
//syntax=> arrayName.method()

//1 push
/*let a=[1, 2,3,4,5]
a.push(55,60)
console.log(a)*/

// 2 pop
/*let a=[1, 2,3,4,5]
a.pop()
console.log(a)*/

//3 unshift
/*let a=[1, 2,3,4,5]
a.unshift(55)
console.log(a)*/

//4 shift
/*let a=[1, 2,3,4,5]
a.shift()
console.log(a)*/

//5 splice
let a=[1, 2,3,4,5]
a.splice(2,1)
console.log(a)

/*let a=[1, 2,3,4,5]
a.splice(2,1,100)
console.log(a)*/

/*let a=[1, 2,3,4,5]
a.splice(0,a.length)
console.log(a);*/

//6 slice
/*let a=[1,2,3,4,5]
let b=a.slice(0,3)
console.log(b)*/

//2nd half array

/*let a=[1, 2,3,4,5,6]
 let b=a.slice(a.length/2,a.length)
console.log(b)*/

/*let a=[1, 2,3,4,5,6]
for(let i=a.length/2;i<a.length;i++){
console.log(a[i]);
}*/

/*let a=[1, 2,3,4,5,6]
for(let i=0;i<a.length;i++)
{
    if(a[i]%2==0){
    console.log(a);
    }
}*/

/*Reverse of array
let a=[1, 2,3,4,5,6]
for(let i=a.length-1;i>=0;i--)
console.log(a[i])*/

/*let a=[1, 2,3,4,5]
let b=[]
for(let i=a.length-1;i>=0;i--){
    b.push(a[i])
}
console.log( b)*/

/*let a=[1,2,3,4,5,6,7]
let result=false                                                                                                                                                                 
for(let i=0;i<a.length;i++)
{
    if(a[i]==7){
        console.log(true);
    }
}*/