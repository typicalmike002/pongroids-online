var express = require('express');
var router = express.Router();

// Basic Example:
router.get('/', function(req, res) {
	res.render('index');
});

module.exports = router;