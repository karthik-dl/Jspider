const express = require('express')
require ('dotenv').config()
const personRoutes=require("./routes/principal.routes.js")
require("./adapters/connectionDB")
const userRoutes=require("./routes/user.routes.js")



let app=express()

app.use(express.json())

app.use("/api/person",personRoutes)

//? User Routes
app.use("/api/user",userRoutes)



// !page not found middleware
app.use("*",(req,res,next)=>{
    res.status(404).json({message:"Page not found"})
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running at PORT ${process.env.PORT}`)
})