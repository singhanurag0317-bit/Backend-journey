const http = require("http");

const server = http.createServer((req,res)=>{
   console.log("Method: ", req.method);
   console.log("URL: ", req.url);

    res.end("check terminal");

})
server.listen(3000, ()=>{
    console.log("server is running on port 3000");
});