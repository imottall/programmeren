var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var forced = 8;

app.get('/', function(request, response) {
 response.send('Hello Avans!');
})
app.get('/about', function(request, response) {
 response.send('Written by <jouw naam hier invullen>');
})

app.all('*', function(request, response) {
 response.status(404);
 response.send('404 -Not found');
})
app.listen(port, function() {
 console.log('Server app is listening on port ' + port);
})
