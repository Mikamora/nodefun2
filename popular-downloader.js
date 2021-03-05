const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
let dataPath = path.join(__dirname, "/downloads");
let url = "https://reddit.com/r/popular.json";


rp(url)
.then(html => {
    JSON.parse(html).data.children.forEach(item => {
        if(path.extname("lol.jpg") === path.extname(item) || path.extname("lol.gif") === path.extname(item) || path.extname("lol.png") === path.extname(item)){
            let name = path.posix.basename(item)
            let SaveDatFile = (localStorage) => {
                localStorage.root.getFile(`/downloads/${name}`, {create: true})
            } 
            SaveDatFile();
        }
    })

})
.catch(err => {
    console.error(err);
})
