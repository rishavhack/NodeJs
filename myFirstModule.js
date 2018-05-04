var http = require('http');
var dt = require('./module');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("The date : "+ dt.myDateTime());
	res.write("My name is in Console :"+ dt.myCons());
	res.end();
}).listen(8080);