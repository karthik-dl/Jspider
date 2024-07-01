// const fs=require('fs');

// !writeStream are used to write the data the file
// let writeStream=fs.createWriteStream("./demo.txt");
// writeStream.write("Welcome to India",err=>{
//     if(err)throw err
//     console.log("Data inserted Successfully");
// })

// !readStream() is used to read the file
// let readStream=fs.createReadStream("./demo.txt","utf8");
// readStream.on("data",chunk=>{
//     console.log(chunk);
//     })
//     readStream.on("error",err=>{
//         console.log(err);
// })

// !duplexStream()
// let writeStream=fs.createWriteStream("./text.txt");

// let readStream=fs.createReadStream("./demo.txt","utf8");
// readStream.pipe(writeStream);


// ...........................................................................................


const fs=require('fs');
// fs.writeFile("./nont.txt","Hello world",(err)=>{
//     if(err) throw err
//     console.log("file is created");
// })

// fs.readFile("./nont.txt",(err,data)=>{
//     if(err) throw err
//     console.log("file is readed",data.toString());
// })

// fs.appendFile("./nont.txt","Hello Bangalore",(err)=>{
//     if(err) throw err
//     console.log("yes");
// })

// fs.rename("./nont.txt","./sam.txt",(err)=>{
//     if(err) throw err
//     console.log("file is renamed");
// })

// fs.mkdir("New",err=>{
//     if(err) throw err
//     console.log("New folder created");
// })

// fs.rmdir("New",err=>{
//     if(err) throw err
//     console.log("New folder deleted");
        
    
// })

// let writeStream=fs.createWriteStream("Winter.txt")
// writeStream.write(" Bangalore is an IT world",err=>{
//     if(err) throw err
//     console.log("Data inserted success");
// })

// let readStream=fs.createReadStream("Winter.txt","utf8")
// readStream.read("data",chunk=>{
//     {
//         console.log(chunk);
//     }
//     readStream.on("error",err=>{
//         console.log(err);
//     })
// })

let writeStream=fs.createWriteStream("./sam.txt")

let readStream=fs.createReadStream("./Winter.txt","utf8")

readStream.pipe(writeStream)
