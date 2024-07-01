const Student = require("../models/student1.model")

let addStudent=async(req,res,next)=>{
    try{
        let {name,age,gender}=req.body
        let newstudent=await Student.create({name,age,gender})
        res.status(200).json({error:false,message:"Student added successfully",data:newstudent})

    }
    catch(err){

        res.status(200).json({error:true,message:"Cant able to admit the student"})
    }
}
let getStudent=async(req,res,next)=>{
    try{
        let getstudent=await Student.find()
        res.status(200).json({error:false,message:"student gets sucessfully",data:getstudent})
    }
    catch(err){
        res.status(200).json({error:true,message:"cant able to get the student"})
    }
}

let getStudentByID=async(req,res,next)=>{

        let {id}=req.params
        let singlestudent=await Student.findById(id)
        if(!singlestudent){
            return res.status(200).json({error:true,message:`no student found at ${id}`})
        }
    
    else{
        res.status(200).json({error:false,message:`student fetched succesfully ${id}`,data:singlestudent})
    
}
}
let updateStudent=async(req,res,next)=>{
    let{name,age,gender}=req.body
    let {id}=req.params
    let singlestudent=await Student.findById(id)
    if(!singlestudent){
        return res.status(200).json({error:true,message:`no student found at ${id}`})
    }
    let updateStudent=await Student.findOneAndUpdate({_id:id},{name,age,gender})
    res.status(200).json({error:false,message:`student updated successfully ${updateStudent}`,data:updateStudent})
}

let deleteStudent=async(req,res,next)=>{
    let{id}=req.params
    let singlestudent=await Student.findById(id)
    if(!singlestudent){
        return res.status(200).json({error:true,message:`no student found at ${id}`})
    }
    let deleteStudent=await Student.findOneAndDelete({_id:id})
    res.status(200).json({error:false,message:`Student deleted successfully`,data:deleteStudent})
}

module.exports={
    addStudent,
    getStudent,
    getStudentByID,
    updateStudent,
    deleteStudent
}