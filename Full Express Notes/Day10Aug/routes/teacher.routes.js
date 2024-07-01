const express=require ('express')
const {addTeacher,getTeacher,oneTeacher,updateTeacher,deleteTeacher}=require("../controllers/teacher.controllers.js");

let router = express.Router()

router.post("/addteacher",addTeacher)
router.get("/getteacher",getTeacher)
router.get("/oneteacher/:tid",oneTeacher)
router.put("/updateteacher/:tid",updateTeacher)
router.delete("/deleteteacher/:tid",deleteTeacher)

module.exports=router