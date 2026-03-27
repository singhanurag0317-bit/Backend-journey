const express = require("express");
const app = express();

function checkadmin(req, res, next){
    const user = "admin";

    if(user === "admin"){
        next();
    }
    else {
        res.send("accesss denied");
    }
}
app.get("/admin", checkadmin,  (req,res) =>{
    res.send("welcome admin");
})

app.listen(3000, () =>{
    console.log("server is running");
})