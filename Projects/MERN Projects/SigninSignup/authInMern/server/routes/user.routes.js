const { validate, User } = require("../model/user.model")

const router = require ("express").Router()
const bcrypt = require("bcrypt")


router.post("/",async(req,res)=>{
    try{
        const {error} = validate(req.body)
        if(error)
        {
            return res.status(400).send({message:error.details[0].message})
        }
        const user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(409).send({message:"User Email already exists"})
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        await new User({...req.body,password:hashPassword}).save()
        res.status(201).send({message:"User created Successfully"})
    }
    catch(err){
        throw(err)
    }
})

module.exports= router;