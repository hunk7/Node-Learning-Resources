-- Middleware with returning value --

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyparser.json());

app.use((req,res,next) => {            -- Middleware
	req.banana = 'banana';
	next();
})

app.get('/',(req,res) => {
	console.log(req.banana);
	res.send('middleware');
})

app.listen(3001);




-- Middleware --

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyparser.json());

app.use((req,res,next) => {
	console.log(req.url,req.method);
	next();
})

app.get('/',(req,res) => {
	res.send('middleware');
})

app.listen(3001);