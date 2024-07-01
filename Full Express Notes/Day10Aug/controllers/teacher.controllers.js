const Teacher = require("../models/teacher.models.js")
const Joi=require("joi")

let teacherSchema=Joi.object({
    TName:Joi.string().min(3).required().messages({
        "string.base":"Name must String",
        "string.min":"Name should contain min 3 characters",
        "string.empty":"Name is mandatory"
    }),
    age:Joi.number().required().messages({
        "number.base":"age must number",
        "number.empty":"age is mandatory"
    }),
    gender:Joi.string().required().messages({
        "string.base":"gender must String",
        "string.empty":"gender is mandatory"
    }),
    subject:Joi.string().required().messages({
        "string.base":"subject must String",
        "string.empty":"subject is mandatory"
    }),
    email:Joi.string().email().messages({
        "string.base":"email must String",
        "string.empty":"email is mandatory"
    })

})

// const addTeacher = async (req, res, next) => {
//     try {
//         let { TName, age, gender, subject, email } = req.body

//         let newTeacher = await Teacher.create({ TName, age, gender, subject, email })
//         res.status(201).json({ error: false, message: "Teacher added successfully", show: newTeacher })
//     }
//     catch (err) {
//         res.status(400).json({ error: true, data: err.message })
//     }
// }

const addTeacher =  async (req, res, next) =>{
    try{
        let { TName, age, gender, subject, email } = req.body

        let {value,error}=teacherSchema.validate({TName, age, gender, subject, email })
        console.log(value);
        console.log("--------------------------------------");
        console.log(error);
        if(error){
            return res.status(400).json({error:true,message:"Validation failed",data:error})
        }
        else{
            let teacher=await Teacher.create(value);
            res.status(201).json({error:false,message:"Student added successfully",data:teacher})
        }
    }
    catch(err){
        // res.status(400).json({error:true,data:err.message})
        next(value);
    }
}

// !Get all the teacher data

const getTeacher = async (req, res, next) => {
    try {
        let getallteacher = await Teacher.find({})
        res.send(getallteacher);
        // res.status(201).json({ error: false, message: "Teacher  data gets Successfully", data: getallteacher })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ error: true, data: err.message })
    }
}

// const fetchTeacher=async(req, res, next)=>{
//     let t= await Teacher.find({})
//     res.status(210).json({error:false,message:"All Teacher data fetched successfully"})
// }

// ! Getting one teacher one data

const oneTeacher = async (req, res, next) => {
    // try {
        let { tid } = req.params;
        // console.log(tid);

        // !fetch single teacher data by using teacher id
        // let findoneteacher=await Teacher.findOne({_id:tid})

        let singleTeacher = await Teacher.findById({tid})
    //     if (!singleTeacher) {
    //         return res.status(404).json({ error: true, message: "No teacher found at the given name", data: null })
    //     }
    // }
    // catch (err) {
         return res.status(201).json({ error: false, message: "First Teacher data fetched successfully", data: singleTeacher })
    //  }
}

// !updating teacher's data by using update method

const updateTeacher = async (req, res, next) => {

    let { TName, age, gender, subject, email } = req.body
    let { tid } = req.params;
    let singleTeacher = await Teacher.findById(tid);

    //  check whether the teacher dta existing or not
    if (!singleTeacher) {
        return res.status(404).json({ error: true, message: `No teacher data found at given id ${tid}`, data: singleTeacher })
    }

    let updateTeacher = await Teacher.findOneAndUpdate({ _id : tid }, { TName, age, gender, subject, email }, { new: true, runValidators: true })
    // console.log(req.body);
    // console.log(req.params);
    res.status(200).json({
        error: false, message: `${updateTeacher, TName.toUpperCase()} college updated from ${oneTeacher.Institute} to
         ${updateTeacher.Institute} successfully`, data: updateTeacher});
    // res.status(200).json({error:false,message:"Teacher updated successfully",data:updateTeacher})
}



//! Deleting one teacher

const deleteTeacher = async (req, res, next) => {
    let { tid } = req.params;
    let exist = await Teacher.findById(tid)

    if (!exist) {
        return res.status(404).json({ error: true, message: `No teacher data found with given id ${tid}`, data: exist })
    }

    let deleteTeacher = await Teacher.findOneAndDelete({ _id: tid })

    res.status(200).json({ error: false, message: `Teacher data deleted successfully`, data: deleteTeacher })
}

module.exports = {
    addTeacher,
    getTeacher,
    oneTeacher,
    updateTeacher,
    deleteTeacher

}