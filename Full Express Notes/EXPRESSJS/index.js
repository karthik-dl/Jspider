const express = require('express');
const studentRoutes = require("./routes/student.routes");
require("dotnev").config();

let app=express();
app.use(express.json());

// App module
app.use("/api/student",studentRoutes)

// Page not found route

app.use("",(req,res,next)=>{
    res.status(404).json({error:true,message:"Page not found"})
})

let PORT=process.env.DEVPORT;
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server running at PORT ${PORT}`);
})