const express = require("express");
const app = express();
app.use(express.json());

app.get("/user/:id", (req,res)=>{
    const id = req.params.id;
    res.send("user id is: " + id);
});

app.listen(3000);