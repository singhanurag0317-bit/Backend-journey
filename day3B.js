const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/user"){
        res.statusCode = 200;
        const user = {
            name : "Anurag",
            role : "Developer"
        };

        res.end(JSON.stringify(user));
    }
});
server.listen(3000);