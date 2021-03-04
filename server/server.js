let path = require("path");
let fs = require("fs");
let dataPath = path.join(__dirname, "../chirps.json");

let chirps = [
    {
        name: "mikamora",
        body: "hello im mikamora"
    },
    {
        name: "kiaemi",
        body: "Hello my name is Kiaemi"
    },
    {
        name: "turtles",
        body: "Hello my name is turtles"
    }
]

fs.writeFile(dataPath, JSON.stringify(chirps), err => {
    if(err) console.error(err);
})

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    console.log(JSON.parse(data));
})