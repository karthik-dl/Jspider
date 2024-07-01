const express = require('express');
const { addTeacher, getTeachers, getTeacherByID, updateTeacher, deleteTeacher } = require('../controllers/teacher.controller');


//&  you're initializing an Express router using the "express.Router()" function.
//&  This is a crucial step when you want to create modular routes and middleware in your Express application

let router=express.Router();

router.post("/addteacher",addTeacher)
router.get("/getteachers",getTeachers)
router.get("/getsingleteacher/:id",getTeacherByID)
router.put("/updateteacher/:sid",updateTeacher)
router.delete("/deleteteacher/:sid",deleteTeacher)



module.exports=router