const express = require("express");
const app = express();
app.use(express.json());

let users = [
    {id: 1, name: "Anurag"},
    {id: 2, name: "virat"}
];

app.get("/users", (req,res)=>{
    res.json(users);
});

app.post("/users", (req,res)=>{
    const newUser = {
        id : users.length+1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

app.put("/users/:id", (req,res)=>{
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);
    if(!user) return res.send("not found");

    user.name = req.body.name;
    res.json(user);
});

app.delete("/users/:id", (req,res)=>{
    const id = parseInt(req.params.id);

    users = users.filter(u => u.id !== id);
    res.send("deleted");
});

app.listen(3000, ()=>{
    console.log("server running");
});

