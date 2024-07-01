const mongoose = require('mongoose')

let teacherSchema = new mongoose.Schema(
    {

        TName:{
            type:"string",
            required:[true,"Name is mandatory"],
            minLength:[3,"Please enter your name atLeast three characters "],
            maxLength:[15,"Please don't enter more than 10 characters"]
        },
        age:{
            type:Number,
            required:true,
            minLength:[24,"Minimum age should 24 and entered {VALUE}"],
            maxLength:[30,"Maximum age should 30 and entered {VALUE}"]
        },
        gender:{
            type:"String",
            required:true,
            enum:{
                values:["Male","Female","Other"],
                message:"Only male female and other values are allowed {VALUE}"
            }

        },
        email:{
            type:"String",
            required:true,
            unique:true

        },
        subject:{
            type:"String",
            required:true,

        }

    },
    {timestamps:true}
)
module.exports=new mongoose.model("Teacher",teacherSchema)