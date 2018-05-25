var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('Hello World');
}).listen(8080);

var robot = require("robotjs");
 
// Speed up the mouse.
robot.setMouseDelay(2);
 
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
 
for (var x = 0; x < width; x++)
{
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
}