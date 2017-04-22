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
app.get('/json', function(request, response) {
	var rand = Math.floor((Math.random() * 5) + 1);
	switch (rand) {
    case 0:
        response.json({
        	"name":"Johan"
 		})
        break;
    case 1:
        response.json({
			"name":"Yoyo"
 		})
        break;
    case 2:
        response.json({
			"name":"Weeeee"
 		})
        break;
    case 3:
        response.json({
			"name":"Killua"
 		})
        break;
    case 4:
        response.json({
			"name":"Gon"
 		})
        break;
    case 5:
        response.json({
			"name":"Hisoka"
 		})
        break;
	}
})
app.all('*', function(request, response) {
 response.status(404);
 response.send('404 -Not found');
})
app.listen(port, function() {
 console.log('Server app is listening on port ' + port);
})
