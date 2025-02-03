const express = require("express");
const fs = require('node:fs');
const app = express();

let visits = 0;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

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