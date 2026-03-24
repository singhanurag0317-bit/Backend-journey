const express = require("express");
const app = express();

app.get("/" , (req,res) =>{
    res.send("welcome page");
});

app.get("/about" , (req,res) =>{
    res.send("about page");
})

app.get("/contact", (req,res) =>{
    res.send("contact page");
})


app.get("/api" , (req,res) =>{
    res.json({
        name : "Anurag",
        role : "Developer"
    });
});

app.get("/products", (req,res) =>{
    const products = [
        { id:1, name: "anurag"},
        { id:2, name: "dushyant"}
    ];
    res.json(products);
});

app.listen(3000, () =>{
    console.log("server running")
})