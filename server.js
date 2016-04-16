// Application Dependencies:
var express		= require('express'),
	path 		= require('path'),
	socket_io	= require('socket.io');

// Application framework:
var app = express();

// Application Configuration:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/html'));
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io
var io = socket_io();
app.io = io;

// Application Routes:
var routes = require('./routes/index')(io);
app.use('/', routes);

// Launches Application:
app.listen(app.get('port'), function() {
    console.log(
    'Node server listening on http://localhost:' + app.get('port') + ' in ' + app.get('env') + ' mode.\n' +
    'Press Ctrl-c to terminate this server.');
});

module.exports = app;