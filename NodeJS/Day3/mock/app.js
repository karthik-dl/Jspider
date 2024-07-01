const fs = require('fs');
// fs.writeFile("./test.txt","Welcome",(err=>{
//     if(err) throw err
//     console.log("data written successfully")
// }))

// fs.readFile("./test.txt","utf-8",(err)=>{
//     if(err) throw err
//     console.log("data read successfully")
// })

// fs.rename("./test.txt" , "Sample.txt",(err)=>{
//     if(err) throw err
//     console.log("file rename succesfully")
// })

// fs.unlink("./Sample.txt",(err)=>{
//     if(err) throw err
//     console.log("file deleted successfully")
// })

// fs.mkdir("Hello",(err)=>{
//     if(err) throw err
//     console.log("Folder created successfully")
// })

// fs.rmdir("./Hello",(err)=>{
//     if(err) throw err
//     console.log("file deleted successfully")
// })

// let writeStream=fs.createWriteStream("./demo.txt")
// writeStream.write("India successfully hosted chandrayana 3") ,(err)=>{
//     throw err
//     console.log("File created and data inserted successfully")

// }
// let readStream=fs.createReadStream("./demo.txt","utf-8")
// readStream.on("data", chunk=>{
 
//     console.log(chunk)
// })
// readStream.on("error" ,err=>{
// console.log(err)
// })

let writeStream=fs.createWriteStream("./text.txt")
// writeStream.write("data written successfully")
let readStream=fs.createReadStream("./demo.txt","utf8")

readStream.pipe(writeStream)
