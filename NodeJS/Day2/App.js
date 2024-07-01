const fs=require("fs");

// !How to create file--fs.writeFile()
// fs.writeFile("karthi.txt"," Welcome to Nodejs",(err)=>{
//     if(err) throw err
//     console.log("Data inserted succesfully");
// });

// ! in appendFile() we add the data into the what we created file for that
// fs.appendFile("karthi.txt"," and Reactjs also","utf8",(err)=>{
    // if(err) throw err;
    // console.log("Data added succesfully");
// })

// !readFile()--it will  read the file
// fs.readFile("karthi.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log("Data read succesfully",data.toString());
// })

// !renameFile()--it will rename the file
// fs.rename("karthi.txt","hsn.txt",(err)=>{
//     if(err) throw err;
//     console.log("file rename succesfully");
// })

// ! unlink()--this method is used to delete the file
// fs.unlink("hsn.txt",(err)=>{
//     if(err) throw err;
//     console.log("File deleted succesfully");
// })

// !mkdir()--this method is used to create new folder
// fs.mkdir("Hassan",(err)=>{
//     if(err) throw err;
//     console.log("File is created succesfully");
// })

// ! rmdir()--this method is used to delete the folder

// fs.rmdir("./Hassan",(err)=>{
//     if(err) throw err;
//     console.log("Folder deleted succesfully");
// })

// ! folder rename 
// fs.rename("./Hassan","Alur",(err)=>{
//     if(err) throw err;
//     console.log("Folder rename succefully");
// })


// &..........By using sync keyword
// !create file
// fs.writeFileSync("karthi.txt"," Welcome to Nodejs",(err)=>{
//     if(err) throw err
//     console.log("Data inserted succesfully");
// });

// ! in appendFile() we add the data into the what we created file for that
// fs.appendFileSync("karthi.txt"," and Reactjs also","utf8",(err)=>{
//     if(err) throw err;
//     console.log("Data added succesfully");
// })

// !readFile()--it will  read the file
// fs.readFileSync("karthi.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log("Data read succesfully",data.toString());
// })

// !renameFile()--it will rename the file
// fs.rename("karthi.txt","skp.txt",(err)=>{
//     if(err) throw err;
//     console.log("file rename succesfully");
// })

// ! unlink()--this method is used to delete the file
// fs.unlink("skp.txt",(err)=>{
//     if(err) throw err;
//     console.log("File deleted succesfully");
// })

// !mkdir()--this method is used to create new folder
// fs.mkdir("DKL",(err)=>{
//     if(err) throw err;
//     console.log("File is created succesfully");
// })

// ! rmdir()--this method is used to delete the folder

fs.rmdir("./DKL",(err)=>{
    if(err) throw err;
    console.log("Folder deleted succesfully");
})

// ! folder rename 
// fs.rename("./Hassan","Alur",(err)=>{
//     if(err) throw err;
//     console.log("Folder rename succefully");
// })

