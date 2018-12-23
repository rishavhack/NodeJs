const express = require('express');
const router = express.Router();
var courses = [
	{id:1,name:'rishav'},

	{id:2,name:'rishav hack'},

	{id:3,name:'hacker'},
]

router.get('/:id',(req,res)=>{
	const course = courses.find(c=> c.id === parseInt(req.params.id));
	if(!course) 
		{
			res.status(404).send('The course not found')
			return
		}
	res.send(course);
});

router.get('/',(req,res)=>{
	res.send(courses);
});

router.get('/:year/:month',(req,res)=>{
	res.send(req.params)
});

router.post('/',(req,res)=>{
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

router.put('/:id',(req,res)=>{
	//Look up the course
	// if not exixting,return 404
	const course = courses.find(c=> c.id === parseInt(req.params.id));
	if(!course) {
		res.status(404).send('The course not found')
		return;
	}
	
	//Validate
const result = validateCourse(req.body);
// const { error } = validateCourse(req.body);
	console.log(result);
	if(result.error){
		res.status(400).send(result.error);
		return;
	}
	//Update Course
	course.name = req.body.name;
	res.send(course);

});

router.delete('/:id',(req,res)=>{
	const course = courses.find(c=> c.id === parseInt(req.params.id));
	if(!course) {
		res.status(404).send('The course not found')
		return
	}
	
	const index = courses.indexOf(course)
	courses.splice(index,1);

	res.send(courses)

});

function validateCourse(course){
	const schema = {
		name : Joi.string().min(3).required()
	}
	return Joi.validate(course,schema);
}
//app.get('/api/post/:year/:month',(req,res)=>{
//	res.send(req.query)
//});
module.exports = router


