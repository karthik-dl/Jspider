const express=require("express")
const { addStudent, getStudent, getStudentByID, updateStudent, deleteStudent }=require("../controllers/student.controllers")

let router=express.Router()

router.post("/addstudent",addStudent)
router.get("/getstudent",getStudent)
router.get("/getsinglestudent/:id",getStudentByID)
router.put("/updatestudent/:id",updateStudent)
router.delete("/deletestudent/:id",deleteStudent)


module.exports=router
