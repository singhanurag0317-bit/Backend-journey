const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        const data = fs.readFileSync("index.html");
        res.writeHead(200, {"content-type" : "text/html"});
        res.end(data);
    } else {
        res.end(404);
    }
});

server.listen(3000);