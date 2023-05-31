const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

// app.get("/", async (req, res) => res.send(await readFile("/public/index.html", utf8)));

app.get("/", (req, res) => res.type('html').send(html));

const html = `
<!DOCTYPE html>
<html>
    <head>
      <link rel="icon" href="/images/icon.png">
      <link href ="/style/style.css" rel="stylesheet">
      <title>duckwiz</title>
      <script type="text/javascript" src="/scripts/script.js" defer></script>
    </head>

    <body>
      <header>
        <img src="/images/logo.png" alt="logo" id="logo">
        <nav>
          <a href="/index">home</a>
          <a href="/pages/about">about</a>
          <a href="/pages/game">game</a>
        </nav>
      </header>
      <main>
        <h1>Welome!!!!!!</h1>
        <p>here: <span id="msg">-</span></p>
      </main>
      <footer>
      </footer>
    </body>
</html>
`