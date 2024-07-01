const { Schema, model } =require('mongoose');
const bcryptjs = require('bcryptjs');
let teacherSchema=new Schema({
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
    }
},
{timestamps:true}
)

// !16.8.23
// !Dont use arrow function for pre method

teacherSchema.pre("save",async function(next)
{
    let salt=await bcryptjs.genSalt(10);
    this.password=await bcryptjs.hash(this.password,salt);
    // from 5 and above version of mongoose next( ) is not required

    next()
})

teacherSchema.methods.compareMyPassword=async function(password)
{
    let hashedPassword=await bcryptjs.compare(password,this.password);
    return hashedPassword;
}

// !Password encrypted means we entered password not display it will display in only database not i n postman 
// teacherSchema.pre("save", async function (next) {
//     let salt = await bcryptjs.genSalt(10);
//     this.password = await bcryptjs.hash(this.password, salt);

//     next();
// })
// teacherSchema.methods.compareMyPassword = async function (password) {
//     let hashedPassword = await bcryptjs.compare(password, this.password);

//     return hashedPassword;

// }
module.exports=new model("mail",teacherSchema)