const express = require('express');
const dotenv=require("dotenv").config()
const PORT = process.env.PORT || 2000;
require("./config/coneectionDB")
const authRouter=require("./routes/authroutes.js")

const app=express()

app.use(express.json());

app.use('/api/user',authRouter)

app.use('*',(req, res, next)=>{
res.status(404).json({error : true, message : 'Page Not found'})
})

// app.use("/",(req,res)=>{
//     res.send("Hello from server side")
// })
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})