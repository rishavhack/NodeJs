//(function (exports, require, module, __filename, __dirname)

console.log(__filename)
console.log(__dirname)
var url = 'http://mylogger.io/log';

function log(message){
	//Send an HTTP request
	console.log(message);
}

module.exports.log = log;
//module.export.endPoint = url
//module.exports = log; if we write like this 
//then in app.js const log = require('./logger')
//And log('message') means log is function