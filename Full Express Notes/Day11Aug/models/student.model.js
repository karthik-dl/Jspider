const mongoose = require('mongoose');

let studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require: true
    },
    gender:{
        type:String,
        require:true
    }
})
module.exports=new mongoose.model("pg",studentSchema)