const express = require("express");
const app = express();

app.use(express.json());

let users = [
    {id : 1, name : "anurag"},
    {id: 2, name : "virat"}
]

app.get("/api/users", (req,res) =>{
    res.json(users);
});

app.get("/api/users/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user){
        return res.status(404).send("user not found");
    }
    res.json(user);
})

app.listen(3000, () =>{
    console.log("server running");
})