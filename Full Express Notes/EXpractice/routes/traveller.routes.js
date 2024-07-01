const express = require('express');

const {addTraveler,getTraveler}=require('../controllers/travellers.controllers.js')

let router=express.Router();

router.post("/addtraveler",addTraveler);
router.get("/gettraveler",getTraveler);



module.exports = router

