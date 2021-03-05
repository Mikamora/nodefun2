const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
let dataPath = path.join(__dirname, "popular-articles.json")
let newArray = [];

// const options = {
//     uri: "https://fakeweb.com/.json",
//     json:true //automatically parses the data into a json string on response. so now we could plug in options to rp, instead of the link 
// }

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