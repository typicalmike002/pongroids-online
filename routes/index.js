module.exports = function(io){
	var express = require('express');
	var router = express.Router();

	// Basic Example:
	router.get('/', function(req, res) {
		res.render('index');
	});

	io.on('connection', function(socket) {
		
		socket.on('message', function(data) {
			socket.emit('news', { hello: 'world' });
		});
	});
	
	return router;
}