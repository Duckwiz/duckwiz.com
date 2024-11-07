const express = require("express");
const app = express();

let visits = 0;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

app.use(express.static('public'));

app.get("/game", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/game.html`)
})

app.get("/hello", (req, res) => {
    res.json({"msg": visits})
    visits ++;
})