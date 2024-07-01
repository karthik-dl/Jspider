const express= require('express')
const {addStudent,getSingleStudent,getStudents,editStudent, deleteStudent}=require("../constrollers/student.controllers")

let router = express.Router();

router.post("/addstudent",addStudent);
router.get("/getsinglestudent",getSingleStudent)
router.get("/getstudent",getStudents)
router.put("/editstudent/:sid",editStudent)
router.delete("/deletestudent/:sid",deleteStudent)

module.exports=router;