const { generateToken } = require('../config/jwtToken');
const User = require('../models/user.model');

const createUser = async (req, res, next) => {
   try {
    const {firstName,lastName,email,mobile,password} = req.body;
    console.log(req.body);
    const findUser = await User.findOne({email})
    if (!findUser) {
        // create new user
        const newUser=await User.create({firstName,lastName,email,mobile,password})  //!instead  if req.body we use email also
        res.status(200).json({error:false,message:"user created successfully",data:newUser})
    }
    else{
        res.status(409).json({error:true,message:'Email already exists'})
    }
   } catch (error) {
    next(error)
   }


}

const loginUser = async (req,res,next)=>{
    try{
        const {email,password} = req.body
        // console.log(email,password);
        // Check user exists or not
        const findUser=await User.findOne({email})
        if(findUser && await findUser.isPasswordMatched(password))
        {
            res.status(200).json({
                 error:false,//,message:"Password matched successfully",data:findUser
                _id:findUser?._id,
                firstName:findUser?.firstName,
                lastName:findUser?.lastName,
                email:findUser?.email,
                mobile:findUser?.mobile,
                token:generateToken(findUser?._id),
            })
        }
        else{
            res.status(200).json({error:true,message:"Password does not matched"})
        }
    }
    catch(err){
        next(err)
    }
}


// get all users
const getAllUsers=async(req,res,next)=>{
    try{
        getUser=await User.find()
        res.status(200).json({error:false,message:"Users gets Successfully",data:getUser})
    }
    catch(error){
        next(error)
    }
}

// get single user
const getSingleUser=async(req,res,next)=>{
    try{
        const {id}=req.params
        // console.log(id);
        const getOneUser=await User.findById(id)
        res.status(200).json({error:false,message:"User fetched Successfully through given id",data:getOneUser})
    }
    catch(error)
    {
        next(error)
    }
}
module.exports={
    createUser,
    loginUser,
    getAllUsers,
    getSingleUser
}
