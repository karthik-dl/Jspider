const { invitationMail } = require("../Helper/mailHelper");
const { sendOTP } = require("../Helper/otpHelper");
const Person = require("../models/principal.model")
const bcryptjs = require('bcryptjs');
let genOtp=sendOTP()
let registerPerson = async (req, res, next) => {
    try {
        let { name, email, password} = req.body



        // ?returns the document if condition satisfies else return null
        let isPersonAvailable = await Person.findOne({ email });

        if (!isPersonAvailable) {

                invitationMail(email, name, genOtp);  //caling the function from helper
                // sendOTP(otp)

            // ! line 8----here also added password:hashedPassword
            let person = await Person.create({ name, email, password,otp:genOtp})
            // !...........

            return res.status(201).json({ error: false, message: "Person added successfully", data: { name: Person.name, email: Person.email } })
        }
        res.status(409).json({ error: true, message: "Person already exist" })
    }
    catch (err) {
        next(err)
    }
}

let loginPerson = async (req, res, next) => {
    try {
        let { email, password, otp} = req.body

        let isPersonAvailable = await Person.findOne({ email })

        if (!isPersonAvailable) {
            return res.status(404).json({ error: true, message: "No teacher found at given email" })
        }
        let hashedPassword = await isPersonAvailable.compareMyPassword(password)
        let flag=otp===isPersonAvailable.otp ? true: false
        // let hashedOTP=await isPersonAvailable.compareMyOTP(otp)
        if (hashedPassword && flag)


        // if (password === isTeacherAvailable.password)
        {
            return res.status(201).json({ error: false, message: "Login SuccessFull" })
        }
        else {
            return res.status(401).json({ error: true, message: "Invalid password" })
        }
    }
    catch (err) {
        next(err)
    }
}


// let Varify=async (req,res,next)=>
// {
//     try{
//         let {email,password,otp}=req.body;
//         let isPersonAvailable=await Person.findOne({email})

//         if (!isPersonAvailable) {
//             return res.status(404).json({ error: true, message: "No teacher found at given email" })
//         }
//         let hashedOTP = await isPersonAvailable.compareMyOTP(otp)
//         let flag=otp===isPersonAvailable.otp ? true: false
//         // let hashedOTP=await isPersonAvailable.compareMyOTP(otp)
//         if (hashedOTP && flag)

        
//         // if (password === isTeacherAvailable.password)
//         {
//             return res.status(201).json({ error: false, message: "Login SuccessFull" })
//         }
//         else {
//             return res.status(401).json({ error: true, message: "Invalid password" })
//         }
//     }
//     catch (err) {
//         next(err)
//     }
// }


module.exports = {
    registerPerson,
    loginPerson,
    // Varify
}