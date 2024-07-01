const { Schema, model } =require('mongoose');
const bcryptjs = require('bcryptjs');

let principalSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is mandatory"]
    },
    email:{
        type:String,
        required:[true,"Email is mandatory"]
    },
    password:{
        type:String,
        required:[true,"Password is mandatory"]
    },
    otp:{
        type:Number
    }
},
{timestamps:true}
)


principalSchema.pre("save",async function(next)
{
    let salt=await bcryptjs.genSalt(10);
    this.password=await bcryptjs.hash(this.password,salt);
    // from 5 and above version of mongoose next( ) is not required

    next()
})

principalSchema.methods.compareMyPassword=async function(password)
{
    let hashedPassword=await bcryptjs.compare(password,this.password);
    return hashedPassword;
}

// principalSchema.methods.compareMyOTP=async function(otp)
// {
//     let hashedOTP=await bcryptjs.compare(otp,this.otp)
//     return hashedOTP
// }
// !Password encrypted means we entered password not display it will display in only database not i n postman 

module.exports=new model("gmail",principalSchema)