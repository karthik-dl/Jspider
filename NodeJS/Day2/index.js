const fs=require("fs");

// fs.mkdir("Project",(err)=>{
//     if(err) throw err;
//     console.log("Project folder created successfully");
// })


// ! file is created and data also inserted  "sample.txt" this is file and  hello bangalore this is the data
// fs.writeFile("./Project/Sample.txt","Hello Bangalore",(err)=>{
//     if(err) throw err;
//     console.log("Sample file created");
// })

// ! here file is readed 
// fs.readFile("./Project/Sample.txt" , "utf8",(err,data)=>{
//     let string=data
//     if(err) throw err
//     else{
//         fs.writeFile("./Project/demo.txt",string, (err)=>{
//             if(err) throw err;
//         })
//     }
// })

// !renaming the file as Sample.txt to text.txt
// fs.rename("./Project/Sample.txt","text.txt",(err)=>{
//     if(err) throw err
//     console.log("File as renamed succesfully");
// })


// ! delete the file by using unlink()
// fs.unlink("./Project/demo.txt",(err)=>{
//     if(err) throw err
//     console.log("File successfully deleted");
// })

// !rmdir() is used to delete the folder