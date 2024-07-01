const mongoose = require("mongoose");

// !Creating structure of schema for student collection

let studentSchema = new mongoose.Schema(
    {
        name:{
            type:"string",
            required:true
        },
        age:
        {
            type:Number,
            required:true
        },
        gender:
        {
            type:'string',
            required:true
        }
    },
    {timestamps:true}
)
// !creating collection

module.exports=new mongoose.model("club",studentSchema)