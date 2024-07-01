const { invitationMail, sendOtp } = require("../Helper/mailHelper")
const User = require("../models/user.model");


let createUser = async (req, res, next) => {
    try {
        let { fullname, email, role } = req.body;

        // let isUserAvailable=await User.findOne({ email });
        let isUserAvailable = await User.findOne({ email })

        if (isUserAvailable) {
            return res.status(500).json({ error: true, message: "User Already Exists" })
        }


        let user = await User.create({ fullname, email, role })
        invitationMail(email, fullname, role)

        return res.status(201).json({ error: false, message: "User Added Successfully", data: user })

    }
    catch (err) {
        next(err)
    }
}


let loginUser = async (req, res, next) => {
    try {
        let { email } = req.body
        let isUserAvailable = await User.findOne({ email });

        if (!isUserAvailable) {
            return res.status(500).json({ error: true, message: `User Not Found with given email ${email}` })
        }

        let otp = Math.floor(Math.random() * 899999 + 100000);
        console.log(otp);

        let user = await User.findOneAndUpdate({ email },
            { hashotp: otp }, { new: true, runValidators: true })

        sendOtp(email, otp, user.fullname)

        return res.status(201).json({ error: false, message: "User Added Successfully", data: user })

    }
    catch (err) {
        next(err)
    }
}
let resendOtp=async(req,res,next) =>{
    try{
        let {email}=req.body
        let resend= Math.floor(Math.random() * 899999 + 100000);
        console.log(resend);

        let  isUserAvailable=await User.findOneAndUpdate({email},{hashedotp:resend})
        if(!isUserAvailable)
        {
            return res.status(404).json({error:true,message:`No data found with ${email}`})
        }
        else{
            sendOtp(email, resend,isUserAvailable.fullname)
            return res.status(201).json({error:false,message:`OTP resent successfully`})
        }
    }
    catch(err){
        next(err)
    }
}
let resetPassword=async(req,res,next)=>{
    try{
        let {email,password}=req.body
        let isUserAvailable = await User.findOne({ email });

        if (!isUserAvailable) {
            return res.status(500).json({ error: true, message: `User Not Found with given email ${email}` })
        }
         else{
            let  updatePassword=await User.findOneAndUpdate({email},{password})
            return res.status(201).json({ error: false, message: "Password successfully compared",user:updatePassword.email })
        }

    }
    catch(err){
        next(err)
    }
}


module.exports = {
    createUser,
    loginUser,
    resendOtp,
    resetPassword

}