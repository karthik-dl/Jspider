const mongoose = require('mongoose');

let travelerSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        place:{
            type:String,
            required:true
        },
        vehicle:{
            type:String,
            required:true
        }
    }
)

module.exports = new mongoose.model("travelersDetails",travelerSchema)