const {invitationMail} = require('../Helper/mailHelper');
const Employee = require('../models/employee.model');
const jwt = require('jsonwebtoken')
require('dotenv').config()


let registerEmployee = async (req, res, next) => {
    try {

        let { name, email, password } = req.body;



        //? returns the document if condition satisfies else return null
        let isEmployeeAvailable = await Employee.findOne({ email });

        if (!isEmployeeAvailable) {

            //! Email Code
            invitationMail(email, name)
            //! Email Code
            let employee = await Employee.create({ name, email, password })

            return res.status(201).json({
                error: false, message: "Employee Added Successfully",
                data: { name: employee.name, email: employee.email }
            })
        }
        res.status(409).json({ error: true, message: "Employee Already Exist" })

    }
    catch (err) {
        next(err)
    }
}

let loginEmployee = async (req, res, next) => {
    try {
        let { email, password } = req.body

        let isEmployeeAvailable = await Employee.findOne({ email });

        if (!isEmployeeAvailable) {
            return res.status(404).json({ error: true, message: "No Employee Found with Given Mail Id" })
        }

        let hashedPassword = await isEmployeeAvailable.compareMyPassword(password)

        if (hashedPassword) {
            let token = jwt.sign({ email: isEmployeeAvailable.email, name: isEmployeeAvailable.name },
                process.env.JWT_KEY, { expiresIn: process.env.JWT_EXPIRESIN })
            return res.status(201).json({ error: false, message: "Login Successful", token })
        }
        else {
            return res.status(401).json({ error: true, message: "Invalid Password" })

        }


    }
    catch (err) {
        next(err)
    }
}

let getAllEmployees = async (req, res, next) => {
    try {
        let employees = await Employee.find({}, { _id: 0 });
        return res.status(200).json({
            error: false, message: "Employees Fetched Successfully",
            data: teachers, user: data.name
        })
    }
    catch (err) {
        next(err)
    }
}

module.exports =
{
    registerEmployee,
    loginEmployee,
    getAllEmployees
}