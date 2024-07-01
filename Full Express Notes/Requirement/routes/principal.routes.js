const express= require('express')
const { registerPerson, loginPerson, Varify, }=require("../controllers/principal.controllers")

let router = express.Router();

router.post("/addperson",registerPerson);
router.post("/loginperson",loginPerson);
// router.post("/varify",Varify)


module.exports=router;