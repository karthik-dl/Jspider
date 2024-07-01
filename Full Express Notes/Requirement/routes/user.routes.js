const express = require('express')
const { createUser, loginUser, resendOtp, resetPassword } = require("../controllers/user.controllers")

let router=express.Router()

router.post("/adduser",createUser)
router.post("/loginuser",loginUser)
router.post("/resendotp",resendOtp)
router.patch("/resetpassword",resetPassword)



module.exports=router