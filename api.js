const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

app.use(express.static('public'));

app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/about.html`)
})

app.get("/game", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/game.html`)
})