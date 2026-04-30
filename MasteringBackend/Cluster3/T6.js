const express = require("express");
const app = express();
app.use(express.json());

app.get("/search", (req,res)=>{
    const name = req.query.name;
    res.send("searching for: " + name);
});

app.listen(3000);