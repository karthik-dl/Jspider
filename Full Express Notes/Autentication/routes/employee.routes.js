const express = require('express');
const { registerEmployee,loginEmployee,getAllEmployees } = require('../controllers/employee.controllers');
const { auth } = require('../services/authServices');

let router=express.Router();


router.post("/addemployee",registerEmployee)
router.post("/loginemployee",loginEmployee)
router.get("/getemployees",auth,getAllEmployees)



module.exports=router