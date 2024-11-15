const express = require("express");
const fs = require('node:fs');
const app = express();

let visits = 0;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

app.use(express.static('public'));

app.get("/game", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/game.html`)
})

app.get("/sillies", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/sillies.html`)
})

app.get("/hello", (req, res) => {
    fs.readFile(`${__dirname}/data/visits.txt`, "utf8", (err, data) => {
        res.json({ "msg": data })
        visits = data;
    })
    fs.writeFile(`${__dirname}/data/visits.txt`, visits + 1, err => {
        if (err) throw err;
    })
})