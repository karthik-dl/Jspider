const http=require('http');
const fs=require('fs');

// !Displaying the Data from frontend i.e reading data from html
// let homepage=fs.readFileSync("./index.html","Utf8")
// let server=http.createServer((req,res)=>{
//     if(req.url==="/")
//     {
//         res.writeHead(200,{"Content-Type": "text/html"});
//         res.end(homepage)
//     }
//     else if(req.url==="/getstudents")
//     {
//         res.writeHead(200,{"Content-type":"application/json"})
//         fs.createReadStream("./data.json").pipe(res);
//     }
//     else{
//         res.writeHead(404,{"Content-Type":"text/html"});
//         fs.createReadStream("./pnf.html").pipe(res);
//     }
// })
// server.listen(3500,(err)=>{
//     if(err)throw err
//     console.log("Server is running on PORT 3500");
// })

let page=fs.readFileSync("./index.html","Utf8")
let server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-type": "text/html"})
        res.end(page)
    }
    else if(req.url==="/getstudents"){
        res.writeHead(200,{"Content-type":"application.json"})
        fs.createReadStream("./data.json").pipe(res)
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        fs.createReadStream("./pnf.html").pipe(res)
    }

})
server.listen(500,(err)=>{
    if (err) throw err
    console.log("Server running at successfully")
})