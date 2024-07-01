const { invitationMail } = require("../Helper/mailHelper");
const Teacher = require("../models/teacher.model")
const bcryptjs = require('bcryptjs');

let registerTeacher = async (req, res, next) => {
    try {
        let { name, email, password } = req.body



        // ?returns the document if condition satisfies else return null
        let isTeacherAvailable = await Teacher.findOne({ email });

        if (!isTeacherAvailable) {

                invitationMail(email, name);  //caling the function from helper

            // ! line 8----here also added password:hashedPassword
            let teacher = await Teacher.create({ name, email, password })
            // !...........

            return res.status(201).json({ error: false, message: "Teacher added successfully", data: { name: teacher.name, email: teacher.email } })
        }
        res.status(409).json({ error: true, message: "Teacher already exist" })
    }
    catch (err) {
        next(err)
    }
}

let loginTeacher = async (req, res, next) => {
    try {
        let { email, password } = req.body

        let isTeacherAvailable = await Teacher.findOne({ email })

        if (!isTeacherAvailable) {
            return res.status(404).json({ error: true, message: "No teacher found at given email" })
        }

        // !line 8
        let hashedPassword = await isTeacherAvailable.compareMyPassword(password)

        // !...
        if (hashedPassword)
        // !....
        // if (password === isTeacherAvailable.password)
        {
            return res.status(201).json({ error: false, message: "Login SuccessFull" })
        }
        else {
            return res.status(401).json({ error: true, message: "Invalid password" })
        }
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    registerTeacher,
    loginTeacher
}