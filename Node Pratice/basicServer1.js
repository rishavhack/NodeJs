var http= require('http');
var fs = require('fs');

function send404Response(response) {
	response.writeHead(404,{"Context-type":"text/plain"});
	response.write("There is a Error");
	response.end()
}

function onRequest(request,response) {
	if(request.method == 'GET' && request.url == '/')
	{
		response.writeHead(202,{"Context-type":"text/html"});
		fs.createReadStream("./ris.html").pipe(response)
	}
	else{
		send404Response(response);
	}
}

http.createServer(onRequest).listen(8000);
console.log("Server is running")