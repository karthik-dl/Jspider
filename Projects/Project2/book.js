 const http= require('http');
const fs= require('fs');

let show=fs.readFileSync("./bookmyshow.html","utf8")
 let server=http.createServer((req, res)=>{
    if(req.url==='/')
    {
        res.writeHead(200,{"Content-Type": "text/html"});
        res.end(show)
    }
    else if(req.url==='/css')
    {
        res.writeHead(200,{"Content-Type": "text/css"});
        fs.createReadStream("./bookmyshow.css").pipe(res);
    }
    else{
        res.writeHead(404,{"Content-Type": "text/png"});
        fs.createReadStream("./logo.png").pipe(res)
    }
 })
 server.listen(8000,(err)=>{
    if(err) throw err
    console.log("Server is running PORT 8000");
 })