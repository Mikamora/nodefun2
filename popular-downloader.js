const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
let dataPath = path.join(__dirname, "/downloads");
let reddit = "https://reddit.com/r/popular.json";

const options = {
    uri: "https://reddit.com/r/popular.json",
    json: true //automatically parses the data into a json string on response. so now we could plug in options to rp, instead of the link 
}

rp(options)
    .then((html) => {
        html.data.children.forEach(item => {
            const e = path.extname(item.data.url);
            const reqImageOptions = {
                uri: item.data.url,
                encoding: "base64"
            }
            if (e === ".jpg" || e === ".gifv" || e === ".png") {
                rp(reqImageOptions)
                .then(image => {
                    fs.writeFile(`./downloads/${item.data.id}${e}`, image, "base64", (err) => {
                        if (err) console.error(err);
                    })
                })
            }
        });
    })
    .catch(err => {
        console.error(err);
    })