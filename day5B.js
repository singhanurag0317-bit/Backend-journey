const express = require("express");
const app = express();

app.use("/api", (req, res, next) =>{
    console.log("API middleware running");
    next();
});

app.get("/", (req,res) =>{
    res.send("home page");
})

app.get("/api", (req, res) =>{
    res.send("api home");
})

app.get("/api/users", (req, res) =>{
    res.send("users api");
})

app.listen(3000, () =>{
    console.log("server is running");
})