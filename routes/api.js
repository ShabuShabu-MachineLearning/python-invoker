const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({dest: './uploaded/'});

router.post('/picture_classification', upload.single('fieldName'), function (req, res) {
    const tags = [];
    res.send(tags);
});

module.exports = router;