const express = require("express");
const app = express();

app.use(express.json());

let users = [
    {id : 1, name : "anurag"},
    {id: 2, name : "virat"}
]

app.post("/api/users", (req, res) => {

    if (!req.body.name) {
        return res.status(400).send("Name required");
    }

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

app.listen(3000, () =>{
    console.log("server is running");
})