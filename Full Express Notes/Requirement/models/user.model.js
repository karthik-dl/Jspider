const {Schema,model} = require('mongoose');
const bcryptjs=require("bcryptjs")

let userSchema=new Schema({
    fullname:{
        type:String,
        required:[true,"fullname is mandatory"]
    },
    email:{
        type:String,
        required:[true,"Email is mandatory"]
    },
    role:{
        type:String,
        required:[true,"Role is mandatory"],
        enum:["teacher","student","admin"]
    },
    hashotp:{
        type : String,
        require:[true,"Hashed OTP is mandatory"],
        default:"null"
    },
    password:{
        type:String,
        require:[true,"Password is mandatory"]
    }
},
{timestamps:true})


userSchema.pre("save",async function(next)
{
    let salt=await bcryptjs.genSalt(10);
    this.password=await bcryptjs.hash(this.password,salt);
    // from 5 and above version of mongoose next( ) is not required

    next()
})

userSchema.methods.compareMyPassword=async function(password)
{
    let hashedPassword=await bcryptjs.compare(password,this.password);
    return hashedPassword;
}

module.exports=new model("user",userSchema)