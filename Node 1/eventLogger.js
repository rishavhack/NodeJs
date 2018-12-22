const EventEmitter = require('events');

var url = 'http://www.google.com';

class Logger extends EventEmitter{


	 log(message){
		//Send an HTTP request
		console.log(message);
		//Raise event
		this.emit('messageLogged',{id:1,url:'ww.go.com'});
	}
}
module.exports = Logger;