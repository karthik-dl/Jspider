const nodemailer = require('nodemailer');

let invitationMail=async(email,name)=>{
    let transpoter=nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:"dlkarthik462@gmail.com",
            pass:"ugxxpbquxrnlrqmt"
        }
    })
    transpoter.sendMail({
        from:"dlkarthik462@gmail.com",
        to:email,  //(we can call original email or if we pass "email like this we have to send the original email in postman")
        subject:"Invitation mail",
        text:"Thanks for registering with us",
        html:`<h1>Thanks for registering ${name} Visit again</h1>`
    },()=>{console.log("Mail sent Successfully")})
}

module.exports={
    invitationMail
}