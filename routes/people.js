const express = require('express');
const route = express.Router();

route.use((req,res,next) => {
	console.log('middleware is used');
	next();
})

route.get('/',(req,res) => {
	res.send('/ Being hit');
})

route.get('/example',(req,res) => {
	res.send('/example Being hit');
})

module.exports = route;