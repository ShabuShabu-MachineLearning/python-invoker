const express = require('express');
const router = express.Router();
const python = require('../service/call-python');

/* GET home page. */
router.get('/', function(req, res, next) {
    const hello = {
        text: 'hello'
    };

    res.send(hello);
});

module.exports = router;
