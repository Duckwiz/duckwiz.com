exports.serve = function (url) {
    app.get(url, (req, res) => {
        res.sendFile(`${__dirname}/public/pages` + url + `.html`)
    })
}