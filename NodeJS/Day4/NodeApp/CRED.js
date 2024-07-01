const http = require("http");
const fs = require("fs");

let students = [];
let homepage = fs.readfileSync("./cred.html", "utf8");
let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(homepage);
    }
    else if (req.url === "/addStudent" && req.method === "POST")
    {
        req.on("data", (chunk) => {
      console.log("data", chunk.toString());

      students.push(JSON.parse(chunk.toString()));
      res.writehead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: false, message: "Student Added Successfully" })
      );
    });
    }
    else if (req.url === "/getstudents")
    {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
    }
    else
    {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Page not found");
    }
});

server.listen(3100, (err) => {
  if (err) throw err;
  console.log("Server running at PORT 3100");
});
