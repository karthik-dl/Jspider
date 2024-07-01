const express = require('express');
const {
    addStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
}= require('../controllers/student.controller');

let router=express.Router()

router.post("/addstudent",addStudent);
router.get("/getstudent",getStudents);
router.get("/getstudent",getStudent);
router.put("/updatestudent",updateStudent);
router.delete("/deletestudent",deleteStudent);

module.exports = router;