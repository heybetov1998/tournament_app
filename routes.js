const express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    console.log('tested');
    // res.render('index');
})

module.exports = router;