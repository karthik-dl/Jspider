 const express=require("express");

//  ! How to create server in Expressjs
//  let app= express();

//  app.listen(3400,err=>{
//     if(err) throw err;
//     console.log("Server running at PORT 3400");
//  })

// ! Simple routing oin Expressjs
// let app= express();
// app.get("/",(req,res,next) => {
//     res.send("Home page from Expressjs")
// })

// app.get("/getstudents",(req,res,next) => {
//    res.send("All Students Data")
// })

// app.get("/getstudent/:sname",(req,res,next) => {
//      console.log(req.params);
//      res.send("Single Student data")
// })

// app.listen(3500,(err)=>{
//     if(err) throw err;
//     console.log("Server running at port 3400");
// })


// !next()
// let app= express();
// app.get("/",(req,res,next) => {
//     console.log("first request");
//     next();
//     res.send("First middleware")
// },
// (req,res,next) =>
// {
//     console.log("Second request");
//     next();
//     res.send("Second middleware")
// },
// (req,res,next)=>{
//     console.log("Third");
//     res.send("Third middleware")
// })
// let PORT=3001;
// app.listen(PORT,(err)=>{
//     if(err) throw err;
//     console.log(`running at port ${PORT}`);
// })


// !