// const express = require('express');
// require('dotenv').config()

// let app=express()

// app.use(express.json());



// app.use("*",(req,res,next)=>{
//     res.send(404).json({error:true,message:"Page not found"})
// })


// app.listen(process.env.PORT,()=>{
//     console.log(`Server in running at PORT ${process.env.PORT}`);
// })


const express = require('express');
require('dotenv').config();
const Studentroutes=require("./routes/student.routes")
require("./adapters/connectionDB")

let app=express()
app.use(express.json())

app.use("/api/student",Studentroutes)

app.use("*",(req,res,next)=>{
    res.send(404).json({error:true,message:"Page not found"})
})

app.listen(process.env.PORT,(req,res,next)=>{
    console.log(`server is running  at PORT ${process.env.PORT}`);
})

