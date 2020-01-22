
const sum = (num1, num2) => num1 + num2;
const pi = 3.14;
class object {
	constructor(){
		console.log('object value');
	}
}

module.exports = {            -- move object value to other page
	sum : sum,
	pi : pi,
	object : object
} 
