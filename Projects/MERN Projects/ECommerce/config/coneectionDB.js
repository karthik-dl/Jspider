const {connect} = require('mongoose');
require('dotenv').config()

connect(process.env.URL).then(()=>{
    console.log("MongoDB connected successfully");
}).catch((err)=>{
    throw error
})
