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
        	{"results":[{"gender":"male","name":{"title":"monsieur","first":"léandre","last":"denis"},"location":{"street":"9290 rue baraban","city":"belmont-sur-lausanne","state":"schwyz","postcode":9026},"email":"léandre.denis@example.com","login":{"username":"beautifulfish209","password":"ccccccc","salt":"c41KGGP5","md5":"f03846d14ddc2e917635ee17b9e45b07","sha1":"1483beec1e0a1902c13a48018d6da3a944313444","sha256":"dfde8a39ab2e044ce193ce9103448b0a2f38ab028dc4382fb5952fefc9779ec6"},"dob":"1956-04-27 16:31:00","registered":"2006-01-04 14:05:35","phone":"(179)-386-1003","cell":"(349)-279-2066","id":{"name":"AVS","value":"756.ZSHN.FIFZ.92"},"picture":{"large":"https://randomuser.me/api/portraits/men/29.jpg","medium":"https://randomuser.me/api/portraits/med/men/29.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/29.jpg"},"nat":"CH"}],"info":{"seed":"d56b127deb5740a0","results":1,"page":1,"version":"1.1"}}
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
