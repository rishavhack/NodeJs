var express = require('express'); 
var app = express(); 
var port  = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


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

 app.post('/users',function(req,res){
 	//res.send('Testing'); to check in postman
 	var user = new User();
 	user.username  = req.body.username;
 	user.password  = req.body.password;
 	user.email	   = req.body.email;
 	if(req.body.username==null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email==null || req.body.email=='')
 	{
 		res.send('Ensure username ,email & password were provided')
 	}
 	else{
 		user.save(function(err){
			 		if(err)
			 		{
			 			res.send(err);
			 		}
			 		else
			 		{
			 			res.send('User Created');
			 		}
			 	});
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
