// first method
// let data=window.fetch("https://api.github.com/users")
// console.log(data);
// data.then((mesg)=>{
//     console.log(mesg);
//     let finaldata=mesg.json();
//     console.log(finaldata);
//     finaldata.then((mesg)=>{
//         console.log(mesg);
//         mesg.map(m=>{
//             let div=document.getElementById("div")
//             console.log(div);
//             div.innerHTML += `
//             <ul>
//             <li>
//             ${m.login}
//             </li>
//             </ul>
//             <img src="${m.avatar_url}">
//             `
//         })
//     })
// })
// .........................................................

// 2nd method is imp

// async function demo(){
//     let data = await fetch("https://api.github.com/users")
//     console.log(data);
//     let  finaldata=await data.json()
//     console.log(finaldata);
//     finaldata.map((m)=>{
//         console.log(m.login);
//     })
// }
// demo()
// .............................................................

// 3dr method is xhr

// function test(){
//     xhr = new XMLHttpRequest();
//     console.log(xhr);
//     xhr.open("GET", "https://api.github.com/users");
//     xhr.onload = function(){
//         console.log(xhr);
//         let data=JSON.parse(xhr.response);
//         console.log(data);
//         data.map((m)=>{
//             console.log(m.login);
//             console.log(m.id);
//             console.log(m.node_id);
//             console.log(m.avatar_url);
//         })
//     }
//     xhr.send()
// }
// test()
// .........................................................

// let obj={
//     Name:"Ram",
//     id:123
// }
// console.log(obj);
// let obj1=JSON.stringify(obj);
// console.log(obj1);
// let obj2=JSON.parse(obj1);
// console.log(obj2);

// async function demo(){
//     let data=await fetch("")
//     console.log(data)
//     let finaldata= await data.json()
//     console.log(finaldata)
//     finaldata.map((m)=>{
//         console.log(m.login)
//     })

// }
// demo()
let name="react"
sessionStorage.setItem("Subject",name)
let data=sessionStorage.getItem("Subject")
console.log(data);
let dd=sessionStorage.removeItem("Subject")
console.log(dd);

let nam="javascript"
localStorage.setItem("Subject",nam)
let tata=localStorage.getItem("Subject")
console.log(tata);
let tt=localStorage.setItem("Subject")
console.log(tt);
