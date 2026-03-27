const express = require("express");
const app = express();

app.use((req, res, next) =>{
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("home")
});

app.get("/about", (req, res) =>{
    res.send("about page");
});

app.listen(3000, () =>{
    console.log("server is running");
})