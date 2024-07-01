const express= require ("express");
require('dotenv').config();
const studentRoutes = require("./routes/student.routes");
require('./adapters/connectionDb')


let app=express();

app.use(express.json())

app.use("/api/student",studentRoutes)
 
// !Page not found Middleware
app.use("*",(req,res,next)=>{
    res.status(404).json({message:"Page Not Found"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})