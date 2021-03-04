const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
let dataPath = path.join(__dirname, "popular-articles.json")
let newArray = [];

rp("https://reddit.com/r/popular.json")
    .then((html) => {
        JSON.parse(html).data.children.forEach(item => {
            newArray.push({
                title: item.data.title,
                url: item.data.url,
                author: item.data.author
            })
        })
        fs.appendFileSync(dataPath, (JSON.stringify(newArray) + "\n"));

    })
    .catch(err => {
        console.error(err);
    })