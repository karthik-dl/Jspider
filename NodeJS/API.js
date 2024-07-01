// const http=require('http');

// let server=http.createServer((req,res)=>{
//     // !Routing
//     if(req.url==="/")
//     {
//         // !sending response
//         res.write("Welcome to home page");

//         // !ending response
//         res.end();
//     }
//     else if(req.url==="/signup")
//     {
//         res.end("Hi I am Signup page")
//     }
//     else{
//         res.write("Ooops page not found")
//         res.end()
//     }
// })
// server.listen(4000,(err)=>{
//     if(err) throw err;
//     console.log("Server is running port 4000");
// })
// ................................................


// ! running port 2000
// const http=require("http");
// let server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.write("Wlcom")
//         res.end();
//     }
//     else if(req.url==="/loginpage"){
//         res.end("hi iam login page")
//     }
//     else{
//         res.write("Oops page not found")
//         res.end()
//     }
// })
// server.listen(2000,(err)=>{
//     if(err) throw err
//     console.log("Server is running port 2000");
// })

// ...................................................

const http=require("http");
let server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("welcome")
        res.end()
    }
    else if(req.url==="/submit"){
        res.end("click here to submit")
    }
    else{
        res.write("Oops page not found")
        res.end()
    }
})
server.listen(3000,(err)=>{
    if(err) throw err
    console.log("Server running port 3000");
 })

