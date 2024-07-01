const express = require('express');
let app=express();

let students=[];

app.use(express.json());

app.post("/addstudent",(req,res,next)=>{
    let{id,name,age}=req.body;
    if(!id || !name || !age)
    {
        return res.status(403).json({error:true,message:"All Feilds are mandatary",data:null});
    }
    students.push(req.body);
    // res.status(201).json({error:false,message:"Student added successfully",data:req.body})
     res.status(201).json({error:false,message:"Student added successfully",data:{id,name,age}})
})

app.get("/getstudents",(req,res,next)=>{
    if(students.length === 0)
    {
        return res.status(404).json({error:true,message:"NO students available",data:null})
    }
    res.status(200).json({error:false,message:"All students are fetched succesfully",data:students})
})

app.get("/getstudent/:sid",(req,res,next)=>{

    let {sid} = req.params
    let singleStudent=students.find(student=>{
        return student.id===sid
    })
    if(!singleStudent){
        return res.status(404).json({error:true,message:`No students found with Given ID ${sid}`})
    }
    res.status(200).json({error:false,message:"Student fetched Successfully",data:singleStudent})
})

app.put("/updatestudent/:sid",(req,res,next)=>{
    let {sid}=req.params;
    let {name,age}=req.body;

    let singleStudent=students.find(student=>{
        return student.id===sid
    })
    console.log(singleStudent);

    if(!singleStudent)
    {
        return res.status(404).json({error:true,message:`No students found with Given ID ${sid}`})
    }
    singleStudent.name=name;
    singleStudent.age=age;
    res.status(201).json({error:false,message:"Student updated successfully",data:singleStudent})
})

app.delete("/deletestudent/:sid",(req,res,next)=>{
    let {sid}=req.params;

    let singleStudent=students.find(student=>
        {
        return student.id===sid;
    })
    console.log(singleStudent);

    if(!singleStudent)
    {
        return res.status(404).json({error:true,message:`No students found with Given ID ${sid}`}) 
    }
    let filtredStudents=students.filter(student=>{
        return student.id!==sid
    })
    students=filtredStudents
    res.status(201).json({error:false,message:"Student deleted successfully",data:students})
})

app.listen(1000,(err)=>{
    if(err)throw err
    console.log("Server running at port 1000");
})
// .....................................................

