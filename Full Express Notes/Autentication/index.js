const express = require('express');
require('dotenv').config();
require("./adapters/connectionDB")
const employeeRoutes=require("./routes/employee.routes")
// const userRoutes = require('./routes/user.routes');



console.log("hello")
let app=express();

//! It is used to accept json data from the req body
app.use(express.json())

//? Students Routes
// app.use("/api/student",StudentRoutes)

//? Teacher Routes
// app.use("/api/teacher",teacherRoutes)

//? User Routes
// app.use("/api/user",userRoutes)

// ?Employee routes
app.use("/api/employee",employeeRoutes)

//! Page Not Found Middleware
app.use("*",(req,res,next)=>
{
  res.status(404).json({error:true,message:"Page Not Found"})
})

//! Error Handling Middleware

app.use((err,req,res,next)=>
{
  res.status(400).json({error:true,message:err.message,data:"OK"})
})

let PORT=process.env.PORT
app.listen(PORT,()=>
{
    console.log(`Server is Running on PORT ${PORT}`)
})