const express = require("express");
const fs = require('node:fs');
const app = express();

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
    fs.readFile(`${__dirname}/data/visits.txt`, (err, data) => {
        console.log(data.toString());
    })
    res.json({ "msg": 0 })
})