var http= require('http');
function onRequest(request,response) {
	console.log("A user made a request" +request.url);
	response.writeHead(202,{"Context-type":"text/plain"});
	response.write("Here is your response");
	response.end()
}

http.createServer(onRequest).listen(8000);
console.log("Server is running")