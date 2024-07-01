const mongoose = require('mongoose');

let aluminaSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    yearofpassout: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    }


})

module.exports=new ("alumina",aluminaSchema)