const Teacher = require('../models/teacher.model');


//^  Adding teacher data
let addTeacher=async(req,res,next)=>
{
    try
    {
        let{name,id,age,gender,subject}=req.body

    let newTeacher=await Teacher.create({name,id,age,gender,subject})
    res.status(201).json({error:false,message:`${newTeacher.name}'s Data added successfully`,data:newTeacher})
    }
    catch(err)
    {
        res.status(400).json({error:true,data:err.message})
    }
}

//^ Getting Teachers
let getTeachers=async(req,res,next)=>
{
     let allTeachers=await Teacher.find()
     if(allTeachers.length)
    {
        res.status(200).json({error:false,message:"All teachers fetched successfully",data:allTeachers})
    }
    else
    {
        return res.status(404).json({error:true,message:"No teacher's data available in database."})
    }
}

//^ Getting teacher by ID
let getTeacherByID=async (req,res,next)=>
{
    let{id}=req.params

    let singleTeacher= await Teacher.findById(id)
    // let singleTeacher= await Teacher.findOne({name:id})
    // let singleTeacher= await Teacher.findOne({id:id})

    if(!singleTeacher)
    {
       return res.status(404).json({error:true,message:`No Teacher is found with ID ${id}`})
    }
    return  res.status(200).json({error:true,message:"Teacher fetched Successfully",data:singleTeacher})
}

//^  Updating Teacher Details
let updateTeacher=async(req,res,next)=>{
    let {name,id,age,gender,subject}=req.body
    let {sid}=req.params

    let singleTeacher= await Teacher.findById(sid)
    //let singleTeacher= await Teacher.findOne({name:sid})
    // let singleTeacher= await Teacher.findOne({id:sid})

    if(!singleTeacher)
    {
        return res.status(404).json({error:true,message:`No Teacher Found with given ID ${sid}`, data:null})
    }

    let updatedTeacher=await Teacher.findOneAndUpdate({_id:sid},{name,id,age,gender,subject},{new:true,runValidator:true})

    res.status(200).json({error:false,message:`${updatedTeacher.name.toUpperCase()} are Updated`,data:updatedTeacher})
}


//^  Deleting Student

let deleteTeacher=async(req,res,next)=>{

    let {sid}=req.params
    let singleTeacher= await Teacher.findById(sid)
    //let singleTeacher= await Teacher.findOne({name:sid})
    // let singleTeacher= await Teacher.findOne({id:sid})

    if(!singleTeacher)
    {
        return res.status(404).json({error:true,message:`No Teacher Found with given ID ${sid}`, data:null})
    }

    let deletedTeacher=await Teacher.findOneAndDelete({_id:sid})
    res.status(200).json({error:false,message:`Teacher Deleted Successfully`,data:deletedTeacher})
}



module.exports={
    addTeacher,
    getTeachers,
    getTeacherByID,
    updateTeacher,
    deleteTeacher
}