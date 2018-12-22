const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());
var courses = [
	{id:1,name:'rishav'},

	{id:2,name:'rishav hack'},

	{id:3,name:'hacker'},
]

app.get('/',(req,res)=>{
	res.send('Hello World');
});	

app.get('/api/cou',(req,res)=>{
	res.send([1,2,3]);
});

app.get('/api/cou/:id',(req,res)=>{
	res.send(req.params.id)
});
app.get('/api/courses/:id',(req,res)=>{
	const course = courses.find(c=> c.id === parseInt(req.params.id));
	if(!course) res.status(404).send('The course not found')
	res.send(course);
});

app.get('/api/courses',(req,res)=>{
	res.send(courses);
});

app.get('/api/post/:year/:month',(req,res)=>{
	res.send(req.params)
});

app.post('/api/courses',(req,res)=>{
//	if(!req.body.name || req.body.name.length < 3){
//		res.status(400).send('Name is required and should be 3 character');
//		return
//	}

// Validation with joi

const schema = {
	name : Joi.string().min(3).required()
}
const result = Joi.validate(req.body,schema);
console.log(result);
if(result.error){
	res.status(400).send(result.error);
	return;
}

	const cours = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(cours);
	res.send(cours);
});


//app.get('/api/post/:year/:month',(req,res)=>{
//	res.send(req.query)
//});

// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('Listening',port))


//On mac we can set port using
//export PORT=5000