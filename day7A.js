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
    res.json(users);

})

app.post("/api/users", (req,res) =>{
    const newUser = {
        id : users.length+1,
        name : req.body.name 
    };
    users.push(newUser);
    res.status(201).json(newUser);
})

app.put("/api/users/:id", (req,res) =>{

    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user){
     return res.status(404).send("user not found")
    }
    user.name = req.body.name;
    res.json(user);
})


app.delete("/api/users/:id", (req,res) =>{


    const id = parseInt(req.params.id);
    const usersExist = users.some(u => u.id === id);

    if(!usersExist){
        res.status(404).send("user not found");
    }
    users = users.filter(u => u.id !== id);

    res.send("user deleted");

})
app.listen(3000, () =>{
    console.log("server running");
})