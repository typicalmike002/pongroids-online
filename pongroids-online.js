// Application Dependencies:
var express = require('express');
var path = require('path');

// Application Routes:
var routes = require('./routes/index');

// Application framework:
var app = express();

// Application Configuration:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/html'));
app.use(express.static(path.join(__dirname, 'public')));

// Loads routes:
app.use('/', routes);

// Launches Application:
app.listen(app.get('port'), function() {
    console.log(
    'Node server listening on http://localhost:' + app.get('port') + ' in ' + app.get('env') + ' mode.\n' +
    'Press Ctrl-c to terminate this server.');
});

module.exports = app;