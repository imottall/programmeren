var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var forced = 8;

app.get('/', function(request, response) {
 response.send('Hello Avans!');
})
app.get('/about', function(request, response) {
	Log.d("Rand=","");
 response.send('Written by <jouw naam hier invullen>');
})
app.get('/json', function(request, response) {
	var rand = Math.floor((Math.random() * 5));
	switch (rand) {
    case 0:
        response.json({
        	"results":[{"gender":"female","name":{
			"title":"miss","first":"maudi","last":"den uijl"
		},"location":{
			"street":"4550 jan pieterszoon coenstraat","city":"goeree-overflakkee","state":"drenthe","postcode":86022
		},"email":"maudi.denuijl@example.com","login":{
			"username":"yellowlion527","password":"smiles","salt":"AO8BJpVl","md5":"cf9ca42a3a9587d57993f1fb841758aa",
			"sha1":"afda1fa59faabd6bacb17b1b17d8d647248a6c5c",
			"sha256":"7de7222ee899f15874a1215940cf362079924c3e7154db4f904fb11a1c521312"},
			    "dob":"1971-10-14 13:42:00","registered":"2015-03-17 08:33:02",
			    "phone":"(165)-662-2133","cell":"(481)-371-1537","id":{
				    "name":"BSN","value":"20571705"
			    }
			   }]
 		})
        break;
    case 1:
        response.json({
			"results":[{"gender":"male","name":{
				"title":"mr","first":"mitchell","last":"peters"
			},"location":{"street":"9701 south street","city":"wells","state":"cornwall","postcode":"F9 2AQ"},
				    "email":"mitchell.peters@example.com","login":
				    {"username":"silvermouse747","password":"housewife","salt":"hSZ0LufX",
				     "md5":"ac17a6162b0a91cb57f6537bb448843d","sha1":"a633dc05349061c25a5ef79e6fa482432ba257b2",
				     "sha256":"fb2a5a94117f82f5d2fed624128f4b8c57bab3c66f9623762671abe9b52bccd6"},
				    "dob":"1967-06-01 15:45:17","registered":"2007-01-16 18:37:15","phone":"0116112 457 4251",
				    "cell":"0700-315-608","id":{"name":"NINO","value":"HL 20 11 73 U"}
				   }]
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
	Log.d("Rand=","" + rand);
 response.status(404);
 response.send('404 -Not found');
})
app.listen(port, function() {
 console.log('Server app is listening on port ' + port);
})
