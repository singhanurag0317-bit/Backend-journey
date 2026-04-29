const fs = require("fs");

fs.writeFileSync("test.txt", "hello anurag");

fs.appendFileSync("test.txt", "\nNext line is added")

const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);