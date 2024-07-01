const {connect}= require ('mongoose')
require('dotenv').config()

connect(process.env.URL).then(()=>{
    console.log("MongoDB connected Successfully");
}).catch((err)=>{
    console.log(error);
})