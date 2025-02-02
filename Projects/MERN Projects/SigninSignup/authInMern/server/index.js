require("dotenv").config();
const express = require('express');
const app = express()
const cors = require("cors")
require("./ConnectionDB")
const userRoutes = require("./routes/user.routes")
const authRoutes = require("./routes/auth.routes")

// middleware
app.use(express.json())
app.use(cors())

// routes

// app.use(router.use())
app.use("/api/users", userRoutes)
app.use("/api/auth",authRoutes)


// const PORT = process.env.PORT || 1000;
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})