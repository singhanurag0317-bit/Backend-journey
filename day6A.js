const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req,res) =>{
    console.log(req.body);
    res.send("login recieved");
})
app.listen(3000, () =>{
    console.log("server running");
})