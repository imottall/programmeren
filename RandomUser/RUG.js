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
        	"thisistheresult" : "heya"
 		})
        break;
    case 1:
         response.json({
        	"results":[{
			"gender":"male","name":{
				"title":"monsieur","first":"léandre","last":"denis"
			},
			"location":{
				"street":"9290 rue baraban","city":"belmont-sur-lausanne","state":"schwyz","postcode":9026},
			"email":"léandre.denis@example.com","login":{
				"username":"beautifulfish209","password":"ccccccc","salt":"c41KGGP5",
				"md5":"f03846d14ddc2e917635ee17b9e45b07","sha1":"1483beec1e0a1902c13a48018d6da3a944313444",
				"sha256":"dfde8a39ab2e044ce193ce9103448b0a2f38ab028dc4382fb5952fefc9779ec6"},
			"dob":"1956-04-27 16:31:00","registered":"2006-01-04 14:05:35","phone":"(179)-386-1003",
			"cell":"(349)-279-2066","id":{
				"name":"AVS","value":"756.ZSHN.FIFZ.92"}
		}]
 		})
        break;
    case 2:
         response.json({
        	"results":[{"gender":"male","name":{"title":"mr","first":"alex","last":"mora"},"location":{"street":"3760 avenida de andalucía","city":"torrevieja","state":"país vasco","postcode":67011},"email":"alex.mora@example.com","login":{"username":"purpleostrich792","password":"crazybab","salt":"aXjXgHVc","md5":"7cafbe7bb469829d705c41edf7b64575","sha1":"4ae65d7caf41d6382b1f39013293072cbf82b830","sha256":"1a168cac8d22963cb76f8c6ee51cb065e3f8f79397804d236cb99b7e0fe77f4e"},"dob":"1991-04-09 05:01:49","registered":"2015-07-30 07:02:03","phone":"975-855-465","cell":"639-499-397","id":{"name":"DNI","value":"20615558-W"}
		}]
 		})
        break;
    case 3:
        response.json({
			"results":[{"gender":"female","name":{"title":"madame","first":"kelya","last":"roussel"},"location":{"street":"7427 rue de la barre","city":"st-barthélemy vd","state":"genève","postcode":7979},"email":"kelya.roussel@example.com","login":{"username":"greenostrich110","password":"reggie","salt":"5OKjlIe5","md5":"2a52e13e7af94fa9184a2f60b213b9e6","sha1":"58b2a4b36c51e2623151be9d5e168dc72533070f","sha256":"fc38e9068426faa613f56b596473c1622070d5e8ea90dd27f83e900309ff0ffa"},"dob":"1970-01-14 04:03:50","registered":"2014-10-17 07:20:57","phone":"(405)-121-3127","cell":"(744)-780-8448","id":{"name":"AVS","value":"756.MNLF.WUHS.80"}
				   }]
				   })
        break;
    case 4:
        response.json({
			"results":[{"gender":"male","name":{"title":"monsieur","first":"aaron","last":"fleury"},"location":{"street":"2607 rue dugas-montbel","city":"boussens","state":"luzern","postcode":2473},"email":"aaron.fleury@example.com","login":{"username":"whiteleopard140","password":"eminem","salt":"xjK3a3I0","md5":"a675fdc6dfd5f079006ef3e51d881c8e","sha1":"051d2da4e30f4406ec18625047672e2b70f133fc","sha256":"bd22b713106ef229c540ba87e50488143f90a6308f8aab6bb75e84912730a3dc"},"dob":"1979-01-26 15:53:16","registered":"2015-08-17 05:48:00","phone":"(403)-399-4649","cell":"(704)-618-4265","id":{"name":"AVS","value":"756.YPIJ.RKWU.80"}
		}]
 		})
        break;
    case 5:
        response.json({
			"results":[{"gender":"female","name":{"title":"miss","first":"maudi","last":"den uijl"},"location":{"street":"4550 jan pieterszoon coenstraat","city":"goeree-overflakkee","state":"drenthe","postcode":86022},"email":"maudi.denuijl@example.com","login":{"username":"yellowlion527","password":"smiles","salt":"AO8BJpVl","md5":"cf9ca42a3a9587d57993f1fb841758aa","sha1":"afda1fa59faabd6bacb17b1b17d8d647248a6c5c","sha256":"7de7222ee899f15874a1215940cf362079924c3e7154db4f904fb11a1c521312"},"dob":"1971-10-14 13:42:00","registered":"2015-03-17 08:33:02","phone":"(165)-662-2133","cell":"(481)-371-1537","id":{"name":"BSN","value":"20571705"}
				   }]
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
