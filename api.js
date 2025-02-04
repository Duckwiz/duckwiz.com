const express = require("express");
const fs = require('node:fs');
const webpage = require("./privatescripts/webpage")
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

let visits = 0;

app.use(express.static('public'));

app.get("/gallery", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/gallery.html`)
})

app.get("/projects", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/projects.html`)
})

app.get("/hello", (req, res) => {
    fs.readFile(`/data/visits.txt`, "utf8", (err, data) => {
        visits = parseInt(data) + 1;
        fs.writeFile(`/data/visits.txt`, visits.toString(), (err) => {
            res.json({ "msg": visits })
        })
    })
})