const fs = require("fs");

fs.writeFile("myfile.txt", "Hello Anurag", (err) =>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("file created successfully");
    }

    fs.readFile("myfile.txt", "utf8", (err, data) => {
        if(err){
            console.log("error occured");

        }
        else{
            console.log("file content: " , data);
        }
    });

});

const path = require("path");

const filepath = path.join(__dirname, "myfile.txt");
console.log(filepath);

const os = require("os");
console.log(os.platform());
console.log(os.cpus());