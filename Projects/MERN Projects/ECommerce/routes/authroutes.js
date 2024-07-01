const express = require('express');
const { createUser, loginUser, getAllUsers, getSingleUser } = require('../controllers/user.controller');

const router = express.Router()

router.post("/register",createUser)
router.post("/login",loginUser)
router.get("/getusers",getAllUsers)
router.get("/getsingleuser/:id",getSingleUser)

module.exports = router;