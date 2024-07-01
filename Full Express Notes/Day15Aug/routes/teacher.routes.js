const express= require('express')
const { registerTeacher, loginTeacher }=require("../controllers/teacher.controllers")

let router = express.Router();

router.post("/addteacher",registerTeacher);
router.post("/loginteacher",loginTeacher)


module.exports=router;