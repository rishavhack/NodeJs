const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const express = require('express');
const courses = require('./routes/courses');
const home = require('./routes/home')
const app = express();
console.log(`NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:${app.get('env')}`)

app.set('view engine','pug');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({extended:true})) //&key=value
app.use(express.static('public')) //locahost:3000/read.txt

app.use(helmet());
app.use('/api/courses',courses);
app.use('/',home);

//Configurration //export NODE_ENV=producation
console.log('Application Name :',config.get('name'));
console.log('Mail Server :',config.get('mail.host'));
console.log('Mail Password :',config.get('mail.password'));


if(app.get('env') === 'development'){
	app.use(morgan('tiny'));
	console.log('Morgan Enable')
}
app.use(logger);

app.use(function(req,res,next){
	console.log('Authenticating');
	next();
});






// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('Listening',port))


//On mac we can set port using
//export PORT=5000