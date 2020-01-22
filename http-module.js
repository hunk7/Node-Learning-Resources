 -- multiple Schemas validation --

const Joi = require('Joi');

const arrayString = ['banana','bacon','cheese'];
const arrayObject = [{example: 'example1'},{example: 'example2'}]
const userInput = {
	personalInfo : {
		streetAddress : '2312321',
		city : 'jckleck',
		state : 'fl'
	},
	preferences : arrayString};

const personalInfoSchema = Joi.object().keys({
	streetAddress : Joi.string().trim().required(),
	city : Joi.string().trim().required(),
	state : Joi.string().trim().length(2).required()
})

const preferencesSchema = Joi.array().items(Joi.string());

const schema = Joi.object().keys({
	personalInfo : personalInfoSchema,
	preferences : preferencesSchema
})

Joi.validate(userInput,schema,(err,result) => {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
})



 -- validation --

const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('Joi');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.use(bodyParser.urlencoded({extended: false}));

// app.use(bodyParser.json());

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,'static','1.html'));
})

app.post('/',(req,res) => {
	// console.log(req.body);
	// creating schema
	const schema = Joi.object().keys({
		email : Joi.string().trim().email(),
		password : Joi.string().min(5).max(10)
	})

	Joi.validate(req.body,schema,(err,result) => {
		if (err) {
			console.log(err);
			res.send('error has occured --');
		} 
		console.log(result);
		res.send('successfully posted data');
	})
	// database work is here
	// res.json({success : true});
})

app.listen(3001);



-- for Post method with database Sending --

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,'static','1.html'));
})

app.post('/',(req,res) => {
	console.log(req.body);
	// database work is here
	res.json({success : true});
})

app.listen(3001);

// Inside Index.html

<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
<script>
    $(document).ready(() => {
        $('#form').submit((e) => {
            e.preventDefault();
            $.ajax({
                url : '/',
                type : 'post',
                contentType : 'application/json',
                data : JSON.stringify($('#form').serializeArray());(respose) => {
                    console.log('successfully got respose');
                    console.log(respose);
                }
                success : 
            })
        })
    })
</script>



 -- body parser & Post method Form --

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,'static','1.html'));
})

app.post('/',(req,res) => {
	console.log(req.body);
	// database work is here
	res.send('Successfully posted data');
})

app.listen(3001);




 -- Public State in dir & Response --

const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,'static','1.html'));
})

app.get('/example',(req,res) => {
	res.send('hitting example route');
})

app.get('/example/:name/:age',(req,res) => {
	console.log(req.params);
	console.log(req.query);
	res.send(req.params.name + " : " + req.params.age);
})

app.listen(3001);




 -- Read Static Files --

const http = require('http');
const fs = require('fs');

 -- 200 = Everything is ok with Request --

http.createServer((req,res) => {
	const readStream = fs.createReadStream('./static/1.json');
	res.writeHead(200,{'content-type' : 'application/json'});
	readStream.pipe(res);
}).listen(3001);




 -- hello world using response & request --

const http = require('http');
const server = http.createServer((req, res) => {
	if(req.url === '/'){
		res.write('hello world form node');
		res.end();
	} else {
		res.write('using some other domain');
		res.end();
	}
})

server.listen('3001');




  -- Create a JSON File --

 npm init
 {
 	details :
 }




 -- Installing Packages Usong nom  www.npmjs.com --
 
 npm install lodash

 const _ = require('lodash');
 let example = _.fill([1,2,3,4,5],"Banana",1,4);
 console.log(example);

 npm uninstall lodash
 