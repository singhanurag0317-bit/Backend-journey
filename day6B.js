const express = require("express");
const app = express();

app.use(express.json());

app.post("/user", (req,res) =>{
    console.log(req.method, req.url);
    res.json({
        message: "User created", 
        data : req.body
    });
    
})
app.listen(3000, () =>{
    console.log("server running");
});