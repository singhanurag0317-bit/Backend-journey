const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("welcome to home page");


});

app.get("/api", (req,res)=>{
    res.json({
        name : "Anurag", 
        role : "developer"
    });
});

app.post("/user", (req,res)=>{
    const user = req.body;
    console.log(user);

    res.send("user recieved");
})

app.listen(3000);