 -- Read Very Large File --

const fs = require('fs')
const readStream = fs.createReadStream('./example.txt','UTF-8');
readStream.on('data',(chunk) => {
	console.log(chunk);
})



 -- ReadFile & Write in Another File --

const fs = require('fs') // Required EverWhere
const readStream = fs.createReadStream('./example.txt','UTF-8')
const writeStream = fs.createWriteStream('2.txt');

readStream.on('data',(chunk) => {
	writeStream.write(chunk);
})
