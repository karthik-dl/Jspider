const Student = require('../models/student.model');
let addStudent = async (req, res, next) => {
    let { name, age, gender } = req.body

    // !create method adds the data and return added data

    let newStudent = await Student.create({ name, age, gender })
    res.status(201).json({ error: false, message: "Student added successfully", data: newStudent })
}
// !get all students

let getStudents = async (req, res, next) => {
    let allStudent = await Student.find()
    res.status(200).json({ error: false, message: "Student data gets Successfully", data: allStudent })

    res.send(allStudent)

}

let getSingleStudent = async (req, res, next) => {

    let { sid } = req.params;
    let singleStudent = await Student.findOne({name: sid})
    if (!singleStudent) {
        return res.status(201).json({ error: true, message: "Student data not found", data: null })
    }
    return res.status(200).json({ error: false, data: singleStudent })
}

// !update student

let editStudent = async (req, res, next) => {
    let { name, age, gender } = req.body;
    let { sid } = req.params;

    let singlestudent = await Student.findById(sid)

    // !Checking whether the student is available or not
    if (!singlestudent) {
        res.status(200).json({ error: true, message: `No student found in the given ${sid}`, data: null })
    }
    let updateStudent = await Student.findOneAndUpdate({ _id: sid }, { name, age, gender }, { new: true })
    // console.log(req.body);

    // console.log(req.params);

    res.status(201).json({ error: false, message: `${updateStudent.name.toUpperCase()} age Updated from ${singlestudent.age} Successfully`, data: updateStudent })

}

// ! Deleting single student

let deleteStudent = async (req, res, next) => {

    //sid is having id
    let { sid } = req.params
    let isAvailable = await Student.findById(sid)

    if (isAvailable) {
        return res.status(404).json({ error: true, message: `No student found at given ID ${sid}`, data: null })
    }

    let deletestudent = await Student.findOneAndDelete(sid)
    res.status(200).json({ error: false, message: `Student Deleted successfully`, data: deletestudent })
}

module.exports = {
    addStudent,
    getStudents,
    getSingleStudent,
    editStudent,
    deleteStudent

}