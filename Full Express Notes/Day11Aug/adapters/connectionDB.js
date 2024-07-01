const {connect} = require('mongoose')
require('dotenv').config()

connect(process.env.URL).then(()=>{
    console.log("MongooDB connected successfully");
}).catch((err)=>{
    console.log(err);
})