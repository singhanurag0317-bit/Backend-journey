const http = require("http");
const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("welcome");
    }
    else if(req.url === "/about"){
        res.end("about page");
    }
    else if (req.url === "/api"){
        const data = {
            success : true,
            message : "api is working"
        };
        
        res.end(JSON.stringify(data));
    }
     else{
            res.end("404 Not found");
        }
});

server.listen(3000);