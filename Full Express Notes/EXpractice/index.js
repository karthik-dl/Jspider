const express= require('express');
const travelerRoutes = require('./routes/traveller.routes');
require('dotenv').config()
require("./routes/traveller.routes")
require("./adapters/connectionDB")

let app=express();

app.use(express.json())


app.use("/api/traveler",travelerRoutes)


app.use("*",(req, res, next) => {
    res.status(201).json({message:"page not Found"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
})