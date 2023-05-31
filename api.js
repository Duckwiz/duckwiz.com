const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

app.get("/", (req, res) => res.send(readFile("/public/index.html", utf8)));