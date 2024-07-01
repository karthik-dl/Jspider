// const nodemailer = require('nodemailer');


// let invitationMail=async(email,name, otp)=>{
//     let transpoter=nodemailer.createTransport({
//         service:"Gmail",
//         auth:{
//             user:"dlkarthik462@gmail.com",
//             pass:"ugxxpbquxrnlrqmt"
//         }
//     })
//     transpoter.sendMail({
//         from:"dlkarthik462@gmail.com",
//         to:email,  //(we can call original email or if we pass "email like this we have to send the original email in postman")
//         subject:"Invitation mail",
//         text:"Thanks for registering with us",
//         html:`<h1>Thanks for registering ${name} Visit again and you have to login with this OTP:${otp}</h1>`
//     },()=>{console.log("Mail sent Successfully")})
// }

// module.exports={
//     invitationMail
// }
// !........................................................................................

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
         You can login with this otp</h1>`
    }
    transporter.sendMail(mailOptions, ()=>{console.log("Invitation Mail Sent Successfully")})
}


let sendOtp=async (email,otp,name)=>
{
    let mailOptions={
        from:"dlkarthik462@gmail.com",
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