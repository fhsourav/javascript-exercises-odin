const removeFromArray = function(givenarray, ...args) {
	console.log(givenarray)
	console.log(args)
	let newArray = []
	for (let index = 0; index < givenarray.length; index++) {
		let match = false;
		for (let arg of args) {
			if (givenarray[index] == arg) {
				match = true;
				break;
			}
		}
		if (!match) {
			newArray.push(givenarray[index]);
		}
		console.log(newArray)
		console.log('----------')
		return newArray;
	}
};

// Do not edit below this line
module.exports = removeFromArray;
