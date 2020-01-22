const fs = require('fs');  -- Required EveryWhere -- File System --

------ Read / Delete -- Folder & Files -------
fs.readdir('demo',(err , files) => {
			if (err) {
				console.log(err);
			} else {
				for(let file of files) {
					fs.unlink('./demo/' + file,(err) => { // Delete Multiple files
						if (err) {
							console.log(err);
						} else {
							console.log('Successfully Deleted Multiple Files');
						}
					})
				}
			}
		})

fs.mkdir('demo',(err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Folder Created');
		fs.writeFile('./demo/example.txt','12345678823333333',(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Successfully Created File');
			}
		})

		fs.unlink('./demo/example.txt',(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('File Deleted');
			}
		})

		fs.rmdir('demo',(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Successfully Delete Folder');
			}
		})
	}
})

--------------------------------------------------------------------------------------

const fs = require('fs'); // Required EveryWhere -- File System --

// Delete a File
fs.unlink('example2.txt',(err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Successfully deleted the File');
	}
})

// append a file
fs.appendFile('example2.txt','Something id added',(err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Successfully appended data');
	}
})

// renaming a file
fs.rename('example.txt','example2.txt', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Successfully Renamed the File');
	}
})

--------------------------------------------------------------------------------------

const fs = require('fs');
// create a file
fs.writeFile('example.txt',"content inside the file", (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('File Successfully Created');
		fs.readFile('example.txt','utf8',(err, file) => {
			if (err) {
				console.log(err);
			} else {
				console.log(file);
			}
		})
	}
})

-----------------------------------------------------------------------------------
 
const readline = require('readline')    -- Readline / Command Line Inputs --
const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
})
let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let answer = num1 +  num2

rl.question(`What is ${num1} + ${num2}? \n`,(userInput)=>{
	if(userInput.trim() == answer) {
		rl.close();
	} else {
		rl.setPrompt('Incorrect Answer-_- \n')
		rl.prompt()
		rl.on('line', (userInput) => {
			if (userInput.trim() == answer) {
				rl.close();
			} else {
				rl.setPrompt(`your answer is Incorrect \n try again \n`);
				rl.prompt();
			}
		})
	}
})

rl.on('close',() => {
	console.log("correct!!!")
})



 
const tutorial = require('./tutorial')
console.log(tutorial.sum(1,1));
console.log(tutorial.pi);
console.log(new tutorial.object());

--------------------------------------------------------------------------------

const EventEmitter = require('events')
const eve = new EventEmitter()

eve.on('tutorial',(n1,n2) => {        //event listner ('address',(para) inline function)
	console.log(n1+n2)
})

eve.emit('tutorial',1,2);             //event emitter (occur)

class Person extends EventEmitter {   
	constructor(name){
		super()
		this._name = name;
	}
	get name(){
		return this._name;
	}
}

let pedro = new Person('pedro')        // object creation
let chris = new Person('chris')

chris.on('name',() => {
	console.log('name is ' + chris.name)   // function event listner
})

pedro.on('name',() => {
	console.log('my name is '+ pedro.name)
})

pedro.emit('name')
chris.emit('name')
