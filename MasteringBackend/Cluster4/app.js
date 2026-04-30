const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

// connectig mongodb
mongoose.connect("mongodb://localhost:27017")
.then(()=> console.log("mongodb connected"))
.catch(err => console.log(err))

// schema
const userSchema = new mongoose.Schema({
    name : String,
    age : Number
});

// model
const User = mongoose.model("User", userSchema);

//create user
app.post("/users", async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

// get users
app.get("/users", async(req,res) =>{
    const users = await User.find();
    res.json(users);
});

//update user
app.put("/users/:id", async(req,res)=>{
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    );
    res.json(user);
});

//delete user
app.delete("/users/:id", async(req,res)=>{
    const id = req.params.id;

    await User.findByIdAndUpdate(id);
    res.send("deleted");
});

app.listen(3000, ()=>{
    console.log("server running");
});