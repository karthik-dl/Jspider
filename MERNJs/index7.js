// function square(a)
// {
//     for(let i=0;i<a.length;i++)
//     {
//         console.log(a[i]**2);
//     }
// }
// square([2,3,4,5])
/*let square = x => x**2
console.log(square(20));*/

//array methods
// a.map()
// let a=[1,2,3,4,5]
// let result=a.map((x) => {   
//     return x**2
// })
// console.log(result);

//same in arrow method
// let a=[1,2,3,4,5]
// let result=a.map((x)=>x**2)
// console.log(result);

//filter()
/*let a=[1,2,3,4,5,6]
let result=a.filter((x)=>{
    return x>2 //return x%2==0 evenno n //return x%2 oddno
})
console.log(result);*/

/*let a=[1,2,3,4,5,6]
let result=a.map((x)=>x>2)
console.log(result);*/

//reduce()
let a=[1,2,3,4,5,6]
let result=a.reduce((sum,x)=>{
    return sum += x
},0)
console.log(result);

/*let food=[
    {
        title:"Biriyani",
        price:300,
        ratings:5
    },
    {
        title:"Curd rice",
        price:50,
        ratings:4.5
    },
    {
        title:"drunken prawns",
        price:1500,
        ratings:4.5
    }
]*/
/*let result=food.map((data)=>{
    // return data.title
})
console.log(result);*/

/*let result=food.filter((data)=>{
    return data.ratings>5.5
})
console.log(result);*/

/*let res=food.reduce((sum,data)=>{
    return sum+=data.price
    
},0)
console.log(res);*/
// let n = 10;
// for (let i = 0; i < n; i++) {
//     console.log(i);
// }
// console.log(i)