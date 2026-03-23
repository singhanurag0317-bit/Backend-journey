const http = require("http");

const server = http.createServer((req, res) => {
    
    console.log(req.url);

    if(req.url === "/"){
        res.end("welcome page");
    }
    else if(req.url === "/about"){
        res.end("about me page");
    }
    else if(req.url === "/contact"){
        res.end("contact me page");
    }
    else{
        res.end("not found");
    }
});
server.listen(3000);
