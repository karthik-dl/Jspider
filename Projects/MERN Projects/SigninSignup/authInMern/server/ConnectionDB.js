const {connect}= require("mongoose")
require ("dotenv").config()

connect(process.env.URL).then(()=>{
    console.log("MongoDb connected successfully");
}).catch((err)=>{
    console.log(err);
})