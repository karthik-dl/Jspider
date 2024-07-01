const nodemailer = require('nodemailer');

let transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"dlkarthik462@gmail.com",
        pass:"ugxxpbquxrnlrqmt"
    }
})

let invitationMail=async(email,name,role)=>
{
    let mailOptions={
        from:"dlkarthik462@gmail.com",
        to:email,
        subject:"Invitation Mail",
        html:`<h1>Thanks For Registering ${name.toUpperCase()} with us <br/>
        Your Account is created as ${role} <br/>
         You can login to access the app</h1>`
    }
    transporter.sendMail(mailOptions, ()=>{console.log("Invitation Mail Sent Successfully")})
}


let sendOtp=async (email,otp,name)=>
{
    let mailOptions={
        from:"ramugunaga25@gmail.com",
        to:email,
        subject:"OTP Mail",
        html:`<h1>Hi ${name}, Your OTP for XYZ Application is ${otp}</h1>`
    }
    transporter.sendMail(mailOptions, ()=>{console.log("OTP Sent Successfully")})
}
module.exports={
    invitationMail,
    sendOtp
}