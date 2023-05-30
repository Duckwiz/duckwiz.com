const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => res.send('Hello World!'));

// Add more routes as needed
// router.get('/example', (req, res) => res.send('Example route'));

module.exports = router;