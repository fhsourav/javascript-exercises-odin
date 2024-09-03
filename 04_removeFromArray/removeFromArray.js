const removeFromArray = function(givenarray, ...args) {
	let newArray = []
	for (let index = 0; index < givenarray.length; index++) {
		let match = false;
		for (let arg of args) {
			if (typeof(givenarray[index]) == typeof(arg) && givenarray[index] == arg) {
				match = true;
			}
		}
		if (!match) {
			newArray.push(givenarray[index]);
		}
	}
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
