const express = require("express");
const app = express();

app.get("/", async (req, res) => res.send(await readFile("./public/index", utf8)));