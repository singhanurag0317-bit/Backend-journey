const express = require("express");
const app = express();

app.use((req, res, next) =>{
    console.log(req.method, req.url);
    next();
});

app.use((req,res,next) =>{
    console.log("second middleware");
    next();
})


app.get("/",  (req,res) =>{
    res.send("welcome admin");
})

app.listen(3000, () =>{
    console.log("server is running");
})