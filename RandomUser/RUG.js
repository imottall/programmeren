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
app.get('/api', function(request, response) {
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
			"results":[{"gender":"female","name":{
				"title":"ms","first":"galaza","last":"araújo"},"location":{
					"street":"2460 rua onze ","city":"hortolândia","state":"bahia","postcode":14838},
				    "email":"galaza.araújo@example.com","login":{
					    "username":"organictiger153","password":"hanson","salt":"lpLzT8vc",
					    "md5":"1c611e7534557f20e2193eb58699fb24","sha1":"e42f09f3f523a5892890c3b980f3caaa9e9e6b81",
					    "sha256":"bc0e5df6e3f4486f68a341c22712505100ab0e331599385fce9077751016e714"},
				    "dob":"1978-10-14 04:00:47",
				    "registered":"2004-02-06 02:28:43","phone":"(85) 9185-7842","cell":"(83) 9590-0595",
				    "id":{"name":"","value":null}
				   }]
 		})
        break;
    case 3:
        response.json({
			"results":[{"gender":"female","name":{"title":"ms","first":"andrea","last":"duran"},"location":
				    {"street":"8584 calle de arturo soria","city":"cuenca","state":"aragón","postcode":36620}
				    ,"email":"andrea.duran@example.com","login":
				    {"username":"brownelephant778","password":"forget","salt":"2Og9CnUW",
				     "md5":"5255f50ec2e630a30e6c4fb1708edbc3","sha1":"fd275efa3adfbd8f2872d1f1c9743bd7aac78afa",
				     "sha256":"69ea13168431396f9769fafd0b940839692ee515c5f9bb827e211efdd1ac7539"},
				    "dob":"1949-03-01 21:21:36","registered":"2005-10-30 22:30:42","phone":"922-170-567",
				    "cell":"608-007-007","id":{"name":"DNI","value":"66738959-L"}
				   }]
 		})
        break;
    case 4:
        response.json({
			"results":[{"gender":"female","name":{"title":"mrs","first":"lorraine","last":"peck"},
				    "location":{"street":"6160 fincher rd","city":"corona","state":"california","postcode":29558},
				    "email":"lorraine.peck@example.com","login":{
					    "username":"redpeacock297","password":"bubbas","salt":"J9f9ioWG",
					    "md5":"06f44a05f84cdd9a5a7a59e2b514ceb2","sha1":"dfe5746218cc4d6d9c28517d7e37d4ac5e0097f3",
					    "sha256":"0131e51bfb31183bb1a34580d9966f1a7ee23f8e7a1d757d78746e05d7444e79"},
				    "dob":"1969-12-09 07:12:37","registered":"2008-09-12 05:00:04","phone":"(373)-379-3101",
				    "cell":"(433)-854-5527","id":{"name":"SSN","value":"902-26-3191"}
				   }]
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
