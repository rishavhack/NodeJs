var express = require('express'); 
var app = express(); 
var port  = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/tutorial',function(err){
	if(err)
	{
		console.log('Not Connected'+err)
	}
	else
	{
		console.log('Success')
	}
});
 app.listen(port,function(){
 	console.log('Running Servver');
 });



/*app.get('/',function(req,res){
	res.send('Hello World');
});*/   //test Purpose


/*app.get('/home',function(req,res){
	res.send('Hello from home')
});*/  //Morgan like-local:8080/home
