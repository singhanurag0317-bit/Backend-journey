const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) =>{
    console.log(req.method);
    res.send("login received");
})

app.listen(3000, ()=>{
    console.log("server is running");
})