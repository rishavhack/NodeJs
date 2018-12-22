const EventEmitter = require('events');

//Register a Listener
//emitter.on('messageLogged',function(arg){
//	console.log('Listener Called',arg);
//});

//on, addListener are same

//Raise en event
// emitter.emit('messageLogged',{id:1,url:'ww.go.com'});



//ES6 Arrow Function

//	emitter.on('messageLogged',(arg) => {
//		console.log('Listener Called',arg);
//	});

const log = require('./eventLogger');
const logger = new log();


logger.on('messageLogged',function(arg){
	console.log('Listener Called',arg);
});


logger.log('message')
